export default function Certifications({ certifications }) {
  return (
    <section id="certifications" className="section section-alt">
      <div className="container">
        <h2>Certifications</h2>
        <ul className="cert-list">
          {certifications.map((cert) => (
            <li className="cert" key={cert}>
              <span className="cert-badge">✓</span>
              {cert}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
