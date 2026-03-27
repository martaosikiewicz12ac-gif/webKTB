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

const reviewsData = {
  score: '4,5',
  source: 'Na podstawie opinii w Google',
  linkLabel: 'Sprawdź opinie',
  items: [
    {
      author: 'Mateusz K.',
      text: 'Bardzo sprawny kontakt, konkretna rozmowa i uczciwe podejście do całego procesu.',
    },
    {
      author: 'Anna W.',
      text: 'Miła obsługa, szybko ustalone szczegóły i bez niepotrzebnego przeciągania tematu.',
    },
    {
      author: 'Tomasz R.',
      text: 'Dobra komunikacja i profesjonalne podejście. Wszystko przebiegło spokojnie i jasno.',
    },
  ],
}

function App() {
  return (
    <main className="page-shell" id="top">
      <Header logoSrc={logo} />

      <div className="page-shell__inner">
        <HeroSection />
        <ServicesSection services={services} />
        <ReviewsSection reviewsData={reviewsData} />
        <LinksSection quickLinks={quickLinks} />
        <TeasersSection />
      </div>

      <SiteFooter />
    </main>
  )
}

export default App
