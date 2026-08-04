export default function Skills({ groups }) {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <h2>Skills</h2>
        <div className="skill-groups">
          {groups.map((group) => (
            <div className="skill-group" key={group.category}>
              <h3>{group.category}</h3>
              <ul className="chips">
                {group.items.map((item) => (
                  <li className="chip" key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
