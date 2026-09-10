import { experiences } from '../../data/portfolio'

export function ExperienceSection() {
  return (
    <section id="experience" className="panel" data-scene-step="2">
      <p className="mono">02 / EXPERIENCE TIMELINE</p>
      <h2>Work Experience</h2>
      <ol className="timeline">
        {experiences.map((item) => (
          <li key={item.company}>
            <p className="timeline-period">{item.period}</p>
            <h3>{item.company}</h3>
            <p>{item.role}</p>
            <ul>
              {item.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  )
}
