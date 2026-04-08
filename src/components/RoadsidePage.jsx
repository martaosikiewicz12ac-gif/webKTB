import roadsideKorzystnie from '../images/korzystnie.png'
import roadsideNiezawodnie from '../images/niezawodnie.png'
import roadsideBezpiecznie from '../images/bezpiecznie.png'
import roadsideKomfortowo from '../images/komfortowo.png'

const roadsideHighlights = [
  'Dojeżdżamy w okolicy do 50 km od Głogowa.',
  'Możliwy transport lawetą samochodu kupionego lub sprzedanego na dowolną odległość.',
  'Cena ustalana jest indywidualnie, zależnie od trasy i zakresu pomocy.',
]

const roadsideGallery = [
  { src: roadsideBezpiecznie, alt: 'Pomoc drogowa bezpiecznie' },
  { src: roadsideNiezawodnie, alt: 'Pomoc drogowa niezawodnie' },
  { src: roadsideKomfortowo, alt: 'Pomoc drogowa komfortowo' },
  { src: roadsideKorzystnie, alt: 'Pomoc drogowa korzystnie' },
]

function RoadsidePage() {
  return (
    <div className="page-shell__inner roadside-page">
      <section className="section-block content-section roadside-section">
        <article className="panel panel--feature roadside-panel">
          <div className="roadside-copy">
            <p className="section-kicker">Pomoc drogowa</p>
            <h2>Pomagamy nawet w najtrudniejszych sytuacjach.</h2>
            <p className="roadside-lead">
              Działamy konkretnie i bez chaosu. Zadzwoń, a ustalimy, jak najszybciej pomóc i zorganizować transport auta lawetą.
            </p>
          </div>

          <div className="roadside-actions">
            <a href="tel:505922020" className="button button--primary roadside-call-button">
              Zadzwoń
            </a>
          </div>

          <div className="roadside-info">
            {roadsideHighlights.map((item) => (
              <div key={item} className="roadside-info__item">
                <p>{item}</p>
              </div>
            ))}
          </div>

          <div className="roadside-gallery" aria-label="Zdjęcia pomocy drogowej">
            {roadsideGallery.map((image) => (
              <div key={image.alt} className="roadside-gallery__item">
                <img src={image.src} alt={image.alt} className="roadside-gallery__image" />
              </div>
            ))}
          </div>
        </article>
      </section>
    </div>
  )
}

export default RoadsidePage
