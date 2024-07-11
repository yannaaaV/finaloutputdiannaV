import React from "react";
import "./Contact.css";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faSpotify } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <>
      <Navbar />

      

      <div id="Contact-info" className="yanna">

        <div className="container mt-3">
          <div className="row">
            <div className="col">
              <h4 className="fw-bold display-1 text-center mt-2 pt-2 text-black">
                Contact Me
              </h4>
              <form className="contact-form">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label text-black">Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Your Name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label text-black">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Your Email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label text-black">Message</label>
                  <textarea className="form-control" id="message" rows="3" placeholder="Your Message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>

      <section id="contact" className="yanna">
        <div className="container">
          <div className="card">
            <h2 className="text-center mb-1 fw-2 text-black">My Social Media Accounts</h2>
           
                    <div className="social-icons text-center mt-2">
                      <a 
                        href="https://www.facebook.com/diannarose.viajante"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="me-4 text-decoration-none"
                      >
                        <FontAwesomeIcon className="facebook" icon={faFacebook} size="2x" />
                      </a>
                      <a
                        href="https://www.instagram.com/yannavjnte?igsh=MTVkNXFhZW5eWVIMg=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="me-4 text-decoration-none"
                      >
                        <FontAwesomeIcon className="instagram" icon={faInstagram} size="2x" />
                      </a>
                      <a
                        href="https://twitter.com/your-twitter-profile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="me-4 text-decoration-none"
                      >
                        <FontAwesomeIcon className="spotify" icon={faSpotify} size="2x" />
                      </a>
                      <a
                        href="https://www.tiktok.com/@yanqtie08?_t=8nuJK6DILVQ&_r=1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="me-4 text-decoration-none"
                      >
                        <FontAwesomeIcon className="tiktok" icon={faTiktok} size="2x" />
                      </a>
                    </div>
                  </div>
                </div>
            
            
      
      </section>
      </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
