export default function Experience({ experience }) {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2>Experience</h2>
        <div className="timeline">
          {experience.map((job) => (
            <article className="job" key={job.id}>
              <div className="job-head">
                <h3>{job.title} · <span className="accent">{job.company}</span></h3>
                <span className="period">{job.period}</span>
              </div>
              <ul className="highlights">
                {job.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
              <ul className="tags">
                {job.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
