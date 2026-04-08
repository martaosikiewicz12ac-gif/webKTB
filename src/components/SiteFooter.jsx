function SiteFooter({ isInnerPage }) {
  const homeSectionPrefix = isInnerPage ? '/#' : '#'
  const footerLinks = [
    { href: `${homeSectionPrefix}services`, label: 'Autokomis' },
    { href: '/pomoc-drogowa', label: 'Pomoc drogowa' },
    { href: 'https://kosmetykisztos.pl/', label: 'Sztos' },
    { href: '/kontakt', label: 'Kontakt' },
  ]

  return (
    <footer className="site-footer site-band">
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
