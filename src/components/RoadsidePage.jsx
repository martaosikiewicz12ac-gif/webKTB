import roadsideKorzystnie from '../images/korzystnie.png'
import roadsideBezpiecznie from '../images/bezpiecznie.png'
import roadsideKomfortowo from '../images/komfortowo.png'

const roadsideHighlights = [
  'Dojeżdżamy w okolicy do 50 km od Głogowa.',
  'Możliwy transport lawetą samochodu kupionego lub sprzedanego na dowolną odległość.',
  'Cena ustalana jest indywidualnie, zależnie od trasy i zakresu pomocy.',
]

const roadsideGallery = [
  { src: roadsideBezpiecznie, alt: 'Pomoc drogowa bezpiecznie' },
  { src: roadsideKomfortowo, alt: 'Pomoc drogowa komfortowo' },
  { src: roadsideKorzystnie, alt: 'Pomoc drogowa korzystnie' },
]

const roadsideVisuals = roadsideGallery.map((image, index) => ({
  ...image,
  text: roadsideHighlights[index],
}))

function RoadsidePage() {
  return (
    <div className="page-shell__inner roadside-page">
      <section className="section-block content-section panel panel--feature roadside-section roadside-panel">
        <div className="roadside-copy">
          <p className="section-kicker">Pomoc drogowa</p>
          <h2>Pomagamy nawet w najtrudniejszych sytuacjach.</h2>
          <p className="roadside-lead">
            Działamy konkretnie i bez chaosu. Zadzwoń, a ustalimy, jak najszybciej pomóc i zorganizować transport auta lawetą.
          </p>
          <div className="roadside-actions roadside-actions--top">
            <a href="tel:505922020" className="button button--primary roadside-call-button">
              Zadzwoń
            </a>
          </div>
        </div>

        <div className="roadside-gallery" aria-label="Zdjęcia pomocy drogowej">
          {roadsideVisuals.map((item) => (
            <div key={item.alt} className="roadside-gallery-card">
              <div className="roadside-gallery__item">
                <img src={item.src} alt={item.alt} className="roadside-gallery__image" />
              </div>
              <div className="roadside-info__item">
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="roadside-actions roadside-actions--bottom">
          <a href="tel:505922020" className="button button--primary roadside-call-button">
            Zadzwoń
          </a>
        </div>
      </section>
    </div>
  )
}

export default RoadsidePage
