import appIcon from '../images/icon2.png'
import sztosLogo from '../images/icons/sztos_logo.svg'

function TeasersSection() {
  return (
    <section className="section-block teaser-grid">
      <article className="panel panel--teaser">
        <p className="section-kicker">NOWOŚĆ!</p>
        <div className="teaser-head">
          <a href="#" className="teaser-icon-link" aria-label="Przejdź do aplikacji Kupię Twoją Brykę">
            <img src={appIcon} alt="Aplikacja Kupię Twoją Brykę" className="teaser-icon teaser-icon--app" />
          </a>
          <h3>Nowy sposób na kupno i sprzedaż aut</h3>
        </div>
        <p>Łączymy sprzedawców i kupujących w jednym miejscu - szybciej, prościej, bez chaosu.</p>
      </article>
      <article className="panel panel--teaser">
        <p className="section-kicker">NOWOŚĆ!</p>
        <div className="teaser-head">
          <a href="#" className="teaser-icon-link" aria-label="Przejdź do marki Sztos">
            <img src={sztosLogo} alt="Logo Sztos" className="teaser-icon teaser-icon--sztos" />
          </a>
          <h3>Sztos - efekt, ktory robi roznice</h3>
        </div>
        <p>Detailing na poziomie, ktory widac i czuc. Raz sprobujesz i nie wrocisz do zwyklych produktow.</p>
      </article>
    </section>
  )
}

export default TeasersSection
