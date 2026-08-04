export default function Footer({ profile }) {
  const year = new Date().getFullYear();
  const { github, linkedin } = profile.socials || {};
  return (
    <footer className="site-footer">
      <div className="container">
        <p>© {year} {profile.name}. Built with Node.js &amp; React.</p>
        <p className="socials">
          <a href={`mailto:${profile.email}`}>Email</a>
          {github && <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>}
          {linkedin && <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
        </p>
      </div>
    </footer>
  );
}
