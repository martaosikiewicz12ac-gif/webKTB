function ContactSection({ contactData }) {
  return (
    <section className="section-block content-section contact-section" id="contact">
      <div className="section-heading">
        <h2>Kontakt</h2>
      </div>
      <div className="contact-layout">
        <article className="panel panel--feature contact-panel">
          <div className="contact-company">
            <p className="section-kicker">Kupię Twoją Brykę</p>
            <h3>{contactData.companyName}</h3>
          </div>
          <div className="contact-list">
            <div className="contact-item">
              <span className="contact-item__label">Telefon</span>
              <div className="contact-item__value contact-item__value--stack">
                {contactData.phones.map((phone) => (
                  <a key={phone.raw} href={`tel:${phone.raw}`} className="text-link contact-link">
                    {phone.display}
                  </a>
                ))}
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-item__label">E-mail</span>
              <a href={`mailto:${contactData.email}`} className="text-link contact-link">
                {contactData.email}
              </a>
            </div>
            <div className="contact-item">
              <span className="contact-item__label">Adres</span>
              <address className="contact-address">{contactData.address}</address>
            </div>
          </div>
          <div className="contact-actions">
            <a href={`tel:${contactData.primaryPhone.raw}`} className="button button--primary">
              Zadzwoń
            </a>
            <a href={contactData.mapLink} className="button button--secondary" target="_blank" rel="noreferrer">
              Znajdź nas
            </a>
          </div>
        </article>
        <article className="panel contact-map-panel">
          <div className="contact-map-frame">
            <iframe
              title="Mapa dojazdu do Kupię Twoją Brykę"
              src={contactData.mapEmbedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </article>
      </div>
    </section>
  )
}

export default ContactSection
