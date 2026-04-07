import ContactSection from './ContactSection.jsx'

function ContactPage({ contactData }) {
  return (
    <div className="page-shell__inner contact-page">
      <ContactSection contactData={contactData} />
    </div>
  )
}

export default ContactPage
