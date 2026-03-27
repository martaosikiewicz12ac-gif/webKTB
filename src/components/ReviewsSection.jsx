function ReviewsSection({ reviewsData }) {
  return (
    <section className="section-block split-section" id="reviews">
      <article className="panel panel--feature reviews-summary">
        <h2>Tak oceniają nas klienci</h2>
        <div className="reviews-score" aria-label={`Ocena ${reviewsData.score} na 5`}>
          <strong className="reviews-score__value">{reviewsData.score}</strong>
          <div className="reviews-score__meta">
            <span className="reviews-score__stars" aria-hidden="true">
              ★★★★☆
            </span>
            <p>{reviewsData.source}</p>
          </div>
        </div>
        <a href="https://share.google/dHO6GA26s4VlZwUfH" className="button button--secondary inline-cta">
          {reviewsData.linkLabel}
        </a>
      </article>
      <article className="panel reviews-list-panel">
        <div className="reviews-list" aria-label="Przykładowe opinie klientów">
          {reviewsData.items.map((item) => (
            <article key={item.author} className="review-card">
              <div className="review-card__meta">
                <strong>{item.author}</strong>
                <span aria-hidden="true">★★★★★</span>
              </div>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </article>
    </section>
  )
}

export default ReviewsSection
