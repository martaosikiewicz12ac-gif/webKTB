function SiteFooter() {
  const goToHomePage = (event) => {
    event.preventDefault()
    window.location.assign('/')
  }

  const openInNewWindow = (event, href) => {
    event.preventDefault()
    window.open(href, '_blank', 'noopener,noreferrer')
  }

  const footerLinks = [
    { href: '/autokomis', label: 'Autokomis' },
    { href: '/skup-aut', label: 'Skup aut' },
    { href: '/pomoc-drogowa', label: 'Pomoc drogowa' },
    { href: '/kontakt', label: 'Kontakt' },
    { href: 'https://kosmetykisztos.pl/', label: 'Sztos', isExternal: true },
  ]

  return (
    <footer className="site-footer site-band">
      <div className="site-band__inner site-band__inner--footer">
          <a href="/" className="footer-heading footer-heading--brand" onClick={goToHomePage}>
            Kupię Twoją Brykę
          </a>
          <div className="footer-strip">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="footer-heading"
                target={link.isExternal ? '_blank' : undefined}
                rel={link.isExternal ? 'noreferrer' : undefined}
                onClick={link.isExternal ? (event) => openInNewWindow(event, link.href) : undefined}
              >
                {link.label}
              </a>
            ))}
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
