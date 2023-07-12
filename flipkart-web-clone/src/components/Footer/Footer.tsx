import './Footer.css'
import bag from "/home/sha/Documents/TypeScrip-React/flipkart-web-clone/src/Assets/image/svgexporbag.svg"
import star from "/home/sha/Documents/TypeScrip-React/flipkart-web-clone/src/Assets/image/svgexportstar.svg"
import gift from "/home/sha/Documents/TypeScrip-React/flipkart-web-clone/src/Assets/image/svgexport-13gift.svg"
import question from "/home/sha/Documents/TypeScrip-React/flipkart-web-clone/src/Assets/image/svgexport-14qst.svg"
import card from "/home/sha/Documents/TypeScrip-React/flipkart-web-clone/src/Assets/image/svgexport-15card.svg"

export default function Footer() {
  return (
    <footer>
      <div className="footer-top-container">
        <div className="footer-section">
          <div className="heading-footer">ABOUT</div>
          <a href="">Contact Us</a>
          <a href="">About Us</a>
          <a href="">Careers</a>
          <a href="">Flipkart Stories</a>
          <a href="">Press</a>
          <a href="">Flipkart Wholesale</a>
          <a href="">Corporate Information</a>
        </div>
        <div className="footer-section">
          <div className="heading-footer">HELP</div>
          <a href="">Payments</a>
          <a href="">Shipping</a>
          <a href="">Cancellation & Returns</a>
          <a href="">FAQ</a>
          <a href="">Report Infringement</a>
        </div>
        <div className="footer-section">
          <div className="heading-footer">CONSUMER POLICY</div>
          <a href="">Return Policy</a>
          <a href="">Terms Of Use</a>
          <a href="">Security</a>
          <a href="">Privacy</a>
          <a href="">Sitemap</a>
          <a href="">Grievance Redressal</a>
          <a href="">EPR Compliance</a>
        </div>
        <div className="footer-section">
          <div className="heading-footer">SOCIAL</div>
          <a href="">Facebook</a>
          <a href="">Twitter</a>
          <a href="">YouTube</a>
        </div>
        <div className="heading-footer-left">
          <div className="heading-footer-left-section mail">
            <span>Mail Us:</span>
            <div className="heading-footer-content">
              <p>Flipkart Internet Private Limited, </p>
              <p> Buildings Alyssa, Begonia & </p>
              <p> Clove Embassy Tech Village, </p>
              <p> Outer Ring Road, Devarabeesanahalli Village, </p>
              <p> Bengaluru, 560103, </p>
              <p> Karnataka, India</p>
            </div>
          </div>
        </div>

        <div className="heading-footer-left">
          <div className="heading-footer-left-section">
            <span>Registered Office Address:</span>
            <div className="heading-footer-content">
              <p>Flipkart Internet Private Limited, </p>
              <p> Buildings Alyssa, Begonia & </p>
              <p> Clove Embassy Tech Village, </p>
              <p> Outer Ring Road, Devarabeesanahalli Village, </p>
              <p> Bengaluru, 560103, </p>
              <p> Karnataka, India </p>
              <p> CIN : U51109KA2012PTC066107 </p>
              <p>
                Telephone:
                <a href=""> 044-45614700</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom-container">
        <div className="footer-bottom-section">
            <div>
                <img src={bag} alt="img" />
                <a href="">Become a Seller</a>
            </div>
            <div>
            <img src={star} alt="img" />
                <a href="">Become a Seller</a>
            </div>
            <div>
            <img src={gift} alt="img" />
                <a href="">Become a Seller</a>
            </div>
            <div>
            <img src={question} alt="img" />
                <a href="">Become a Seller</a>
            </div>
            <span>© 2007-2023 Flipkart.com</span>
            <img src={card} alt="card" />
        </div>
      </div>
    </footer>
  );
}
