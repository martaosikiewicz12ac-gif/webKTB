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
import HomePage from './components/HomePage.jsx'
import RoadsidePage from './components/RoadsidePage.jsx'
import ContactPage from './components/ContactPage.jsx'
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
    href: '/pomoc-drogowa',
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

const socialLinks = quickLinkGroups[0].links

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

const contactData = {
  companyName: 'Kupię Twoją Brykę',
  email: 'kupietwojabryke@gmail.com',
  address: 'Kolorowa 12, 67-200 Głogów',
  phones: [
    { raw: '505922020', display: '505 922 020' },
    { raw: '517576780', display: '517 576 780' },
  ],
  primaryPhone: { raw: '505922020', display: '505 922 020' },
  mapLink: 'https://www.google.com/maps/search/?api=1&query=Kolorowa+12,+67-200+G%C5%82og%C3%B3w',
  mapEmbedSrc: 'https://www.google.com/maps?q=Kolorowa+12,+67-200+G%C5%82og%C3%B3w&z=15&output=embed',
}

function App() {
  const normalizedPath = window.location.pathname.replace(/\/+$/, '') || '/'
  const isRoadsidePage = normalizedPath === '/pomoc-drogowa'
  const isContactPage = normalizedPath === '/kontakt'
  const isInnerPage = isRoadsidePage || isContactPage

  return (
    <main className="page-shell" id="top">
      <Header logoSrc={logo} isInnerPage={isInnerPage} />
      {isRoadsidePage ? (
        <RoadsidePage />
      ) : isContactPage ? (
        <ContactPage contactData={contactData} socialLinks={socialLinks} />
      ) : (
        <HomePage services={services} reviewsData={reviewsData} quickLinkGroups={quickLinkGroups} />
      )}
      <SiteFooter isInnerPage={isInnerPage} />
    </main>
  )
}

export default App
