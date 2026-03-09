import { useState, useEffect, useRef } from "react";
import type React from "react";
import { Projects, Experience, AboutContent, contactMe } from "../assets/DanInfo";

// ── types ──────────────────────────────────────────────────────────────────
interface Message {
  role: "user" | "model";
  text: string;
}

interface ChatSession {
  id: string;
  title: string;
  createdAt: number;
  messages: Message[];
  attachedProjectIndexes: number[];
  aboutText: string; // editable per-chat context
}

// ── constants ──────────────────────────────────────────────────────────────
const LS_KEY_API   = "dan_gemini_key";
const LS_KEY_PASS  = "dan_chat_authed";
const LS_KEY_CHATS = "dan_chat_sessions";
const CORRECT_PASS = "dan2024";

// ── extract plain text + hrefs from a JSX node recursively ───────────────
function jsxToText(node: React.ReactNode): string {
  if (!node) return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(jsxToText).join("");
  if (typeof node === "object" && "props" in (node as object)) {
    const el = node as React.ReactElement<{ href?: string; children?: React.ReactNode }>;
    const childText = jsxToText(el.props.children);
    // if it's an anchor, append the href so URLs are preserved
    if (el.type === "a" && el.props.href) {
      return `${childText} (${el.props.href})`;
    }
    return childText;
  }
  return "";
}

// ── default "about" block pulled from DanInfo ──────────────────────────────
function buildDefaultAbout(): string {
  const expLines = Experience.map(
    (e) => `${e.role} at ${e.company} (${e.year})\n${e.description}\nTech: ${e.technologies.join(", ")}`
  ).join("\n\n");

  return `Full Name: Dan Gatobu
GitHub: https://github.com/DanGatobu
LinkedIn: https://www.linkedin.com/in/dan-gatobu-012544214/
Fiverr: https://www.fiverr.com/dan_new_ton
Upwork: https://www.upwork.com/freelancers/~01128993ebc1bd665b

About:
${AboutContent}

Experience:
${expLines}

Contact:
Email: ${contactMe.email} | Phone: ${contactMe.phoneNo} | Location: ${contactMe.address}`;
}

// ── helpers ────────────────────────────────────────────────────────────────
function loadChats(): ChatSession[] {
  try { return JSON.parse(localStorage.getItem(LS_KEY_CHATS) || "[]"); }
  catch { return []; }
}
function saveChats(chats: ChatSession[]) {
  localStorage.setItem(LS_KEY_CHATS, JSON.stringify(chats));
}

function projectToText(idx: number): string {
  const p = Projects[idx];
  if (!p) return "";
  // extract plain text + URLs from JSX description
  const desc = typeof p.description === "string" ? p.description : jsxToText(p.description);
  return `Project: ${p.title}\nTechnologies: ${p.technologies.join(", ")}\nDescription: ${desc}`;
}

function buildSystemPrompt(aboutText: string, attachedIndexes: number[]): string {
  const projectsText = attachedIndexes.map(projectToText).join("\n\n");
  return `You are a job application assistant for Dan Gatobu, a software developer based in Nairobi, Kenya.
You know everything about Dan from the context below. Always refer to him by name when relevant, always write responses in first person as Dan, and always use the exact links, emails, and details provided — never say you don't have information that is clearly in the context.

== Dan's Full Profile ==
${aboutText}

${projectsText ? `== Attached Projects ==\n${projectsText}\n` : ""}
When writing cover letters or applications, be professional, specific, and tailor every response to the job/role described. Reference relevant projects and experience by name.`;
}

// ── main component ─────────────────────────────────────────────────────────
const DanChat = () => {
  const [visible, setVisible]       = useState(false);
  const [authed, setAuthed]         = useState(false);
  const [passInput, setPassInput]   = useState("");
  const [passError, setPassError]   = useState(false);

  const [apiKey, setApiKey]           = useState("");
  const [apiKeyInput, setApiKeyInput] = useState("");
  const [showApiSetup, setShowApiSetup] = useState(false);

  const [chats, setChats]             = useState<ChatSession[]>([]);
  const [activeChatId, setActiveChatId] = useState<string | null>(null);
  const [input, setInput]             = useState("");
  const [loading, setLoading]         = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // new-chat modal state
  const [showNewChat, setShowNewChat]         = useState(false);
  const [selectedProjects, setSelectedProjects] = useState<number[]>([]);
  const [aboutDraft, setAboutDraft]           = useState("");

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setAuthed(localStorage.getItem(LS_KEY_PASS) === "true");
    setApiKey(localStorage.getItem(LS_KEY_API) || "");
    setChats(loadChats());
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chats, activeChatId]);

  // Ctrl+Shift+D to toggle
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === "D") setVisible((v) => !v);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const activeChat = chats.find((c) => c.id === activeChatId) ?? null;

  // ── auth ──────────────────────────────────────────────────────────────
  const handleAuth = () => {
    if (passInput === CORRECT_PASS) {
      localStorage.setItem(LS_KEY_PASS, "true");
      setAuthed(true); setPassError(false);
    } else { setPassError(true); }
  };

  // ── api key ───────────────────────────────────────────────────────────
  const saveApiKey = () => {
    localStorage.setItem(LS_KEY_API, apiKeyInput.trim());
    setApiKey(apiKeyInput.trim());
    setShowApiSetup(false);
  };

  // ── open new-chat modal (pre-fill about draft) ────────────────────────
  const openNewChat = () => {
    setAboutDraft(buildDefaultAbout());
    setSelectedProjects([]);
    setShowNewChat(true);
  };

  // ── create chat ───────────────────────────────────────────────────────
  const createChat = () => {
    const id = Date.now().toString();
    const newChat: ChatSession = {
      id,
      title: `Chat ${chats.length + 1}`,
      createdAt: Date.now(),
      messages: [],
      attachedProjectIndexes: selectedProjects,
      aboutText: aboutDraft,
    };
    const updated = [newChat, ...chats];
    setChats(updated); saveChats(updated);
    setActiveChatId(id);
    setShowNewChat(false);
  };

  // ── delete / clear ────────────────────────────────────────────────────
  const deleteChat = (id: string) => {
    const updated = chats.filter((c) => c.id !== id);
    setChats(updated); saveChats(updated);
    if (activeChatId === id) setActiveChatId(updated[0]?.id ?? null);
  };
  const clearAllChats = () => { setChats([]); saveChats([]); setActiveChatId(null); };

  // ── send ──────────────────────────────────────────────────────────────
  const sendMessage = async () => {
    if (!input.trim() || !activeChat || loading) return;
    if (!apiKey) { setShowApiSetup(true); return; }

    const userMsg: Message = { role: "user", text: input.trim() };
    const updatedMessages = [...activeChat.messages, userMsg];
    const updatedChat = { ...activeChat, messages: updatedMessages };
    const updatedChats = chats.map((c) => (c.id === activeChatId ? updatedChat : c));
    setChats(updatedChats); saveChats(updatedChats);
    setInput(""); setLoading(true);

    try {
      const systemPrompt = buildSystemPrompt(activeChat.aboutText, activeChat.attachedProjectIndexes);
      const contents = [
        { role: "user",  parts: [{ text: systemPrompt }] },
        { role: "model", parts: [{ text: "Understood. Ready to help with job applications." }] },
        ...updatedMessages.map((m) => ({ role: m.role, parts: [{ text: m.text }] })),
      ];

      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ contents }),
        }
      );

      const data = await res.json();
      const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? "Sorry, no response.";
      const finalMessages = [...updatedMessages, { role: "model" as const, text: reply }];
      const finalChats = updatedChats.map((c) =>
        c.id === activeChatId ? { ...updatedChat, messages: finalMessages } : c
      );
      setChats(finalChats); saveChats(finalChats);
    } catch {
      const finalMessages = [...updatedMessages, { role: "model" as const, text: "Error contacting Gemini. Check your API key." }];
      const finalChats = updatedChats.map((c) =>
        c.id === activeChatId ? { ...updatedChat, messages: finalMessages } : c
      );
      setChats(finalChats); saveChats(finalChats);
    } finally { setLoading(false); }
  };

  if (!visible) return null;

  // ── password gate ─────────────────────────────────────────────────────
  if (!authed) return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="w-80 rounded-xl border border-neutral-700 bg-neutral-900 p-6 shadow-2xl">
        <h2 className="mb-4 text-center text-lg font-semibold text-neutral-200">🔒 Private Area</h2>
        <input type="password" placeholder="Password" value={passInput}
          onChange={(e) => setPassInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAuth()}
          className="w-full rounded-lg border border-neutral-700 bg-neutral-800 px-3 py-2 text-sm text-neutral-200 outline-none focus:border-purple-500"
        />
        {passError && <p className="mt-1 text-xs text-red-400">Wrong password</p>}
        <button onClick={handleAuth} className="mt-3 w-full rounded-lg bg-purple-700 py-2 text-sm font-medium text-white hover:bg-purple-600">Enter</button>
        <button onClick={() => setVisible(false)} className="mt-2 w-full rounded-lg py-2 text-xs text-neutral-500 hover:text-neutral-300">Cancel</button>
      </div>
    </div>
  );

  // ── api key modal ─────────────────────────────────────────────────────
  if (showApiSetup || !apiKey) return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="w-96 rounded-xl border border-neutral-700 bg-neutral-900 p-6 shadow-2xl">
        <h2 className="mb-2 text-lg font-semibold text-neutral-200">Gemini API Key</h2>
        <p className="mb-4 text-xs text-neutral-400">
          Saved to localStorage. Get yours at{" "}
          <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer" className="text-purple-400 underline">aistudio.google.com</a>
        </p>
        <input type="password" placeholder="AIza..." value={apiKeyInput}
          onChange={(e) => setApiKeyInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && saveApiKey()}
          className="w-full rounded-lg border border-neutral-700 bg-neutral-800 px-3 py-2 text-sm text-neutral-200 outline-none focus:border-purple-500"
        />
        <button onClick={saveApiKey} className="mt-3 w-full rounded-lg bg-purple-700 py-2 text-sm font-medium text-white hover:bg-purple-600">Save Key</button>
        {apiKey && <button onClick={() => setShowApiSetup(false)} className="mt-2 w-full rounded-lg py-2 text-xs text-neutral-500 hover:text-neutral-300">Cancel</button>}
      </div>
    </div>
  );

  // ── new chat modal ────────────────────────────────────────────────────
  if (showNewChat) return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="w-[560px] max-h-[90vh] overflow-y-auto rounded-xl border border-neutral-700 bg-neutral-900 p-6 shadow-2xl">
        <h2 className="mb-1 text-lg font-semibold text-neutral-200">New Chat</h2>
        <p className="mb-4 text-xs text-neutral-400">
          Review and edit your context, then pick projects to attach.
        </p>

        {/* editable about section */}
        <label className="mb-1 block text-xs font-medium text-neutral-400">
          About you (pre-filled from your portfolio — edit freely)
        </label>
        <textarea
          rows={10}
          value={aboutDraft}
          onChange={(e) => setAboutDraft(e.target.value)}
          className="w-full resize-y rounded-lg border border-neutral-700 bg-neutral-800 px-3 py-2 text-xs text-neutral-200 outline-none focus:border-purple-500 font-mono leading-relaxed"
        />

        {/* project picker */}
        <p className="mt-4 mb-2 text-xs font-medium text-neutral-400">
          Attach projects as extra context (optional)
        </p>
        <div className="space-y-1.5">
          {Projects.map((p, i) => (
            <label key={i} className="flex cursor-pointer items-center gap-3 rounded-lg border border-neutral-700 px-3 py-2 hover:border-purple-600">
              <input
                type="checkbox"
                checked={selectedProjects.includes(i)}
                onChange={() =>
                  setSelectedProjects((prev) =>
                    prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
                  )
                }
                className="accent-purple-500"
              />
              <span className="text-sm text-neutral-300">{p.title}</span>
            </label>
          ))}
        </div>

        <div className="mt-5 flex gap-2">
          <button onClick={createChat} className="flex-1 rounded-lg bg-purple-700 py-2 text-sm font-medium text-white hover:bg-purple-600">
            Start Chat
          </button>
          <button onClick={() => setShowNewChat(false)} className="flex-1 rounded-lg border border-neutral-700 py-2 text-sm text-neutral-400 hover:text-neutral-200">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );

  // ── main chat UI ──────────────────────────────────────────────────────
  return (
    <div className="fixed inset-0 z-50 flex bg-neutral-950/95 backdrop-blur-sm">
      {/* sidebar */}
      {sidebarOpen && (
        <div className="flex w-60 flex-col border-r border-neutral-800 bg-neutral-900">
          <div className="flex items-center justify-between border-b border-neutral-800 px-3 py-3">
            <span className="text-sm font-semibold text-neutral-200">Chats</span>
            <div className="flex gap-2">
              <button onClick={openNewChat} title="New chat" className="rounded p-1 text-neutral-400 hover:text-purple-400">✏️</button>
              <button onClick={clearAllChats} title="Clear all" className="rounded p-1 text-neutral-400 hover:text-red-400 text-xs">🗑</button>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            {chats.length === 0 && <p className="p-4 text-xs text-neutral-500">No chats yet.</p>}
            {chats.map((c) => (
              <div key={c.id} onClick={() => setActiveChatId(c.id)}
                className={`group flex cursor-pointer items-center justify-between px-3 py-2 text-sm hover:bg-neutral-800 ${activeChatId === c.id ? "bg-neutral-800 text-purple-400" : "text-neutral-300"}`}
              >
                <span className="truncate">{c.title}</span>
                <button onClick={(e) => { e.stopPropagation(); deleteChat(c.id); }}
                  className="hidden text-neutral-500 hover:text-red-400 group-hover:block">✕</button>
              </div>
            ))}
          </div>
          <div className="border-t border-neutral-800 p-3">
            <button onClick={() => setShowApiSetup(true)} className="w-full rounded-lg border border-neutral-700 py-1.5 text-xs text-neutral-400 hover:text-purple-400">
              🔑 API Key
            </button>
          </div>
        </div>
      )}

      {/* chat area */}
      <div className="flex flex-1 flex-col">
        <div className="flex items-center justify-between border-b border-neutral-800 px-4 py-3">
          <div className="flex items-center gap-3">
            <button onClick={() => setSidebarOpen((s) => !s)} className="text-neutral-400 hover:text-neutral-200">☰</button>
            <span className="text-sm font-semibold text-neutral-200">
              {activeChat ? activeChat.title : "Job Application Assistant"}
            </span>
            {activeChat && activeChat.attachedProjectIndexes.length > 0 && (
              <span className="rounded-full bg-purple-900/50 px-2 py-0.5 text-xs text-purple-300">
                {activeChat.attachedProjectIndexes.length} project{activeChat.attachedProjectIndexes.length > 1 ? "s" : ""} attached
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <button onClick={openNewChat} className="rounded-lg border border-neutral-700 px-3 py-1.5 text-xs text-neutral-400 hover:text-purple-400">+ New Chat</button>
            <button onClick={() => setVisible(false)} className="rounded-lg border border-neutral-700 px-3 py-1.5 text-xs text-neutral-400 hover:text-red-400">✕ Close</button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
          {!activeChat && (
            <div className="flex h-full items-center justify-center">
              <div className="text-center">
                <p className="text-neutral-400 text-sm mb-3">No chat selected.</p>
                <button onClick={openNewChat} className="rounded-lg bg-purple-700 px-4 py-2 text-sm text-white hover:bg-purple-600">Start a new chat</button>
              </div>
            </div>
          )}
          {activeChat?.messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-sm whitespace-pre-wrap ${msg.role === "user" ? "bg-purple-700 text-white" : "bg-neutral-800 text-neutral-200"}`}>
                {msg.text}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="rounded-2xl bg-neutral-800 px-4 py-2.5 text-sm text-neutral-400">Thinking...</div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        <div className="border-t border-neutral-800 px-4 py-3">
          <div className="flex gap-2">
            <textarea rows={2} value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); } }}
              placeholder={activeChat ? "Describe the job role or paste the job description..." : "Start a new chat first"}
              disabled={!activeChat || loading}
              className="flex-1 resize-none rounded-xl border border-neutral-700 bg-neutral-800 px-3 py-2 text-sm text-neutral-200 outline-none focus:border-purple-500 disabled:opacity-40"
            />
            <button onClick={sendMessage} disabled={!activeChat || loading || !input.trim()}
              className="rounded-xl bg-purple-700 px-4 text-sm font-medium text-white hover:bg-purple-600 disabled:opacity-40">
              Send
            </button>
          </div>
          <p className="mt-1 text-xs text-neutral-600">Enter to send · Shift+Enter for new line</p>
        </div>
      </div>
    </div>
  );
};

export default DanChat;
