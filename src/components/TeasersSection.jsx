function TeasersSection() {
  return (
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
  )
}

export default TeasersSection
