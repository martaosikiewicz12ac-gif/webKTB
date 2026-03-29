const footerLinks = [
  { href: '#', label: 'Autokomis' },
  { href: '#', label: 'Pomoc drogowa' },
  { href: '#', label: 'Sztos' },
  { href: '#contact', label: 'Kontakt' },
]

function SiteFooter() {
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
