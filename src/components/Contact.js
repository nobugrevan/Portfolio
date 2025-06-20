import { 
  IoLocationOutline, 
  IoCallOutline, 
  IoMailOutline,
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoYoutube
} from 'react-icons/io5';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-content section-content">
        <p className="section-subtitle">Contact</p>
        <h2 className="h3 section-title">Have You Any Project? Please Drop a Message</h2>
        <p className="section-text">
          Get in touch and let me know how i can help. Fill out the form and I'll be in touch as soon as possible.
        </p>

        <ul className="contact-list">
          <li className="contact-list-item">
            <div className="contact-item-icon">
              <IoLocationOutline />
            </div>
            <div className="wrapper">
              <h3 className="h4 contact-item-title">Address:</h3>
              <address className="contact-info">
                Near Akurdi Railway Station, <br />
                Akurdi, Pune, <br />    
              </address>
            </div>
          </li>

          <li className="contact-list-item">
            <div className="contact-item-icon">
              <IoCallOutline />
            </div>
            <div className="wrapper">
              <h3 className="h4 contact-item-title">Phone:</h3>
              <a href="tel:01234567789" className="contact-info">(+91) 7219468006</a>
              {/* <a href="tel:09765432200" className="contact-info"></a> */}
            </div>
          </li>

          <li className="contact-list-item">
            <div className="contact-item-icon">
              <IoMailOutline />
            </div>
            <div className="wrapper">
              <h3 className="h4 contact-item-title">Email:</h3>
              <a href="nobugrevan@gmail.com" className="contact-info">nobugrevan@gmail.com</a>
            </div>
          </li>

          <li>
            <ul className="contac-social-list">
              <li>
                <a href="#" className="contact-social-link">
                  <div className="tooltip">Facebook</div>
                  <IoLogoFacebook />
                </a>
              </li>
              <li>
                <a href="#" className="contact-social-link">
                  <div className="tooltip">Twitter</div>
                  <IoLogoTwitter />
                </a>
              </li>
              <li>
                <a href="#" className="contact-social-link">
                  <div className="tooltip">Linkedin</div>
                  <IoLogoLinkedin />
                </a>
              </li>
              <li>
                <a href="#" className="contact-social-link">
                  <div className="tooltip">Youtube</div>
                  <IoLogoYoutube />
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <form action="" className="contact-form">
        <div className="form-wrapper">
          <label htmlFor="name" className="form-label">Name</label>
          <div className="input-wrapper">
            <input type="text" name="name" id="name" required placeholder="e.g Revan Siddeshwar" className="input-field" />
            {/* <IoPersonCircle /> */}
          </div>
        </div>

        <div className="form-wrapper">
          <label htmlFor="email" className="form-label">Email</label>
          <div className="input-wrapper">
            <input type="email" name="email" id="email" required placeholder="e.g nobugrevan@gmail.com" className="input-field" />
            {/* <IoMailOutline /> */}
          </div>
        </div>

        <div className="form-wrapper">
          <label htmlFor="phone" className="form-label">Phone</label>
          <div className="input-wrapper">
            <input type="tel" name="phone" id="phone" required placeholder="Phone Number" className="input-field" />
            {/* <IoCallOutline /> */}
          </div>
        </div>

        <div className="form-wrapper">
          <label htmlFor="message" className="form-label">Message</label>
          <div className="input-wrapper">
            <textarea name="message" id="message" required placeholder="Write message..." className="input-field"></textarea>
            {/* <IoChatbubbles /> */}
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Send</button>
      </form>
    </section>
  );
};

export default Contact;