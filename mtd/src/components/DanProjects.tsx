
import { Projects } from '../assets/DanInfo'
import { motion } from 'framer-motion'

// projects with liveUrl, projects with only githubUrl, rest (automations)
const liveProjects   = Projects.filter((p) => 'liveUrl' in p && p.liveUrl);
const githubProjects = Projects.filter((p) => !('liveUrl' in p && p.liveUrl) && 'githubUrl' in p && p.githubUrl);
const autoProjects   = Projects.filter((p) => !('liveUrl' in p && p.liveUrl) && !('githubUrl' in p && p.githubUrl));

const fadeUp = { whileInView: { opacity: 1, y: 0 }, initial: { opacity: 0, y: -40 }, transition: { duration: 0.5 } };

const ProjectCard = ({ project, index }: { project: typeof Projects[0]; index: number }) => (
  <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
    <motion.div animate={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1 }} className="w-full lg:w-1/4">
      <img src={project.image} width={150} height={150} alt={project.title} className="mb-6 rounded" />
    </motion.div>
    <motion.div animate={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1 }} className="w-full max-w-xl lg:w-3/4">
      <h6 className="mb-2 font-semibold">{project.title}</h6>
      <p className="mb-3 text-neutral-400 text-sm leading-relaxed">{project.description}</p>
      <div className="mb-3 flex flex-wrap gap-2">
        {'liveUrl' in project && project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
            className="rounded border border-purple-700 px-3 py-1 text-xs text-purple-400 hover:bg-purple-700 hover:text-white transition-colors">
            Live ↗
          </a>
        )}
        {'githubUrl' in project && project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
            className="rounded border border-neutral-600 px-3 py-1 text-xs text-neutral-400 hover:border-neutral-400 hover:text-neutral-200 transition-colors">
            GitHub ↗
          </a>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech, i) => (
          <span key={i} className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">{tech}</span>
        ))}
      </div>
    </motion.div>
  </div>
);

const SectionHeader = ({ label }: { label: string }) => (
  <motion.h2 {...fadeUp} className="mb-8 mt-16 text-2xl font-semibold text-neutral-300 border-b border-neutral-800 pb-3">
    {label}
  </motion.h2>
);

const DanProjects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1 {...fadeUp} className="my-20 text-center text-4xl">Projects</motion.h1>

      <SectionHeader label="🚀 Live Projects" />
      {liveProjects.map((project, i) => <ProjectCard key={i} project={project} index={i} />)}

      <SectionHeader label="💻 Open Source" />
      {githubProjects.map((project, i) => <ProjectCard key={i} project={project} index={i} />)}

      <SectionHeader label="⚙️ Automation & Systems" />
      <motion.p {...fadeUp} className="mb-8 max-w-2xl text-sm text-neutral-400 leading-relaxed">
        Over 1 year of hands-on automation experience building end-to-end workflows across N8N, Zapier, GoHighLevel, Airtable, and custom API integrations — streamlining business operations, reducing manual work, and connecting systems at scale.
      </motion.p>
      {autoProjects.map((project, i) => <ProjectCard key={i} project={project} index={i} />)}
    </div>
  )
}

export default DanProjects