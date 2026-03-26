import logo from './images/logo2.png'
import serviceSprzedaz from './images/Sprzedaż.webp'
import serviceSkup from './images/Skup.webp'
import serviceKomis from './images/Komis.webp'
import servicePomoc from './images/Pomoc.webp'
import Header from './components/Header.jsx'
import HeroSection from './components/HeroSection.jsx'
import ServicesSection from './components/ServicesSection.jsx'
import ReviewsSection from './components/ReviewsSection.jsx'
import LinksSection from './components/LinksSection.jsx'
import TeasersSection from './components/TeasersSection.jsx'
import SiteFooter from './components/SiteFooter.jsx'
import './App.scss'

const services = [
  {
    title: 'Sprzedaż samochodów',
    image: serviceSprzedaz,
    imageAlt: 'Sprzedaż samochodów',
    href: '#',
  },
  {
    title: 'Skup aut',
    image: serviceSkup,
    imageAlt: 'Skup aut',
    href: '#',
  },
  {
    title: 'Komis',
    image: serviceKomis,
    imageAlt: 'Komis samochodowy',
    href: '#',
  },
  {
    title: 'Pomoc drogowa',
    image: servicePomoc,
    imageAlt: 'Pomoc drogowa',
    href: '#',
  },
]

const quickLinks = [
  { label: 'Opinie Google', href: 'https://share.google/dHO6GA26s4VlZwUfH' },
  { label: 'Facebook', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'TikTok', href: '#' },
  { label: 'OLX', href: '#' },
  { label: 'Allegro', href: '#' },
  { label: 'Autoplac', href: '#' },
  { label: 'Aplikacja', href: '#' },
]

const reviewHighlights = [
  'Opinie z wizytówki Google budują zaufanie już na wejściu.',
  'Sekcja ma prowadzić do pełnej wizytówki i realnych doświadczeń klientów.',
  'To tutaj docelowo pokażemy ocenę, liczbę opinii i wybrane cytaty.',
]

function App() {
  return (
    <main className="page-shell" id="top">
      <Header logoSrc={logo} />

      <div className="page-shell__inner">
        <HeroSection />
        <ServicesSection services={services} />
        <ReviewsSection reviewHighlights={reviewHighlights} />
        <LinksSection quickLinks={quickLinks} />
        <TeasersSection />
      </div>

      <SiteFooter />
    </main>
  )
}

export default App
