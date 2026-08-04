export default function Hero({ profile, education }) {
  return (
    <section className="hero" id="top">
      <div className="container">
        <p className="eyebrow">{profile.role}</p>
        <h1>
          Hi, I'm <span className="accent">{profile.name}</span>.
        </h1>
        <p className="lead">{profile.tagline}</p>
        <p className="meta">
          <span>📍 {profile.location}</span>
          <span>✉️ <a href={`mailto:${profile.email}`}>{profile.email}</a></span>
          {education && (
            <span>🎓 {education.degree}, {education.school}</span>
          )}
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#experience">View experience</a>
          <a className="btn btn-ghost" href="#contact">Get in touch</a>
        </div>
        <p className="about">{profile.about}</p>
      </div>
    </section>
  );
}
