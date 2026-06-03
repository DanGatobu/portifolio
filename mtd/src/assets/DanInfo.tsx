import imageAssetsVar from "./images/imageAssets";

export const Experience = [
    {
        year: "Dec 2024 - Present",
        role: "Full-Stack & Automation Engineer",
        company: "DevCore (Remote)",
        description: `Ship features and reliability engineering across a large production enterprise SaaS platform
        (Next.js + FastAPI + PostgreSQL/pgvector on AWS, with Redis task processing, document-processing pipelines,
        and AI-assisted features). Operate and automate a multi-tenant email-infrastructure platform integrating
        Microsoft 365 with Azure across 130+ tenants — provisioning, DNS, deliverability, and incident response.
        Build AI-powered automations (LangChain agents, human-in-the-loop Slack approval) and cross-platform
        workflow integrations (n8n, GoHighLevel, Zapier), plus large-scale data engineering (200,000+ records).`,
        technologies: ["Next.js", "FastAPI", "PostgreSQL", "pgvector", "Redis", "AWS", "Azure", "LangChain", "n8n"],
    },
    {
        year: "2023 - Present",
        role: "Freelance Software Engineer",
        company: "Independent (Remote)",
        description: `Design, build, deploy, and operate production products end-to-end. Flagship: LogPose — a
        multi-platform web-scraping API / SaaS running on self-managed VPS infrastructure (nginx + Cloudflare) with
        an async job queue, managed proxy pool, API-key auth, and credit-based billing. Also a suite of free web
        tools serving real users, plus client integrations and automation systems.`,
        technologies: ["Python", "FastAPI", "React", "Docker", "nginx", "Cloudflare", "PostgreSQL", "Paystack"],
    },
    {
        year: "2022 - 2023",
        role: "Earlier Experience",
        company: "Industrial Attachment & Data Operations",
        description: `Microsoft Dynamics 365 Business Central setup and data operations (APPKINGS Solutions),
        and elections data handling and team coordination (IEBC).`,
        technologies: ["Microsoft Dynamics 365", "Data Operations"],
    },
];

export const HeroContent = 'Full-stack software engineer specialized in Python (FastAPI) and TypeScript (React / Next.js). I design, build, deploy, and operate production systems end-to-end — backend APIs, multi-tenant SaaS, AI-powered features, and automation pipelines — on AWS, Azure, and self-managed infrastructure. I own systems through their full lifecycle and keep them running at scale.';

export const AboutContent = 'I am a full-stack engineer with 4+ years building production web applications and ~2 years delivering full-stack products, backend APIs, and automation systems professionally. I work across the whole stack — FastAPI and Next.js front to back — with hands-on experience in PostgreSQL/pgvector, Redis/Celery pipelines, Docker, and AI features built on OpenAI, Anthropic, and LangChain. I have a proven record of owning systems through their full lifecycle (design → build → deploy → maintain) in multi-tenant, high-uptime environments, and I care as much about reliability and clean operations as I do about shipping new features.';

export const TechSummary = {
    languages: ["Python", "TypeScript", "JavaScript", "C#", "SQL", "Dart"],
    frameworks: ["FastAPI", "Next.js", "React", "Flask", "Django", "SQLAlchemy", "Alembic", "Celery", "WebSockets"],
    databases: ["PostgreSQL", "pgvector", "Redis", "MongoDB", "Supabase", "Firebase", "Qdrant"],
    cloudDevOps: ["AWS (EC2, S3)", "Azure (Functions, Identity, Key Vault, DNS)", "Self-managed VPS (Contabo, Hetzner)", "Docker", "nginx", "Cloudflare", "Vercel", "GCP", "Koyeb", "CI/CD"],
    apis: ["Slack", "Linear", "Attio", "Calendly", "Apollo", "LinkedIn", "Microsoft Graph", "Stripe", "Paystack", "Fireflies AI"],
    automation: ["n8n", "GoHighLevel", "Zapier", "Make", "Airtable", "Monday.com", "Selenium", "Large-scale Web Scraping & ETL"],
    aiMl: ["OpenAI", "Anthropic", "LangChain", "Vector Search / RAG", "Intelligent Agents", "TensorFlow", "NLP"],
    mediaProcessing: ["FFmpeg", "PDF.js", "yt-dlp"],
};

export const Projects = [
    // ── Professional Work ──────────────────────────────────────────────────
    {
        title: "Enterprise SaaS Platform — Feature & Reliability Engineering",
        image: imageAssetsVar.gap,
        description: "Contributed feature development and reliability engineering to a large production enterprise SaaS platform — Next.js + FastAPI + PostgreSQL/pgvector on AWS, with Redis task processing, document-processing pipelines, and AI-assisted features spanning web, mobile, and desktop. Shipped backend features, resolved production issues, and kept services running at high uptime.",
        technologies: ["Next.js", "FastAPI", "PostgreSQL", "pgvector", "Redis", "AWS", "AI / LLM"],
        section: "work",
    },
    {
        title: "Team Productivity & AI Support Platform — Contributor",
        image: imageAssetsVar.gap,
        description: "Helped build parts of a multi-tenant productivity platform (task management, scheduling, documents) with an AI-powered support layer. Next.js + FastAPI on Supabase/PostgreSQL with Redis/Celery background processing and a RAG support assistant backed by a vector database.",
        technologies: ["Next.js", "FastAPI", "Supabase", "Redis", "Celery", "Qdrant", "RAG"],
        section: "work",
    },
    {
        title: "Artemis Delta — Email Infrastructure Platform",
        image: imageAssetsVar.gap,
        description: "Maintain and enhance a multi-tenant email-infrastructure platform integrating Microsoft 365 with Azure and Google Cloud. Operate and automate administration across 130+ tenants — provisioning, permissions, and DNS — resolve production incidents, and improve deliverability and reliability.",
        technologies: ["Microsoft Graph", "Azure", "GCP", "Next.js", "Python", "Firebase"],
        liveUrl: "https://artemisdelta.com/",
        section: "work",
    },
    {
        title: "Paradigm — Outreach Automation Platform (Contributor)",
        image: imageAssetsVar.gap,
        description: "Contributed features and integrations to an email-sequencing / outreach-automation platform built on FastAPI + Supabase with AI classification, vector search, and durable background workers for sending, reply detection, and enrichment.",
        technologies: ["FastAPI", "Supabase", "OpenAI", "Qdrant", "Temporal", "Next.js"],
        liveUrl: "https://paradigmoutreach.com/",
        section: "work",
    },

    // ── Live Projects ──────────────────────────────────────────────────────
    {
        title: "LogPose — Multi-Platform Web-Scraping API / SaaS",
        image: imageAssetsVar.gap,
        description: "Flagship, solo-built production SaaS: a unified web-scraping API spanning e-commerce, real-estate, social, business-lead, and search data. FastAPI backend on a self-managed VPS (nginx + Cloudflare) with a React/Vite frontend on Vercel. Features an async job queue with priority scheduling and resumable jobs, a managed residential/datacenter proxy pool, credit-based billing (Paystack), API-key auth, and background monitoring/alerting workers.",
        technologies: ["FastAPI", "React", "PostgreSQL", "VPS", "nginx", "Cloudflare", "Paystack", "Async Jobs"],
        liveUrl: "https://logposervices.com/",
    },
    {
        title: "AllTools — Developer Utilities Platform",
        image: imageAssetsVar.pydfui,
        description: "A web platform aggregating practical developer utilities into a single, fast, mobile-friendly interface. React frontend deployed on Vercel, FastAPI backend on AWS EC2/GCP VM, optimized for low-latency API responses and reliable uptime.",
        technologies: ["React", "FastAPI", "Vercel", "AWS EC2", "GCP"],
        liveUrl: "https://www.alltools.sbs/",
    },
    {
        title: "DevToolss — Developer Tools Directory",
        image: imageAssetsVar.pydfui,
        description: "A curated developer tools discovery site focused on discoverability and quick access. Clean, responsive React UI with a FastAPI backend deployed on Koyeb for efficient hosting and scaling.",
        technologies: ["React", "FastAPI", "Vercel", "Koyeb"],
        liveUrl: "https://www.devtoolss.sbs/",
    },
    {
        title: "PDFWorkshop — PDF Tools Suite",
        image: imageAssetsVar.pdfapi,
        description: "A web-based PDF utilities suite for everyday document workflows. Decoupled React frontend and FastAPI backend enabling modular feature delivery and independent scaling.",
        technologies: ["React", "FastAPI", "Vercel", "AWS EC2", "GCP"],
        liveUrl: "https://www.pdfworkshop.sbs/",
    },
    {
        title: "MP3Juices — Audio Download Web App",
        image: imageAssetsVar.mpyjuiceui,
        description: "A lightweight web app for converting and downloading YouTube audio with a simple, user-focused interface. Separate API layer keeps the frontend fast and the backend scalable.",
        technologies: ["React", "FastAPI", "Vercel", "AWS EC2", "GCP", "FFmpeg", "yt-dlp"],
        liveUrl: "https://www.mp3juices.sbs/",
    },
    {
        title: "Browser-Based Code Editor",
        image: imageAssetsVar.pydfui,
        description: "A Next.js in-browser editor experience with a Dockerized backend hosted on Render. Focused on performance, reliability, and a smooth in-browser workflow.",
        technologies: ["Next.js", "Docker", "Render", "Vercel"],
        liveUrl: "https://editor-tau-sand.vercel.app/",
    },
    {
        title: "Portfolio Website",
        image: imageAssetsVar.abtme,
        description: "Personal portfolio built with React and deployed on Vercel showcasing projects, experience, and skills.",
        technologies: ["React", "Vercel", "Tailwind CSS", "TypeScript"],
        liveUrl: "https://meetdan.vercel.app/",
    },
    {
        title: "PDF Management System — Full Stack",
        image: imageAssetsVar.pydfui,
        description: "Complete PDF management solution with separate frontend and backend deployments. React frontend on Vercel for intuitive PDF preview, organization, and management. FastAPI backend handling PDF processing and file uploads. Frontend: https://pydfui.vercel.app/ | Backend API: https://pydf-api.vercel.app",
        technologies: ["React", "FastAPI", "Vercel", "PDF.js", "Python"],
        liveUrl: "https://pydfui.vercel.app/",
    },
    {
        title: "MP3 Audio Downloader Platform — Full Stack",
        image: imageAssetsVar.mpyjuiceui,
        description: "Comprehensive audio extraction platform. FastAPI backend leveraging yt-dlp and FFmpeg for YouTube audio extraction. React frontend with YouTube Data API integration for video search and MP3 download management. Deployed on AWS EC2 with Docker containerization. Frontend: https://mpyjuice-ui.vercel.app/ | Docker Hub: https://hub.docker.com/r/dodan9/mpy3juices",
        technologies: ["React", "FastAPI", "AWS EC2", "Docker", "FFmpeg", "yt-dlp", "YouTube Data API"],
        liveUrl: "https://mpyjuice-ui.vercel.app/",
    },

    // ── GitHub Projects ────────────────────────────────────────────────────
    {
        title: "Django E-commerce Shop",
        image: imageAssetsVar.djangoecom2,
        description: "Full-featured online shopping platform with secure PayPal payment integration, real-time inventory management via Firebase, comprehensive order management, and PostgreSQL for robust data handling.",
        technologies: ["Django", "Firebase", "PostgreSQL", "PayPal", "Python"],
        githubUrl: "https://github.com/DanGatobu/Fitshop",
    },
    {
        title: "React E-commerce Shop",
        image: imageAssetsVar.reactshp,
        description: "Modern e-commerce solution with sleek responsive design, shopping cart, product catalog, and secure Stripe checkout. MongoDB for flexible data storage.",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        githubUrl: "https://github.com/DanGatobu/fitshopui",
    },
    {
        title: "Telephony System Integration — Yemot & Donary APIs",
        image: imageAssetsVar.yemapi,
        description: "Enterprise-grade FastAPI integration connecting the Yemot telephony system with the Donary platform. Real-time data processing and routing, seamless communication between telephony and business systems, high-performance data exchange architecture.",
        technologies: ["FastAPI", "Python", "Yemot API", "Donary API"],
        githubUrl: "https://github.com/DanGatobu/DnApi",
    },
    {
        title: "AI-Powered Trading Bot",
        image: imageAssetsVar.fxb,
        description: "Sophisticated algorithmic trading system using TensorFlow for ML market analysis, real-time trade execution via MetaTrader API, PyQt6 GUI for monitoring and configuration, MongoDB for trade history and performance analytics.",
        technologies: ["Python", "TensorFlow", "PyQt6", "MetaTrader API", "MongoDB", "APScheduler"],
        githubUrl: "https://github.com/DanGatobu/Forth-project",
    },
    {
        title: "Automated Instagram Account Grower",
        image: imageAssetsVar.instagrower,
        description: "Instagram growth automation platform with multi-account management, automated following/unfollowing strategies, image posting with scheduling, and PostgreSQL analytics for growth metrics. Uses Selenium to interact with Instagram to avoid detection.",
        technologies: ["Qt", "Selenium", "PostgreSQL", "Python"],
        githubUrl: "https://github.com/DanGatobu/instabot",
    },
    {
        title: "Automated Excel Report Generator & Email Sender",
        image: imageAssetsVar.gap,
        description: "Automated business reporting solution. API data fetching, Excel report generation, and daily automated email distribution. Also has a Google Apps Script version for always-online operation.",
        technologies: ["Python", "Selenium", "Google Apps Script"],
        githubUrl: "https://github.com/DanGatobu/donaryselenum",
    },
    {
        title: "Django Job Application Assistant",
        image: imageAssetsVar.jbap,
        description: "Productivity tool that simplifies the job application process with template customization, automated submission, and scheduling reminders for follow-ups. PostgreSQL for application tracking.",
        technologies: ["Django", "PostgreSQL", "Python"],
        githubUrl: "https://github.com/DanGatobu/job-application-manager",
    },

    // ── Automation Projects ────────────────────────────────────────────────
    {
        title: "Intelligent Support Ticketing System",
        image: imageAssetsVar.gap,
        description: "Comprehensive real-time customer support platform integrating user communication with internal team workflows. Features WebSocket-powered real-time messaging, automated ticket creation, and direct Slack integration for support team collaboration. Firebase handles user authentication and data persistence for reliable ticket tracking and resolution management.",
        technologies: ["Next.js", "FastAPI", "WebSockets", "Slack API", "Firebase", "Flask"],
    },
    {
        title: "Mini Real-Time Ticketing System",
        image: imageAssetsVar.gap,
        description: "Lightweight real-time ticketing system with a FastAPI WebSocket backend hosted on Render, Next.js frontend, and Firebase for authentication and persistence. Enables fast ticket creation and live updates for support operations.",
        technologies: ["FastAPI", "WebSockets", "Next.js", "Firebase", "Render"],
    },
    {
        title: "Project Management Dashboard",
        image: imageAssetsVar.gap,
        description: "Centralized project management platform providing comprehensive oversight of development projects. Features project creation, status tracking, resource allocation, and progress monitoring. Supabase powers real-time data synchronization with a fully responsive design for cross-device accessibility.",
        technologies: ["Next.js", "FastAPI", "Supabase"],
    },
    {
        title: "Next.js + FastAPI Production App Maintenance (AWS EC2)",
        image: imageAssetsVar.gap,
        description: "Owned ongoing maintenance for a production Next.js application backed by a FastAPI API hosted on AWS EC2 Linux. Delivered stability improvements, bug fixes, dependency upgrades, and deployment support while maintaining high uptime and performance.",
        technologies: ["Next.js", "FastAPI", "AWS EC2", "Linux"],
    },
    {
        title: "AI-Powered Website Analysis Chatbot",
        image: imageAssetsVar.gap,
        description: "Intelligent chatbot agent that analyzes websites and provides actionable insights. Leverages LangChain's NLP capabilities to crawl, analyze, and summarize website content, offering detailed reports on site structure, content quality, and optimization opportunities.",
        technologies: ["LangChain", "FastAPI", "Python", "Natural Language Processing"],
    },
    {
        title: "Project Management Automation — N8N",
        image: imageAssetsVar.gap,
        description: "Engineered an automated workflow system integrating Linear project tracking with Slack. New projects are automatically posted to designated Slack channels, enabling team members to claim assignments directly through Slack interactions, reducing project allocation time and improving team coordination.",
        technologies: ["N8N", "Slack API", "Linear API"],
    },
    {
        title: "Intelligent Email Response System — N8N",
        image: imageAssetsVar.gap,
        description: "Automated email management system that generates contextual AI responses, routes them through Slack for team approval and modification, then sends finalized responses. Reduces response time while maintaining quality control through human oversight.",
        technologies: ["N8N", "Email APIs", "Slack API"],
    },
    {
        title: "Recruitment Automation — N8N",
        image: imageAssetsVar.gap,
        description: "Intelligent candidate screening system. Automated job application analysis, candidate shortlisting based on predefined criteria, streamlined recruitment process optimization.",
        technologies: ["N8N", "Natural Language Processing"],
    },
    {
        title: "FAQ Generation System — N8N",
        image: imageAssetsVar.gap,
        description: "Automated system that collects and analyzes Slack conversations to generate comprehensive FAQs and knowledge base articles. The N8N workflow processes communication patterns, identifies frequently asked questions, and creates structured documentation, significantly reducing repetitive support queries.",
        technologies: ["N8N", "Slack API", "Natural Language Processing"],
    },
    {
        title: "CRM Integration & Automation Suite",
        image: imageAssetsVar.gap,
        description: "Comprehensive business process automation suite built with N8N. Attio-Bison integration for automated CRM and business intelligence data sync. Calendly-Attio connection for automatic CRM record creation from calendar bookings. Candidate shortlisting automation that screens job applications based on predefined criteria.",
        technologies: ["N8N", "Attio CRM", "Calendly", "Bison Automation"],
    },
    {
        title: "Zapier + Fireflies AI Automation Pipeline",
        image: imageAssetsVar.gap,
        description: "Automation pipeline that pulls meeting transcripts from Fireflies AI, applies a quality scoring and rating step, and saves a clean summary plus rating into documents for different stakeholders. Reduced manual copy-paste work and improved consistency of meeting documentation.",
        technologies: ["Zapier", "Fireflies AI", "Google Docs", "Automation"],
    },
    {
        title: "GoHighLevel Workflow & Pipeline Automation",
        image: imageAssetsVar.gap,
        description: "Designed and implemented multiple GHL workflows to automate course operations and reduce manual updates across the learner lifecycle. Automated pipeline transitions and updates for key milestones such as course start and course completion.",
        technologies: ["GoHighLevel", "CRM Automation", "Workflow Design"],
    },
    {
        title: "Airtable + Monday.com Automation",
        image: imageAssetsVar.gap,
        description: "Implemented automation workflows using Airtable native automations and N8N to connect systems, reduce repetitive ops work, and keep data in sync across teams.",
        technologies: ["Airtable", "Monday.com", "N8N", "Automation"],
    },
    {
        title: "Email Marketing Platform Integrations",
        image: imageAssetsVar.gap,
        description: "Integrated multiple email marketing platforms including SmartLead, MailLead, and Instantly via API connections. Automated campaign management and analytics, cross-platform data synchronization.",
        technologies: ["APIs", "Automation Workflows"],
    },
    {
        title: "Comprehensive Web Scraping Suite",
        image: imageAssetsVar.gap,
        description: "Large-scale data collection infrastructure. PitchBook: scraped and processed 150,000+ investment and company records. RocketReach: collected and structured 50,000+ contact records in Supabase. Apollo & LinkedIn: built scalable scraping solutions for lead generation and market research. Also covers e-commerce (Zillow, Amazon, Walmart, eBay, Etsy, AliExpress), social media (Facebook, Instagram, TikTok), and travel/review platforms (TripAdvisor, Booking.com, Yelp). 200,000+ records processed total.",
        technologies: ["Python", "Web Scraping", "Supabase", "Apollo API", "LinkedIn API"],
    },
    {
        title: "YouTube Shorts Generator",
        image: imageAssetsVar.ytdownloader,
        description: "Automated content creation pipeline for YouTube Shorts. Text-to-video short generation, automated YouTube upload and publishing, video processing with FFmpeg.",
        technologies: ["Python", "FFmpeg", "YouTube API", "Video Processing"],
    },
];

export const contactMe = {
    email: "rdan99848@gmail.com",
    phoneNo: "+254 710948 426",
    address: "Nairobi, Kenya",
};
