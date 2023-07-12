import "./Header.css";
import menuBarIcon from "/home/sha/Documents/TypeScrip-React/flipkart-web-clone/src/Assets/image/svgexport-1.svg";
import flikartLogo from "/home/sha/Documents/TypeScrip-React/flipkart-web-clone/src/Assets/image/fk-explorePlus-c5de64.png";
import appInstall from "/home/sha/Documents/TypeScrip-React/flipkart-web-clone/src/Assets/image/svgexport-2.svg";
import cartIcon from "/home/sha/Documents/TypeScrip-React/flipkart-web-clone/src/Assets/image/svgexport-3.svg";
import searchIcon from "/home/sha/Documents/TypeScrip-React/flipkart-web-clone/src/Assets/image/search-icon.webp"
import flipkartIcon from "/home/sha/Documents/TypeScrip-React/flipkart-web-clone/src/Assets/image/only-flipkart.png"
import flipkartPlus from "/home/sha/Documents/TypeScrip-React/flipkart-web-clone/src/Assets/image/plus_aef861.png"
import blueSearchIcon from "/home/sha/Documents/TypeScrip-React/flipkart-web-clone/src/Assets/image/blue-icon.svg"
import angleIcon from "/home/sha/Documents/TypeScrip-React/flipkart-web-clone/src/Assets/image/white-angle.svg"


export default function Header() {
  return (
    <div>
      <header>
        <div className="top-header-section">
          <div className="nav-left">
            <a className="image-section" href="">
              <img src={menuBarIcon} alt="ham-burger-picture" />
            </a>
            <a href="" className="flipkart-name">
              <img src={flikartLogo} alt="ham-burger-picture" width="85px" />
            </a>
            <div className="desktop-input">
              <div className="input-section"></div>
            </div>
          </div>
          <div className="nav-right">
            <a className="image-section" href="">
              <img src={appInstall} alt="ham-burger-picture" width="" />
            </a>
            <a className="image-section" href="">
              <img src={cartIcon} alt="ham-burger-picture" width="" />
            </a>
            <a className="image-section-last" href="">
              <span>Login</span>
            </a>
          </div>
        </div> 

        <div className="header-center">
            <div className="header-input-section">
                <div className="input-image">
                    <img src={searchIcon} alt="input-image"/>
                </div>
                <div className="input-text">
                    Search for Products, Brands and More
                </div>
            </div>
        </div>
        <div className="desktop-input-container">
          <div className="input-section">
            <div className="flipkart-logo">
              <a href="">
                <img src={flipkartIcon} alt="" width="72px"/>
                </a>
              <a href="">
                Explore
                <span>Plus</span>
                <img src={flipkartPlus} alt="" width="10px"/>
                </a>
            </div>
            <div className="search-input">
              <form action="">
                <div className="search-icon">
                  <div className="search-input">
                    <input 
                      type="text" 
                      placeholder="Search for products,brands and more" 
                    />
                  </div>
                  <button>
                    <img src={blueSearchIcon} alt="search-icon" />
                  </button>
                </div>
              </form>
            </div>
            <div className="login">
              <a href=""> Login</a>
            </div>
            <div className="join-seller">
              <span>Become a Seller</span>
            </div>
            <div className="more-section">
              <span>More</span>
              <img src={angleIcon} className="angle-down" alt="" />
            </div>
            <div className="product-cart">
              <img src={cartIcon} className="nav-cart" alt="cart" />
              <span>Cart</span>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
