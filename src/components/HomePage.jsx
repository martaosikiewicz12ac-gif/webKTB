import HeroSection from './HeroSection.jsx'
import ServicesSection from './ServicesSection.jsx'
import ReviewsSection from './ReviewsSection.jsx'
import LinksSection from './LinksSection.jsx'
import TeasersSection from './TeasersSection.jsx'

function HomePage({ services, reviewsData, quickLinkGroups }) {
  return (
    <>
      <HeroSection />
      <div className="page-shell__inner">
        <ServicesSection services={services} />
        <ReviewsSection reviewsData={reviewsData} />
        <LinksSection quickLinkGroups={quickLinkGroups} />
        <TeasersSection />
      </div>
    </>
  )
}

export default HomePage
