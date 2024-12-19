import Link from 'next/link'
import { Button } from '@/components/ui/button'
import './page.css'

const myStyle = {
  fontFamily: 'var(--ff-poppins)',
  fontSize: '10px',
  scrollBehavior: 'smooth'
};

export default function Home() {
  return (
    <>
      <section className="section hero " id="home" aria-label="home" style={myStyle}>
        <div className="container">
          <div className="hero-content">
            <h1 className="h1 hero-title">Your Trusted Security Partner</h1>
            <p className="section-text">
              Protect your home and business with our state-of-the-art
              security systems.
            </p>
          </div>
          <div className="hero-banner">
            <img src="./assets/security-hero.jpg" alt="Security Services" className="w-100" />
          </div>
        </div>
      </section>


      <section className="section chapters " id="services" style={myStyle}>
        <div className="container">
          <p className="section-subtitle">Service Details</p>

          <h2 className="h2 section-title has-underline">
            Our Comprehensive Services
            <span className="span has-before"></span>
          </h2>

          <ul className="grid-list">
            <li>
              <div className="chapter-card">
                <p className="card-subtitle">Service 01</p>
                <h3 className="h3 card-title">Home Security Solutions</h3>
                <p className="card-text">
                  Tailored security systems designed to protect your home and
                  family.
                </p>
              </div>
            </li>

            <li>
              <div className="chapter-card">
                <p className="card-subtitle">Service 02</p>
                <h3 className="h3 card-title">Business Security Solutions</h3>
                <p className="card-text">
                  Advanced security systems to safeguard your business
                  premises and assets.
                </p>
              </div>
            </li>

            <li>
              <div className="chapter-card">
                <p className="card-subtitle">Service 03</p>
                <h3 className="h3 card-title">24/7 Monitoring</h3>
                <p className="card-text">
                  Continuous monitoring services to ensure your security
                  systems are always active.
                </p>
              </div>
            </li>

            <li>
              <div className="chapter-card">
                <p className="card-subtitle">Service 04</p>
                <h3 className="h3 card-title">Access Control Systems</h3>
                <p className="card-text">
                  Manage and monitor entry points with our secure access
                  control solutions.
                </p>
              </div>
            </li>

            <li>
              <div className="chapter-card">
                <p className="card-subtitle">Service 05</p>
                <h3 className="h3 card-title">Video Surveillance</h3>
                <p className="card-text">
                  Real-time monitoring with high-definition video surveillance
                  systems.
                </p>
              </div>
            </li>

            <li>
              <div className="chapter-card">
                <p className="card-subtitle">Service 06</p>
                <h3 className="h3 card-title">Alarm Systems</h3>
                <p className="card-text">
                  State-of-the-art alarm systems to detect and deter potential
                  threats.
                </p>
              </div>
            </li>

          </ul>
        </div>
      </section>

      <section className="section pricing" id="pricing" aria-label="pricing" style={myStyle}>
        <div className="container">
          <p className="section-subtitle">Pricing</p>

          <h2 className="h2 section-title has-underline">
            Choose Your Security Package
            <span className="span has-before"></span>
          </h2>

          <ul className="grid-list">
            <li>
              <div className="pricing-card">
                <h3 className="h3 card-title">Basic Package</h3>
                <data className="price" value="199">$199</data>
                <ul className="pricing-card-list">
                  <li className="card-item">
                    <p className="card-text">Home Security System</p>
                  </li>
                  <li className="card-item">
                    <p className="card-text">Basic Monitoring</p>
                  </li>
                  <li className="card-item">
                    <p className="card-text">24/7 Support</p>
                  </li>
                </ul>
                <button className="btn btn-secondary">BUY NOW</button>
              </div>
            </li>

            <li>
              <div className="pricing-card bundle">
                <h3 className="h3 card-title">Standard Package</h3>
                <data className="price" value="499">$499</data>
                <ul className="pricing-card-list">
                  <li className="card-item">
                    <p className="card-text">Advanced Security System</p>
                  </li>
                  <li className="card-item">
                    <p className="card-text">24/7 Monitoring</p>
                  </li>
                  <li className="card-item">
                    <p className="card-text">Smart Home Integration</p>
                  </li>
                </ul>
                <button className="btn btn-primary">BUY NOW</button>
              </div>
            </li>

            <li>
              <div className="pricing-card">
                <h3 className="h3 card-title">Premium Package</h3>
                <data className="price" value="999">$999</data>
                <ul className="pricing-card-list">
                  <li className="card-item">
                    <p className="card-text">Comprehensive Security Solutions</p>
                  </li>
                  <li className="card-item">
                    <p className="card-text">Full Monitoring and Support</p>
                  </li>
                  <li className="card-item">
                    <p className="card-text">Customizable Features</p>
                  </li>
                </ul>
                <button className="btn btn-secondary">BUY NOW</button>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="section testimonials" id="testimonials" aria-label="testimonials" style={myStyle}>
        <div className="container">
          <p className="section-subtitle">Testimonials</p>

          <h2 className="h2 section-title has-underline">
            What Our Clients Say
            <span className="span has-before"></span>
          </h2>

          <ul className="grid-list">
            <li className="testimonial-card">
              <div className="card-icon">
                <img src="./assets/images/customer-1.jfif" alt="Client Photo 1" className="testimonial-img" />
              </div>
              <div className="card-content">
                <h3 className="h3 card-title">John Doe</h3>
                <p className="card-text">
                  "Berimbolo Security provided exceptional service and their
                  security system has given me peace of mind. Highly
                  recommend!"
                </p>
              </div>
            </li>

            <li className="testimonial-card">
              <div className="card-icon">
                <img src="./assets/images/customer-2.jfif" alt="Client Photo 2" className="testimonial-img" />
              </div>
              <div className="card-content">
                <h3 className="h3 card-title">Jane Smith</h3>
                <p className="card-text">
                  "Professional, efficient, and reliable. The team was
                  fantastic from start to finish."
                </p>
              </div>
            </li>

            <li className="testimonial-card">
              <div className="card-icon">
                <img src="./assets/images/customer-3.jfif" alt="Client Photo 3" className="testimonial-img" />
              </div>
              <div className="card-content">
                <h3 className="h3 card-title">Michael Brown</h3>
                <p className="card-text">
                  "Their 24/7 monitoring service is top-notch. I feel much
                  safer knowing my business is protected around the clock."
                </p>
              </div>
            </li>

          </ul>
        </div>
      </section>

      {/* <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Property?</h2>
          <p className="text-xl mb-8">Get in touch with us for a free consultation and quote.</p>
          <Button asChild size="lg">
            <Link href="/contact">Contact Us Now</Link>
          </Button>
        </div>
      </section> */}
    </>
  )
}