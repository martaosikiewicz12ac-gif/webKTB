function HeroSection() {
  return (
    <section className="hero-section section-block">
      <div className="hero-section__inner">
        <div className="hero-copy">
          <h1>
            <span>Dobre auta nie</span>
            <span>stoją długo!</span>
          </h1>
          <p className="hero-subheading">My tylko przyspieszamy sprawy.</p>
        </div>
        <div className="hero-actions">
          <a href="/autokomis" className="button button--secondary">
            Zobacz samochody
          </a>
          <a href="#reviews" className="button button--secondary">
            Sprzedaj auto
          </a>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
