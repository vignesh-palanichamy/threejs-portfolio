import { skills, skillLinks } from '../../data/portfolio'

export function SkillsSection() {
  return (
    <section id="skills" className="panel" data-scene-step="3">
      <p className="mono">03 / SKILL ECOSYSTEM</p>
      <h2>Skills</h2>
      <div className="skill-groups">
        {Object.entries(skills).map(([category, items]) => (
          <article key={category}>
            <h3>{category}</h3>
            <ul>
              {items.map((item) => (
                <li key={item} tabIndex={0} data-cursor="VIEW">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <div className="skill-links" aria-label="Technology relationships">
        {skillLinks.map(([from, to]) => (
          <p key={`${from}-${to}`}>
            {from} <span>→</span> {to}
          </p>
        ))}
      </div>
    </section>
  )
}
