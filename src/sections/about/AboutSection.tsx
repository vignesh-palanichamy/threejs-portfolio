import { about } from '../../data/portfolio'

export function AboutSection() {
  return (
    <section id="about" className="panel split" data-scene-step="1">
      <div>
        <p className="mono">01 / IDENTITY CORE</p>
        <h2>About</h2>
      </div>
      <div className="narrative">
        <p>{about.summary}</p>
        <p>Primary stack: {about.stack.join(' • ')}</p>
        <p>Exploring: {about.explores.join(' • ')}</p>
        <p>{about.focus}</p>
      </div>
    </section>
  )
}
