function LinksSection({ quickLinks }) {
  return (
    <section className="section-block content-section" id="links">
      <div className="section-heading">
        <p className="section-kicker">Szybkie linki</p>
        <h2>Najłatwiejsza droga do social mediów, portali z autami i zewnętrznych kanałów marki.</h2>
      </div>
      <div className="link-hub">
        {quickLinks.map((link) => (
          <a key={link.label} href={link.href} className="hub-link">
            {link.label}
          </a>
        ))}
      </div>
    </section>
  )
}

export default LinksSection
