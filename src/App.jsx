import logo from './images/logo2.png'
import serviceSprzedaz from './images/Sprzedaż.png'
import serviceSkup from './images/Skup.png'
import serviceKomis from './images/Komis.png'
import servicePomoc from './images/Pomoc.png'
import './App.scss'

const services = [
  {
    title: 'Sprzedaż samochodów',
    image: serviceSprzedaz,
    imageAlt: 'Sprzedaż samochodów',
    href: '#',
  },
  {
    title: 'Skup aut',
    image: serviceSkup,
    imageAlt: 'Skup aut',
    href: '#',
  },
  {
    title: 'Komis',
    image: serviceKomis,
    imageAlt: 'Komis samochodowy',
    href: '#',
  },
  {
    title: 'Pomoc drogowa',
    image: servicePomoc,
    imageAlt: 'Pomoc drogowa',
    href: '#',
  },
]

const quickLinks = [
  { label: 'Opinie Google', href: 'https://share.google/dHO6GA26s4VlZwUfH' },
  { label: 'Facebook', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'TikTok', href: '#' },
  { label: 'OLX', href: '#' },
  { label: 'Allegro', href: '#' },
  { label: 'Autoplac', href: '#' },
  { label: 'Aplikacja', href: '#' },
]

const reviewHighlights = [
  'Opinie z wizytówki Google budują zaufanie już na wejściu.',
  'Sekcja ma prowadzić do pełnej wizytówki i realnych doświadczeń klientów.',
  'To tutaj docelowo pokażemy ocenę, liczbę opinii i wybrane cytaty.',
]

function App() {
  return (
    <main className="page-shell" id="top">
      <header className="site-header site-band">
        <div className="site-band__inner">
          <a href="#top" className="site-brand">
            <img src={logo} alt="Kupię Twoją Brykę" className="site-brand__logo" />
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

      <div className="page-shell__inner">
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

        <section className="section-block content-section" id="services">
          <div className="section-heading">
            <h2>Sprawdź, w czym możemy Ci pomóc</h2>
          </div>
          <div className="sections-grid sections-grid--services">
            {services.map((service) => (
              <article key={service.title} className="panel panel--service">
                <div className="service-copy">
                  <h3>{service.title}</h3>
                </div>
                <div className="service-visual">
                  <a href={service.href} className="service-media" aria-label={service.title}>
                    <img src={service.image} alt={service.imageAlt} className="service-media__image" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block split-section" id="reviews">
          <article className="panel panel--feature">
            <p className="section-kicker">Opinie</p>
            <h2>Zaufanie chcemy budować na prawdziwych opiniach z Google.</h2>
            <p>
              To ważny element strony głównej, bo pokazuje wiarygodność marki i
              ułatwia szybkie przejście do wizytówki Google.
            </p>
            <a href="https://share.google/dHO6GA26s4VlZwUfH" className="button button--secondary inline-cta">
              Otwórz wizytówkę Google
            </a>
          </article>
          <article className="panel">
            <ul className="stack-list stack-list--compact">
              {reviewHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>

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

        <section className="section-block teaser-grid">
          <article className="panel panel--teaser">
            <p className="section-kicker">Aplikacja</p>
            <h3>Kupię Twoją Brykę na iOS, Android i Web.</h3>
            <p>Baza samochodów i przyszłe narzędzia marki w osobnym produkcie.</p>
            <a href="#" className="text-link">
              Przejdź do aplikacji
            </a>
          </article>
          <article className="panel panel--teaser">
            <p className="section-kicker">Kosmetyki</p>
            <h3>Sztos - osobna marka producenta.</h3>
            <p>Krótki teaser kierujący dalej do sklepu z kosmetykami samochodowymi.</p>
            <a href="#" className="text-link">
              Przejdź do marki Sztos
            </a>
          </article>
        </section>
      </div>

      <footer className="site-footer site-band" id="contact">
        <div className="site-band__inner site-band__inner--footer">
          <a href="#top" className="footer-heading footer-heading--brand">Kupię Twoją Brykę</a>
          <div className="footer-strip">
            <a href="#" className="footer-heading">Autokomis</a>
            <a href="#" className="footer-heading">Pomoc drogowa</a>
            <a href="#" className="footer-heading">Sztos</a>
            <a href="#contact" className="footer-heading">Kontakt</a>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default App
