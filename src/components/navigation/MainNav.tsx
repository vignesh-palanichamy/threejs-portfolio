const links = [
  ['INTRO', '#intro'],
  ['ABOUT', '#about'],
  ['EXPERIENCE', '#experience'],
  ['SKILLS', '#skills'],
  ['PROJECTS', '#projects'],
  ['EDUCATION', '#education'],
  ['CONTACT', '#contact']
]

export function MainNav() {
  return (
    <header className="main-nav">
      <a href="#intro" className="brand" data-cursor="OPEN ↗">
        VP
      </a>
      <nav aria-label="Primary navigation">
        {links.map(([label, href]) => (
          <a key={href} href={href} data-cursor="OPEN ↗">
            {label}
          </a>
        ))}
      </nav>
    </header>
  )
}
