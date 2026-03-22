import './App.scss'

function App() {
  return (
    <main className="page-shell">
      <section className="hero-section section-block">
        <div className="eyebrow">Starter layout</div>
        <div className="hero-copy">
          <p className="section-kicker">Mobile-first structure</p>
          <h1>Responsive base for phone, tablet and desktop.</h1>
          <p className="hero-text">
            This is a clean scaffold for building the real interface. Each section
            is ready to evolve from a narrow mobile flow into wider tablet and web
            layouts.
          </p>
        </div>
        <div className="hero-actions">
          <a href="#content" className="button button--primary">
            Start planning
          </a>
          <a href="#sections" className="button button--secondary">
            View sections
          </a>
        </div>
      </section>

      <section className="section-block intro-grid" id="content">
        <article className="panel panel--feature">
          <p className="section-kicker">Approach</p>
          <h2>One layout that scales progressively.</h2>
          <p>
            On mobile the content stacks vertically. On tablet it gains spacing and
            partial two-column groupings. On desktop the layout opens into a wider,
            more expressive composition.
          </p>
        </article>
        <article className="panel">
          <p className="section-kicker">Responsive ranges</p>
          <ul className="stack-list">
            <li>Mobile: under 768px</li>
            <li>Tablet: 768px to 1023px</li>
            <li>Desktop: 1024px and above</li>
          </ul>
        </article>
      </section>

      <section className="section-block sections-overview" id="sections">
        <div className="section-heading">
          <p className="section-kicker">Page skeleton</p>
          <h2>Suggested sections to build next.</h2>
        </div>
        <div className="sections-grid">
          <article className="panel">
            <h3>Header</h3>
            <p>Logo, navigation and a clear primary action.</p>
          </article>
          <article className="panel">
            <h3>Hero</h3>
            <p>Main message, supporting copy and first CTA.</p>
          </article>
          <article className="panel">
            <h3>Offer</h3>
            <p>Core value blocks, cards or service highlights.</p>
          </article>
          <article className="panel">
            <h3>Social proof</h3>
            <p>Opinions, metrics, logos or credibility markers.</p>
          </article>
          <article className="panel">
            <h3>FAQ</h3>
            <p>Answers to common objections and practical questions.</p>
          </article>
          <article className="panel">
            <h3>Footer</h3>
            <p>Contact, legal links and repeat navigation.</p>
          </article>
        </div>
      </section>
    </main>
  )
}

export default App
