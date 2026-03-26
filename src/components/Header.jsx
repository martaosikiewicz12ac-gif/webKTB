function Header({ logoSrc }) {
  return (
    <header className="site-header site-band">
      <div className="site-band__inner">
        <a href="#top" className="site-brand">
          <img src={logoSrc} alt="Kupię Twoją Brykę" className="site-brand__logo" />
          <span className="site-brand__copy">
            <span className="site-brand__title">Kupię Twoją Brykę</span>
            <span className="site-brand__meta">Głogów i okolice</span>
          </span>
        </a>
        <nav className="site-nav" aria-label="Główne menu">
          <a href="#services" className="site-nav__link">
            <span className="site-nav__label site-nav__label--full">Autokomis</span>
            <span className="site-nav__label site-nav__label--short">Komis</span>
          </a>
          <a href="#reviews" className="site-nav__link">
            <span className="site-nav__label site-nav__label--full">Skup aut</span>
            <span className="site-nav__label site-nav__label--short">Skup</span>
          </a>
          <a href="#links" className="site-nav__link">
            <span className="site-nav__label site-nav__label--full">Pomoc drogowa</span>
            <span className="site-nav__label site-nav__label--short">Pomoc</span>
          </a>
          <a href="#contact" className="site-nav__link site-nav__link--cta">
            <span className="site-nav__label site-nav__label--full">Kontakt</span>
            <span className="site-nav__label site-nav__label--short">Kontakt</span>
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
