import { Link } from 'react-router-dom'

const INSTAGRAM_URL = 'https://instagram.com/corporatebaddie_ng'

function Home() {
  return (
    <section className="hero">
      <div className="hero-header">
        <h1>Find Your Corporate Style</h1>
        <p>Discover our collection and find looks that suit your mood, fit any occasion, and elevate your everyday style.</p>
      </div>

      <div className="gallery-section">
        <div className="gallery-row">
          <div className="image-card">
            <img src="/images/olive.png" alt="Olive dress" />
          </div>
          <div className="image-card">
            <img src="/images/brown1.jpg" alt="Brown outfit" />
          </div>
          <div className="image-card">
            <img src="/images/maroon.jpg" alt="Maroon dress" />
          </div>
          <div className="image-card">
            <img src="/images/brown2.jpg" alt="Brown ensemble" />
          </div>
        </div>

        <div className="stats-section">
          <div className="stat">
            <span className="stat-number">500<span className="plus">+</span></span>
            <span className="stat-label">Happy Customers</span>
          </div>
          <div className="stat">
            <span className="stat-number">50<span className="plus">+</span></span>
            <span className="stat-label">Unique Designs</span>
          </div>
          <div className="stat">
            <span className="stat-number">5<span className="plus">+</span></span>
            <span className="stat-label">Years Experience</span>
          </div>
        </div>


        <div className="btn-group">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Explore Collection
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
          <Link to="/contact" className="btn btn-outline">
            Contact Us
          </Link>
        </div>

      </div>
    </section>
  )
}

export default Home
