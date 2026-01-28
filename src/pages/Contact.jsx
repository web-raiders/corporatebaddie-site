const INSTAGRAM_URL = 'https://instagram.com/corporatebaddie_ng'
const INSTAGRAM_HANDLE = '@corporatebaddie_ng'
const EMAIL = 'corporatebaddieng@gmail.com'
const PHONE = '+234 818 995 7589'

function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <div className="contact-content">
          <h1>
            Get In <span>Touch</span>
          </h1>
          <p>
            Ready to elevate your wardrobe? Reach out to us through any of the channels below.
            We'd love to help you find your perfect look.
          </p>

          <div className="contact-info">
            <div className="contact-item">
              <div className="icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <div className="details">
                <h3>Phone</h3>
                <p><a href={`tel:${PHONE.replace(/\s/g, '')}`}>{PHONE}</a></p>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <div className="details">
                <h3>Email</h3>
                <p><a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
                </svg>
              </div>
              <div className="details">
                <h3>Instagram</h3>
                <p>
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                    {INSTAGRAM_HANDLE}
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="instagram-highlight">
            <p>Follow us for the latest drops and style inspiration</p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
              </svg>
              Follow on Instagram
            </a>
          </div>
        </div>

        <div className="contact-image">
          <div className="image-card">
            <img src="/images/maroon.jpg" alt="Corporate Baddie fashion" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
