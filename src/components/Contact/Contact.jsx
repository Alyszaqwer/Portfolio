import './Contact.css'
 
const Contact = () => {
  return (
    <>
      <section id="contact" className="contact">
 
       
        <div className="contactLeft">
          <p className="contactLabel">Get In Touch</p>
          <h2 className="contactHeading">Let's create something great.</h2>
          <p className="contactDesc">
            Whether you have a project in mind, a question, or just want to say hello  I'd love to hear from you.
          </p>
          <a href="mailto:jhodiealyssa.0131@gmail.com" className="contactEmail">
            jhodiealyssa.0131@gmail.com
          </a>
        </div>
 
        
         <form action="https://api.web3forms.com/submit"  method="POST" >
    <input type="hidden" name="access_key" value="ce8583a7-7c37-4f15-8923-9237535c4dcf" />
    <input type="hidden" name="subject" value="New message from your Portfolio!" />
    <input type="hidden" name="redirect" value="https://web3forms.com/success" />

    <div className="formGroup">
      <label className="formLabel">Your Name</label>
      <input className="formInput" type="text" name="name" placeholder="Your full name" required />
    </div>
    <div className="formGroup">
      <label className="formLabel">Email Address</label>
      <input className="formInput" type="email" name="email" placeholder="your@email.com" required />
    </div>
    <div className="formGroup">
      <label className="formLabel">Message</label>
      <textarea className="formTextarea" name="message" placeholder="Tell me about your thoughts..." rows={5} required />
    </div>
    <button type="submit" className="formBtn">SEND MESSAGE </button>

  </form>
 
      </section>
 
      
      <footer className="footer">
  <span className="footerLogo">Portfolio</span>
  <span className="footerCenter"> MyPortfolio</span>
  <div className="footerLinks">
    <button className="footerLink" onClick={() => window.open('https://www.facebook.com/share/1CTwttcpP9/', '_blank')}>Facebook</button>
    <button className="footerLink" onClick={() => window.open('https://www.instagram.com/_aeriths_/', '_blank')}>Instagram</button>
    <button className="footerLink" onClick={() => window.open('https://github.com/Alyszaqwer', '_blank')}>Github</button>
    <button className="footerLink" onClick={() => window.open('https://www.linkedin.com/in/jhodie-alyssa-ladran-a07176441/', '_blank', 'noopener,noreferrer')}>LinkedIn</button>
  </div>
</footer>
    </>
  )
}
 
export default Contact



