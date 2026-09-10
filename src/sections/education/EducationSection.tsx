import { achievements, education } from '../../data/portfolio'

export function EducationSection() {
  return (
    <section id="education" className="panel split" data-scene-step="5">
      <div>
        <p className="mono">05 / EDUCATION JOURNEY</p>
        <h2>Education</h2>
        <ul className="education-list">
          {education.map((item) => (
            <li key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.place}</p>
              <p>{item.period}</p>
              {item.note ? <p>{item.note}</p> : null}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="mono">06 / ACHIEVEMENTS</p>
        <ul className="achievements-list">
          {achievements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
