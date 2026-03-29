import appIcon from '../images/icon2.png'
import sztosLogo from '../images/icons/sztos_logo.svg'

const teaserItems = [
  {
    href: '#',
    ariaLabel: 'Przejdź do aplikacji Kupię Twoją Brykę',
    icon: appIcon,
    iconAlt: 'Aplikacja Kupię Twoją Brykę',
    iconClassName: 'teaser-icon teaser-icon--app',
    title: 'Nowy sposób na kupno i sprzedaż aut',
    text: 'Łączymy sprzedawców i kupujących w jednym miejscu - szybciej, prościej, bez chaosu.',
  },
  {
    href: '#',
    ariaLabel: 'Przejdź do marki Sztos',
    icon: sztosLogo,
    iconAlt: 'Logo Sztos',
    iconClassName: 'teaser-icon teaser-icon--sztos',
    title: 'Sztos - efekt, który robi różnicę',
    text: 'Detailing na poziomie, który widać i czuć. Raz spróbujesz i nie wrócisz do zwykłych produktów.',
  },
]

function TeasersSection() {
  return (
    <section className="section-block teaser-grid">
      {teaserItems.map((item) => (
        <article key={item.title} className="panel panel--teaser">
          <p className="section-kicker">NOWOŚĆ!</p>
          <div className="teaser-head">
            <a href={item.href} className="teaser-icon-link" aria-label={item.ariaLabel}>
              <img src={item.icon} alt={item.iconAlt} className={item.iconClassName} />
            </a>
            <a href={item.href} className="teaser-title-link">
              <h3>{item.title}</h3>
            </a>
          </div>
          <p>{item.text}</p>
        </article>
      ))}
    </section>
  )
}

export default TeasersSection
