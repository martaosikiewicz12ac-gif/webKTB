function Header({ logoSrc, isInnerPage }) {
  const homeSectionPrefix = isInnerPage ? '/#' : '#'
  const brandHref = isInnerPage ? '/' : '#top'
  const navLinks = [
    {
      href: '/autokomis',
      fullLabel: 'Autokomis',
      shortLabel: 'Komis',
    },
    {
      href: `${homeSectionPrefix}reviews`,
      fullLabel: 'Skup aut',
      shortLabel: 'Skup',
    },
    {
      href: '/pomoc-drogowa',
      fullLabel: 'Pomoc drogowa',
      shortLabel: 'Pomoc',
    },
    {
      href: '/kontakt',
      fullLabel: 'Kontakt',
      shortLabel: 'Kontakt',
      isCta: true,
    },
  ]

  return (
    <header className="site-header site-band">
      <div className="site-band__inner">
        <a href={brandHref} className="site-brand">
          <img src={logoSrc} alt="Kupię Twoją Brykę" className="site-brand__logo" />
          <span className="site-brand__copy">
            <span className="site-brand__title">Kupię Twoją Brykę</span>
            <span className="site-brand__meta">Głogów i okolice</span>
          </span>
        </a>
        <nav className="site-nav" aria-label="Główne menu">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`site-nav__link${link.isCta ? ' site-nav__link--cta' : ''}`}
            >
              <span className="site-nav__label site-nav__label--full">{link.fullLabel}</span>
              <span className="site-nav__label site-nav__label--short">{link.shortLabel}</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
