import { profile } from '../../data/portfolio'

export function HeroSection() {
  return (
    <section id="intro" className="panel hero-panel" data-scene-step="0">
      <p className="mono">&gt; DIGITAL WORKSPACE / ONLINE</p>
      <h1>
        <span>VIGNESH</span>
        <span>PALANICHAMY</span>
      </h1>
      <p className="lede">{profile.subline}</p>
      <ul className="role-list" aria-label="Core roles">
        {profile.roles.map((role) => (
          <li key={role}>{role}</li>
        ))}
      </ul>
    </section>
  )
}
