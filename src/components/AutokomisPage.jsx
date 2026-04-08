import serviceKomis from '../images/Komis.webp'

function AutokomisPage({ offerLinks }) {
  return (
    <div className="page-shell__inner autokomis-page">
      <section className="section-block content-section panel panel--feature autokomis-section autokomis-panel">
        <div className="autokomis-copy">
          <p className="section-kicker">Autokomis</p>
          <div className="autokomis-info__item">
            <h2>Auto, które obejrzysz na spokojnie i kupisz bez stresu</h2>
            <p className="autokomis-lead">
              Nasz autokomis w Głogowie od lat pomaga klientom znaleźć sprawdzone samochody używane – uczciwie, jasno i konkretnie.
            </p>
          </div>
          <div className="autokomis-hero-image">
            <img src={serviceKomis} alt="Autokomis Kupię Twoją Brykę" className="autokomis-hero-image__media" />
          </div>
        </div>

        <div className="autokomis-info">
          <div className="autokomis-info__item">
            <h2>Jak pracujemy</h2>
            <p>
              Pomagamy dobrać auto do potrzeb, odpowiadamy konkretnie na pytania i dbamy o to, żeby cały proces przebiegał
              bez zbędnego chaosu.
            </p>
          </div>
          <div className="autokomis-info__item">
            <h2>Dodatkowe możliwości</h2>
            <p>
              Oferujemy skup aut w Głogowie, przyjmujemy samochody w rozliczeniu oraz pomagamy w uzyskaniu finansowania. Możesz też wykupić gwarancję i załatwić wszystko w jednym miejscu – szybko i wygodnie.
            </p>
          </div>
        </div>

        <div className="autokomis-offers">
          <div className="autokomis-offers__heading">
            <p className="section-kicker">Ogłoszenia</p>
            <h2>Tutaj znajdziesz nasze aktualne oferty.</h2>
          </div>
          <div className="autokomis-offers__grid">
            {offerLinks.map((link) => (
              <a key={link.label} href={link.href} className={`autokomis-offer-link autokomis-offer-link--${link.brand}`}>
                <span className={`hub-link__icon-wrap hub-link__icon-wrap--${link.brand}`} aria-hidden="true">
                  <img src={link.icon} alt="" className="hub-link__icon" />
                </span>
                <span>{link.label}</span>
              </a>
            ))}
          </div>
          <div className="autokomis-offers__footer">
            <p className="autokomis-offers__note">*Nie znalazłeś auta dla siebie? Napisz - znajdziemy coś pod Twoje wymagania.</p>
            <a href="/kontakt" className="text-link autokomis-contact-link">
              Skontaktuj się
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AutokomisPage
