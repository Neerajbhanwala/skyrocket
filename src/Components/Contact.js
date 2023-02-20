import React from 'react'
import '../Styles/Contact.css'

function Contact() {
  return (
    <React.Fragment>
<br />
    <div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3017.482175330922!2d76.
83743469999999!3d29.139567400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!
3m3!1m2!1s0x390dc00627442355%3A0x9544981116768ca8!2sKasandi%2C%20Haryana%201
31305!5e1!3m2!1sen!2sin!4v1676829379425!5m2!1sen!2sin" 
    width="100%"
    title="kasandi"
    height="450" 
    
    allowFullScreen="" 
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade">
    </iframe>

    </div>

         <div class="formbold-main-wrapper">
 <div class="w-full">
 <div class="formbold-form-wrapper">
     <div class="formbold-form-header">
       <h3>Request Call back</h3>
     </div>
     <form
       action="http://formsubmit.co/kukaa904@gmail.com"
       method="POST"
       class="formbold-chatbox-form"
     >
       <div class="formbold-mb-5">
         <label for="name" class="formbold-form-label"> Your Name </label>
         <input
           type="text"
           name="name"
           id="name"
           placeholder="Your Name"
           class="formbold-form-input"
           required
         />
       </div>

       <div class="formbold-mb-5">
         <label for="email" class="formbold-form-label"> Email Address </label>
         <input
           type="email"
           name="email"
           id="email"
           placeholder="example@domain.com"
           class="formbold-form-input"
           required
         />
       </div>

       <div class="formbold-mb-5">
         <label for="name" class="formbold-form-label"> Mobile Number </label>
         <input
           type="text"
           name="Mobile Number"
           id="number"
           placeholder="+91-98765-43210"
           class="formbold-form-input"
           required
         />
       </div>

       <div class="formbold-mb-5">
         <label for="message" class="formbold-form-label"> Message </label>
         <textarea
           rows="6"
           name="message"
           id="message"
           placeholder="Explain you queries"
           class="formbold-form-input"
           required
         ></textarea>
       </div>

       <div>
         <button class="formbold-btn w-full">Submit</button>
       </div>
     </form>
   </div>
 </div>
</div>

<center>
  <h4>Address:</h4>
  <p>VPO-Kasandi, Tehsil-Gohana Distt-Sonipat (Haryana), 131305</p>
  <p>E-Mail:- <a href="mailto:kukaa904@gmail.com">kukaa904@gmail.com</a></p>
  <p>Contact:- <a href="tel:+91-99966-89916">+91-99966-89916</a></p>

</center>

<br />
<br />
    </React.Fragment>
  )
}

export default Contact