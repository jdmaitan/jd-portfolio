import {
  bookCategories,
  books,
  onlineResources,
} from "../data/learningMaterials";
import type { Locale } from "../data/locales";

export function LearningMaterials({ locale }: { locale: Locale }) {
  return (
    <section
      id="learning-materials"
      className="section-pad ruled-section learning-section"
      aria-labelledby="learning-title"
    >
      <div className="section-intro">
        <p className="section-number">{locale.learning.number}</p>
        <h2 id="learning-title">
          {locale.learning.titleFirst}
          <br />
          {locale.learning.titleSecond}
        </h2>
        <p className="section-note">
          {locale.learning.note}
        </p>
      </div>
      <div className="learning-content">
        <div className="book-categories">
          {bookCategories.map((category) => (
            <section
              className="book-category"
              key={category}
              aria-labelledby={`category-${category.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`}
            >
              <h3
                id={`category-${category.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`}
              >
                {locale.learning.categoryLabels[category] ?? category}
              </h3>
              <ul>
                {books
                  .filter((book) => book.category === category)
                  .map((book) => (
                    <li className="book-item" key={book.title}>
                      <strong>
                        {book.title}
                        {book.edition
                          ? `, ${book.edition} ${locale.learning.editionLabel}`
                          : ""}
                      </strong>
                      <span>
                        {book.authors.join(", ")} · {book.year} ·{" "}
                        {book.publisher}
                      </span>
                    </li>
                  ))}
              </ul>
            </section>
          ))}
        </div>
        <div className="online-resources">
          <h3>{locale.learning.onlineResources}</h3>
          <div className="resource-groups">
            <div>
              <h4>{locale.learning.websites}</h4>
              {onlineResources
                .filter((resource) => resource.type === "Website")
                .map((resource) => (
                  <a
                    className="resource-item"
                    key={resource.title}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {resource.title} <span aria-hidden="true">↗</span>
                  </a>
                ))}
            </div>
            <div>
              <h4>{locale.learning.selfPacedCourses}</h4>
              {onlineResources
                .filter((resource) => resource.type === "Self-paced study")
                .map((resource) => (
                  <div
                    className="resource-item study-item"
                    key={resource.title}
                  >
                    <strong>{resource.title}</strong>
                    <span>
                      {locale.learning.selfPacedStudy} · {resource.provider} · {resource.date}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
