import React from 'react'
import '../Styles/Footer.css'

function Footer() {
  return (
    <React.Fragment>

        <footer class="padding_4x">
  <div class="flex">
    <section class="flex-content padding_1x">
      <h3>Top Products</h3>
      <a href="#">Managed Website</a>
      <a href="#">Manage Reputation</a>
      <a href="#">Power Tools</a>
      <a href="#">Marketing Service</a>
    </section>
    <section class="flex-content padding_1x">
      <h3>Quick Links</h3>
      <a href="#">Jobs</a>
      <a href="#">Brand Assets</a>
      <a href="#">Investor Relations</a>
      <a href="#">Terms of Service</a>
    </section>
    <section class="flex-content padding_1x">
      <h3>Features</h3>
      <a href="#">Jobs</a>
      <a href="#">Brand Assets</a>
      <a href="#">Investor Relations</a>
      <a href="#">Terms of Service</a>
    </section>
    <section class="flex-content padding_1x">
      <h3>Resources</h3>
      <a href="#">Guides</a>
      <a href="#">Research</a>
      <a href="#">Experts</a>
      <a href="#">Agencies</a>
    </section>
    <section class="flex-content padding_1x">
      <h3>Newsletter</h3>
      <p>You can trust us. we only send promo offers,</p>
      <form action="http://formsubmit.co/kukaa904@gmail.com" method="POST">
      <fieldset class="fixed_flex">
        <input type="email" name="From" placeholder="Your Email Address" autoComplete='off' required/>
        <button type="submit " class="btn btn_2">Subscribe</button>
      </fieldset>
      </form>
    </section>
  </div>
  <div class="flex">
    <section class="flex-content padding_1x">
      <p>Copyright ©2023 All rights reserved || SkyRocket.com</p>
    </section>
    <section class="flex-content padding_1x">
      <a href="tel:+91-9996689916"><i class="fa fa-phone"></i></a>
      <a href="mailto:kukaa904@gmail.com"><i class="fa fa-envelope"></i></a>
      <a href="http://wa.me/+91-99966-89916" target="_"><i class="fa fa-whatsapp"></i></a>
      <a href="https://www.facebook.com/bhanwala.shab" target="_"><i class="fa fa-facebook"></i></a>
      <a href="https://www.instagram.com/_kukaa__________/" target="_"><i class="fa fa-instagram"></i></a>
    </section>
  </div>
</footer>

    </React.Fragment>
  )
}

export default Footer