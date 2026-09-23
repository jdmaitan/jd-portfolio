import { notes } from "../data/site";

export function EngineeringNotes() {
  return (
    <section
      id="notes"
      className="section-pad ruled-section"
      aria-labelledby="notes-title"
    >
      <div className="section-intro">
        <p className="section-number">08 / 08</p>
        <h2 id="notes-title">
          Engineering
          <br />
          notes.
        </h2>
      </div>
      <div className="notes-grid">
        {notes.map((note) => (
          <article className="note-card" key={note.title}>
            <p className="eyebrow">Planned note</p>
            <h3>{note.title}</h3>
            <p>{note.text}</p>
            <a href="#contact">
              Read more <span aria-hidden="true">↗</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
