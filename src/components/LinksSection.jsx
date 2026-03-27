function LinksSection({ quickLinkGroups }) {
  return (
    <section className="section-block content-section" id="links">
      <div className="section-heading">
        <h2>Jesteśmy tam, gdzie Ty</h2>
      </div>
      <div className="links-groups">
        {quickLinkGroups.map((group, index) => (
          <div key={group.title} className="links-group">
            <div className="link-hub">
              {group.links.map((link) => (
                <a key={link.label} href={link.href} className={`hub-link hub-link--${link.brand}`} aria-label={link.label}>
                  <span className={`hub-link__icon-wrap hub-link__icon-wrap--${link.brand}`} aria-hidden="true">
                    <img src={link.icon} alt="" className="hub-link__icon" />
                  </span>
                  <span className="hub-link__label">{link.label}</span>
                </a>
              ))}
            </div>
            {index < quickLinkGroups.length - 1 ? <div className="divider" aria-hidden="true" /> : null}
          </div>
        ))}
      </div>
    </section>
  )
}

export default LinksSection
