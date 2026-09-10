import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { projects, type ProjectItem } from '../../data/portfolio'

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null)

  return (
    <section id="projects" className="panel" data-scene-step="4">
      <p className="mono">04 / PROJECT UNIVERSE</p>
      <h2>Projects</h2>
      <div className="project-stack">
        {projects.map((project) => (
          <article key={project.id} className="project-block">
            <p className="project-number">{project.number}</p>
            <h3>{project.title}</h3>
            <p>{project.problem}</p>
            <button type="button" onClick={() => setActiveProject(project)} data-cursor="VIEW">
              View case study
            </button>
          </article>
        ))}
      </div>

      <AnimatePresence>
        {activeProject ? (
          <motion.aside
            className="case-study"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
          >
            <button type="button" className="close-case" onClick={() => setActiveProject(null)} data-cursor="OPEN ↗">
              Close
            </button>
            <h3>
              {activeProject.number} / {activeProject.title}
            </h3>
            <p><strong>01 / OVERVIEW:</strong> {activeProject.overview}</p>
            <p><strong>02 / PROBLEM:</strong> {activeProject.problem}</p>
            <p><strong>03 / APPROACH:</strong> {activeProject.approach}</p>
            <p><strong>04 / STACK:</strong> {activeProject.stack.join(' • ')}</p>
            <p><strong>05 / RESULT:</strong> {activeProject.result}</p>
            <p><strong>06 / LIVE PROJECT:</strong> {activeProject.liveUrl ? <a href={activeProject.liveUrl}>Open</a> : 'Available on request'}</p>
            <div className="case-links">
              {activeProject.githubUrl ? (
                <a href={activeProject.githubUrl} target="_blank" rel="noreferrer" data-cursor="OPEN ↗">
                  GitHub
                </a>
              ) : null}
            </div>
          </motion.aside>
        ) : null}
      </AnimatePresence>
    </section>
  )
}
