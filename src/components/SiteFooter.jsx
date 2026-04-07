function SiteFooter({ isRoadsidePage }) {
  const homeSectionPrefix = isRoadsidePage ? '/#' : '#'
  const footerLinks = [
    { href: `${homeSectionPrefix}services`, label: 'Autokomis' },
    { href: '/pomoc-drogowa', label: 'Pomoc drogowa' },
    { href: '#', label: 'Sztos' },
    { href: `${homeSectionPrefix}contact`, label: 'Kontakt' },
  ]

  return (
    <footer className="site-footer site-band" id="contact">
      <div className="site-band__inner site-band__inner--footer">
        <a href="#top" className="footer-heading footer-heading--brand">
          Kupię Twoją Brykę
        </a>
        <div className="footer-strip">
          {footerLinks.map((link) => (
            <a key={link.label} href={link.href} className="footer-heading">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
