import ContactSection from './ContactSection.jsx'

function ContactPage({ contactData, socialLinks }) {
  return (
    <div className="page-shell__inner contact-page">
      <ContactSection contactData={contactData} socialLinks={socialLinks} />
    </div>
  )
}

export default ContactPage
