import logoIcon from "../assets/logo.png";
import facebookIcon from "../assets/Facebook.png";
import twitterIcon from "../assets/Twitter.png";
import instagramIcon from "../assets/Instagram.png";
import linkedinIcon from "../assets/LinkedIn.png";

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        
        {/* Column 1 */}
        <div className="footer-col">
          <div className="footer-brand">
            <img src={logoIcon} alt="Luxe Salon"  />
            
          </div>

          <div className="footer-socials">
            <img src={facebookIcon} alt="Facebook" />
            <img src={twitterIcon} alt="Twitter" />
            <img src={instagramIcon} alt="Instagram" />
            <img src={linkedinIcon} alt="LinkedIn" />
          </div>
        </div>

        {/* Column 2 */}
        <div className="footer-col">
          <h4>Terms & Policies</h4>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
        </div>

        {/* Column 3 */}
        <div className="footer-col">
          <h4>Home</h4>
          <p>Service</p>
          <p>Membership</p>
        </div>

        {/* Column 4 */}
        <div className="footer-col">
          <h4>Contact</h4>
          <p>(+234) 8089466435</p>
          <p>agencycr@gmail.com</p>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        <p>Copyright, Luxe Salon 2022. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;