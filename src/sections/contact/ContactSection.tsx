import { contacts, profile } from '../../data/portfolio'

export function ContactSection() {
  return (
    <section id="contact" className="panel outro" data-scene-step="6">
      <p className="mono">07 / FINAL SIGNAL</p>
      <h2>
        HAVE SOMETHING
        <br />
        WORTH BUILDING?
      </h2>
      <h3>LET'S CREATE IT.</h3>
      <ul className="contact-list">
        <li><a href={contacts.email} data-cursor="OPEN ↗">Email</a></li>
        <li><a href={contacts.linkedin} target="_blank" rel="noreferrer" data-cursor="OPEN ↗">LinkedIn</a></li>
        <li><a href={contacts.github} target="_blank" rel="noreferrer" data-cursor="OPEN ↗">GitHub</a></li>
        <li><a href={contacts.resume} data-cursor="OPEN ↗">Resume</a></li>
      </ul>
      <footer>
        <p>{profile.name} © {new Date().getFullYear()}</p>
        <p className="mono">&gt; ready_for_next_project<span className="cursor">_</span></p>
      </footer>
    </section>
  )
}
