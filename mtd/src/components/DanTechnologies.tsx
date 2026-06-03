import { useEffect, useState } from 'react';
import type { IconType } from 'react-icons';
import { FaPython, FaReact, FaAws, FaBrain, FaRobot } from 'react-icons/fa';
import {
  SiTypescript, SiJavascript, SiDotnet,
  SiFastapi, SiFlask, SiDjango,
  SiNextdotjs, SiTailwindcss, SiVite,
  SiPostgresql, SiRedis, SiMongodb, SiSupabase,
  SiGooglecloud, SiDocker, SiVercel, SiCloudflare,
  SiOpenai, SiTensorflow,
  SiSelenium, SiZapier,
} from 'react-icons/si';
import { motion } from 'framer-motion';

// ── grouped tech, mirrors the categories in DanInfo's TechSummary ────────────
type Tech = { icon: IconType; color: string };
type Group = { label: string; items: Tech[] };

const GROUPS: Group[] = [
  { label: 'Languages', items: [
    { icon: FaPython, color: 'text-yellow-400' },
    { icon: SiTypescript, color: 'text-blue-400' },
    { icon: SiJavascript, color: 'text-yellow-300' },
    { icon: SiDotnet, color: 'text-purple-400' },
  ]},
  { label: 'Backend', items: [
    { icon: SiFastapi, color: 'text-green-400' },
    { icon: SiFlask, color: 'text-neutral-300' },
    { icon: SiDjango, color: 'text-green-600' },
  ]},
  { label: 'Frontend', items: [
    { icon: SiNextdotjs, color: 'text-neutral-200' },
    { icon: FaReact, color: 'text-cyan-400' },
    { icon: SiTailwindcss, color: 'text-cyan-300' },
    { icon: SiVite, color: 'text-purple-400' },
  ]},
  { label: 'Databases', items: [
    { icon: SiPostgresql, color: 'text-sky-400' },
    { icon: SiRedis, color: 'text-red-500' },
    { icon: SiMongodb, color: 'text-green-500' },
    { icon: SiSupabase, color: 'text-emerald-400' },
  ]},
  { label: 'Cloud & DevOps', items: [
    { icon: FaAws, color: 'text-orange-400' },
    { icon: SiGooglecloud, color: 'text-blue-400' },
    { icon: SiDocker, color: 'text-blue-500' },
    { icon: SiVercel, color: 'text-neutral-200' },
    { icon: SiCloudflare, color: 'text-orange-500' },
  ]},
  { label: 'AI / ML', items: [
    { icon: SiOpenai, color: 'text-teal-300' },
    { icon: FaBrain, color: 'text-pink-400' },
    { icon: SiTensorflow, color: 'text-orange-500' },
  ]},
  { label: 'Automation', items: [
    { icon: SiZapier, color: 'text-orange-400' },
    { icon: FaRobot, color: 'text-cyan-300' },
    { icon: SiSelenium, color: 'text-green-400' },
  ]},
];

// continuous gentle bob — preserved from the original icons
const bob = (duration: number) => ({
  initial: { y: -6 },
  animate: {
    y: [6, -6],
    transition: { duration, repeat: Infinity, ease: 'linear', repeatType: 'reverse' as const },
  },
});

const shuffle = <T,>(arr: T[]): T[] => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const DanTechnologies = () => {
  // order of the group cards; reshuffled on an interval so the cards swap places
  const [order, setOrder] = useState(() => GROUPS.map((_, i) => i));

  useEffect(() => {
    const id = setInterval(() => setOrder((prev) => shuffle(prev)), 9000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-wrap items-stretch justify-center gap-5"
      >
        {order.map((gi) => {
          const group = GROUPS[gi];
          return (
            <motion.div
              key={group.label}
              layout
              transition={{ layout: { type: 'spring', stiffness: 120, damping: 18 } }}
              className="rounded-2xl border border-neutral-800 bg-neutral-900/30 px-6 py-5 backdrop-blur-sm hover:border-cyan-700/60 transition-colors"
            >
              <p className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-neutral-500">
                {group.label}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                {group.items.map(({ icon: Icon, color }, i) => (
                  <motion.div
                    key={i}
                    variants={bob(2.2 + (i % 3) * 0.4)}
                    initial="initial"
                    animate="animate"
                    whileHover={{ scale: 1.3, rotate: 4 }}
                    className="cursor-pointer rounded-xl border border-neutral-800 p-3 transition-colors hover:border-cyan-500/70 hover:bg-neutral-800/60"
                  >
                    <Icon className={`text-4xl md:text-5xl ${color} drop-shadow-[0_0_10px_rgba(34,211,238,0.15)]`} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default DanTechnologies;
