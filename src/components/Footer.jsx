import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import logo from "../assets/Logo.png"

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        {/* LEFT SECTION */}
        <div className="footer-left">
          <h2 className="footer-logo">
            <img
              src={logo} className="highlight"
            />
            {/*<span className="highlight">Perfectly</span> Placed*/}
          </h2>

          <div className="contact-info">
            <div>
              <p className="label">PH NUMBER</p>
              <p>+1 890 123-52-61</p>
            </div>

            <div>
              <p className="label">EMAIL</p>
              <p>info@logoipsum.com</p>
            </div>

            <div>
              <p className="label">OPENING HOURS</p>
              <p>24/7</p>
            </div>
          </div>
        </div>

        {/* INFORMATION COLUMN */}
        <div className="footer-column">
          <h4>INFORMATION</h4>
          <ul>
            <li>Privacy</li>
            <li>FAQ</li>
            <li>Shipping and payment</li>
            <li>Partners</li>
            <li>Blog</li>
            <li>Contacts</li>
          </ul>
        </div>

        {/* MENU COLUMN */}
        <div className="footer-column">
          <h4>MENU</h4>
          <ul>
            <li>For a couple</li>
            <li>For him</li>
            <li>For her</li>
          </ul>
        </div>

      </div>

      <hr />

      {/* BOTTOM SECTION */}
      <div className="footer-bottom">

        <div className="subscription">
          <p>SUBSCRIPTION</p>
          <div className="subscribe-box">
            <input type="email" placeholder="E-mail" />
            <button>›</button>
          </div>
        </div>

        <div className="social-icons">
          <FaFacebookF />
          <FaInstagram />
          <FaYoutube />
          <FaTwitter />
        </div>

        <p className="copyright">
          © 2023 — Copyright
        </p>

      </div>

    </footer>
  );
}

export default Footer;
