export default function Navbar({ name }) {
  return (
    <header className="site-header">
      <nav className="nav container">
        <a href="#top" className="brand">{name}</a>
        <ul className="nav-links">
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
