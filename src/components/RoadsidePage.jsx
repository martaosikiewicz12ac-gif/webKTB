const supportSteps = [
  {
    title: 'Szybki kontakt',
    text: 'Opisujesz sytuację, lokalizację i rodzaj problemu, a my od razu wiemy, jak najlepiej pomóc.',
  },
  {
    title: 'Dojeżdżamy na miejsce',
    text: 'Obsługujemy Głogów i okolice, pomagając kierowcom w awariach, problemach po kolizji i nagłych zatrzymaniach.',
  },
  {
    title: 'Działamy bez chaosu',
    text: 'Stawiamy na sprawny kontakt, konkretną informację i spokojne przeprowadzenie przez całą sytuację.',
  },
]

const supportCases = [
  'Problemy z uruchomieniem auta i nagłe unieruchomienie pojazdu.',
  'Pomoc po drobnych kolizjach i sytuacjach, w których liczy się szybka reakcja.',
  'Transport auta do wskazanego miejsca po wcześniejszym ustaleniu szczegółów.',
]

function RoadsidePage() {
  return (
    <div className="page-shell__inner roadside-page">
      <section className="section-block roadside-hero">
        <div className="section-heading roadside-hero__heading">
          <p className="section-kicker">Pomoc drogowa</p>
          <h1>Pomagamy wtedy, kiedy auto staje w najmniej odpowiednim momencie.</h1>
        </div>
        <p className="roadside-hero__lead">
          Działamy konkretnie, bez zbędnego chaosu - od pierwszego telefonu po ustalenie dalszych kroków.
        </p>
        <div className="roadside-hero__actions">
          <a href="tel:+48000000000" className="button button--secondary">
            Zadzwoń po pomoc
          </a>
          <a href="#roadside-details" className="button button--secondary">
            Jak działamy
          </a>
        </div>
      </section>

      <section className="section-block content-section" id="roadside-details">
        <div className="section-heading">
          <h2>Pomoc drogowa bez zbędnych komplikacji</h2>
        </div>
        <div className="roadside-grid">
          {supportSteps.map((step) => (
            <article key={step.title} className="panel roadside-card">
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block split-section roadside-section">
        <article className="panel panel--feature roadside-feature">
          <p className="section-kicker">Kiedy warto dzwonić</p>
          <h2>Jesteśmy po to, żeby skrócić stres i przyspieszyć decyzję.</h2>
          <p>
            Jeśli auto nie pozwala ruszyć dalej albo sytuacja wymaga sprawnej organizacji, pomagamy przejść przez to krok
            po kroku.
          </p>
        </article>
        <article className="panel roadside-list-panel">
          <ul className="roadside-list">
            {supportCases.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>
    </div>
  )
}

export default RoadsidePage
