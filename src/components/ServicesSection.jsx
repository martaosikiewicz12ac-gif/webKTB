function ServicesSection({ services }) {
  return (
    <section className="section-block content-section" id="services">
      <div className="section-heading">
        <h2>Sprawdź, w czym możemy Ci pomóc</h2>
      </div>
      <div className="sections-grid sections-grid--services">
        {services.map((service) => (
          <article key={service.title} className="panel panel--service">
            <div className="service-visual">
              <a href={service.href} className="service-media" aria-label={service.title}>
                <img src={service.image} alt={service.imageAlt} className="service-media__image" />
                <div className="service-copy">
                  <h3>{service.title}</h3>
                </div>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ServicesSection
