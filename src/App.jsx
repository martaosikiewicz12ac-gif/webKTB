import logo from './images/logo2.png'
import serviceSprzedaz from './images/Sprzedaż.webp'
import serviceSkup from './images/Skup.webp'
import serviceKomis from './images/Komis.webp'
import servicePomoc from './images/Pomoc.webp'
import facebookIcon from './images/icons/facebook.svg'
import instagramIcon from './images/icons/instagram.svg'
import tiktokIcon from './images/icons/tiktok.svg'
import olxIcon from './images/icons/olx.png'
import allegroIcon from './images/icons/allegro.svg'
import autoplacIcon from './images/icons/autoplac.png'
import appIcon from './images/icon.png'
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

const quickLinkGroups = [
  {
    title: 'Znajdziesz nas tutaj',
    links: [
      { label: 'Facebook', href: '#', icon: facebookIcon, brand: 'facebook' },
      { label: 'Instagram', href: '#', icon: instagramIcon, brand: 'instagram' },
      { label: 'TikTok', href: '#', icon: tiktokIcon, brand: 'tiktok' },
    ],
  },
  {
    title: 'Oferty znajdziesz na',
    links: [
      { label: 'OLX', href: '#', icon: olxIcon, brand: 'olx' },
      { label: 'Allegro', href: '#', icon: allegroIcon, brand: 'allegro' },
      { label: 'Autoplac', href: '#', icon: autoplacIcon, brand: 'autoplac' },
      { label: 'Aplikacja', href: '#', icon: appIcon, brand: 'app' },
    ],
  },
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
        <LinksSection quickLinkGroups={quickLinkGroups} />
        <TeasersSection />
      </div>

      <SiteFooter />
    </main>
  )
}

export default App
