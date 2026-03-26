function HeroSection() {
  return (
    <section className="hero-section section-block">
      <div className="hero-copy">
        <h1>
          <span>Dobre auta nie</span>
          <span>stoją długo!</span>
        </h1>
        <p className="hero-subheading">My tylko przyspieszamy sprawy.</p>
      </div>
      <div className="hero-actions">
        <a href="#services" className="button button--secondary">
          Zobacz samochody
        </a>
        <a href="#links" className="button button--secondary">
          Sprzedaj auto
        </a>
      </div>
    </section>
  )
}

export default HeroSection
