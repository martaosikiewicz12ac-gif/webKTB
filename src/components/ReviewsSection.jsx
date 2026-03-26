function ReviewsSection({ reviewHighlights }) {
  return (
    <section className="section-block split-section" id="reviews">
      <article className="panel panel--feature">
        <p className="section-kicker">Opinie</p>
        <h2>Zaufanie chcemy budować na prawdziwych opiniach z Google.</h2>
        <p>
          To ważny element strony głównej, bo pokazuje wiarygodność marki i ułatwia szybkie przejście do
          wizytówki Google.
        </p>
        <a href="https://share.google/dHO6GA26s4VlZwUfH" className="button button--secondary inline-cta">
          Otwórz wizytówkę Google
        </a>
      </article>
      <article className="panel">
        <ul className="stack-list stack-list--compact">
          {reviewHighlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>
    </section>
  )
}

export default ReviewsSection
