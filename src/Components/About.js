import React from 'react'
import Secure from '../Secure.jpg'

function About() {
  return (
    <React.Fragment>
    <br />
        <section className="about-section">
        <div className="container">
            <div className="row">                
                <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
                    <div className="inner-column">
                        <div className="sec-title">
<br />
<br />
                            <h2>We are Providing Security Services since 2015</h2>
                        </div>
                        <div className="text">
                        Security Service Providers at SkyRocket have served 100+ requests in Haryana 
                        since last 30 days. Find List of Best security guards agencies, companies 
                        for personal, residential, commercial & events purpose. We have listed Well 
                        trained men/women escort, bouncer, armed guard, ex service man, Surveillance Guard, 
                        Patrolling Guard, Cash transportation guard, Bomb detection guard, Customs Security 
                        Officer, bodyguards celebrity protection officers, apartment supervisors, watchman 
                        with shift(day, night) basis.</div>
                      <div className="text">
                      These are the critical aspects that a corporation will have to face in cases of lack 
                      of corporate security: 
                      1. Conformity with significant laws and regulations. 
                      2. Following principles and prominent practices to pass a security audit. 
                      3. Fulfilling criteria to be eligible for a deal or cyber insurance. 
                      4. Risk mitigation to avoid or minimize loss to the clientele and the company. 
                      5. Maintaining vital services like utilities and healthcare in operation. 
                      6. Proof of appropriate care to counter claims of negligent security. 
                      7. The majority of small firms who experience a big security event and don't 
                      have a plan fail. If you don't plan, you intend to fail. These are the reasons 
                      why a corporate needs corporate security
                      </div>
                        <div className="btn-box">
                            <a href="tel:+91-99966-89916" className="theme-btn btn-style-one" style={{fontSize:"22px"}}>Contact Us</a>
                        </div>
                    </div>
                </div>

                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                    <div className="inner-column wow fadeInLeft">
                      <div className="author-desc">
                        <h2>Deepak Malik</h2>
                        <span>Security Manager</span>
                      </div>
                        <figure className="image-1"><span className="lightbox-image" data-fancybox="images"><img title="Security Services" src={Secure} alt="" style={{width:"100%"}} /></span></figure>
                     
                    </div>
                </div>
              
            </div>
           <div className="sec-title">
           <br />
           <br />

                            <h1 className="title">Why SkyRockets</h1>
                            <h6>We want to lead in Security Services</h6>
                        </div>
          <div className="text">
                SkyRocket is India's most efficient affordable premier listing service. When you choose SkyRocket, you get the best offers
                available in the market and negotiate your terms with the top service providers. Our professionals guarantee 100% coustomer
                satisfaction while delivering the service on-time.
              </div>
               <div className="text">
               These are the critical aspects that a corporation will have to face in cases of lack of corporate security: 1. Conformity with significant laws and regulations. 2. Following principles and prominent practices to pass a security audit. 3. Fulfilling criteria to be eligible for a deal or cyber insurance. 4. Risk mitigation to avoid or minimize loss to the clientele and the company. 5. Maintaining vital services like utilities and healthcare in operation. 6. Proof of appropriate care to counter claims of negligent security. 7. The majority of small firms who experience a big security event and don't have a plan fail. If you don't plan, you intend to fail. These are the reasons why a corporate needs corporate security
              </div>

        </div>
    </section>
    <br />
      <center><h5>Deepak Malik (Security Manager)</h5></center>
    <br />
    <br />
    </React.Fragment>
  )
}

export default About