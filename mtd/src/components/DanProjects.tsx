
import { Projects } from '../assets/DanInfo'
import { motion } from 'framer-motion'

const DanProjects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div>
        {Projects.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              animate={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <img src={project.image} width={150} height={150} alt={project.title} className="mb-6 rounded" />
            </motion.div>
            <motion.div
              animate={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-3 text-neutral-400 text-sm leading-relaxed">{project.description}</p>

              {/* live / github links */}
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
        ))}
      </div>
    </div>
  )
}

export default DanProjects