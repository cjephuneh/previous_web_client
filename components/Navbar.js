import React, { useCallback, useState } from "react";
import Drawer from "react-modern-drawer"


const Navbar = () => {
  const [visible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }
  return (
    <div className="page-wrapper">
      <main className="main-wrapper">
        <header className="section-header">
          <div data-animation="default" className="navbar-component w-nav" data-easing2="ease" fs-scrolldisable-element="smart-nav"
            data-easing="ease" data-collapse="medium" data-w-id="1b56be8d-c9e2-59ec-58e5-df231f37a70a" role="banner" data-duration="400"
          >

            <div className="navbar-container">
              <a href="/" aria-current="page" className="navbar-logo-link w-nav-brand w--current">
                <img src="/assets/logo12.png" loading="lazy" width="Auto" height="40" alt="Airtech logo" className="navbar-logo"/>
              </a>

              <nav role="navigation" className="navbar-menu w-nav-menu">
                <div className="navbar-menu-left">
                  <ul role="list" className="navbar-menu-list w-list-unstyled">

                    <li className="navbar-menu-list-item">
                      <a href="/" className="navbar-link w-nav-link"> Home </a>
                    </li>

                    <li className="navbar-menu-list-item">
                      <a href="/features" className="navbar-link w-nav-link"> Features </a>
                    </li>

                    <li className="navbar-menu-list-item">
                      <a href="/about" className="navbar-link w-nav-link"> About Us</a>
                    </li>

                    

                    <li className="navbar-menu-list-item">
                      <a href="/pricing" className="navbar-link w-nav-link"> Pricing </a>
                    </li>

                    <li className="navbar-menu-list-item">
                      <a href="/blog" className="navbar-link w-nav-link"> blog</a>
                    </li>

                    <li className="navbar-menu-list-item">
                      <a href="/contact" className="navbar-link w-nav-link"> Contact Us </a>
                    </li>

                    <li className="navbar-menu-list-item">
                      <div data-hover="false" data-delay="100" data-w-id="1b56be8d-c9e2-59ec-58e5-df231f37a721" className="navbar-menu-dropdown w-dropdown">
                        <div className="navbar-dropdown-toggle w-dropdown-toggle">
                          <div className="dropdown-icon w-embed">
                            {/* <svg width=" 100%" height=" 100%" viewbox="0 0 16 16"fill="none"xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M2.55806 6.29544C2.46043 6.19781 2.46043 6.03952 2.55806 5.94189L3.44195 5.058C3.53958 4.96037 3.69787 4.96037 3.7955 5.058L8.00001 9.26251L12.2045 5.058C12.3021 4.96037 12.4604 4.96037 12.5581 5.058L13.4419 5.94189C13.5396 6.03952 13.5396 6.19781 13.4419 6.29544L8.17678 11.5606C8.07915 11.6582 7.92086 11.6582 7.82323 11.5606L2.55806 6.29544Z" fill="currentColor"></path>
                            </svg> */}
                          </div>
                          {/* <div className="text-size-regular" onClick={() => setIsVisible(!visible)} > Pages </div> */}
                        </div>

                       
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="navbar-menu-right">
                  {/* <a href="/signin" className="button is-navbar w-button"> Sign In </a> */}
                  <a href="/getstarted" className="button w-button"> Get Started </a>
                </div>
              </nav>
              <div className="navbar-menu-button w-nav-button">
                <div className="menu-icon"onClick={toggleDrawer}>
                  <div className="menu-icon-line-top"></div>
                  <div className="menu-icon-line-middle">
                    <div className="menu-icon-line-middle-inner"></div>
                  </div>
                  <div className="menu-icon-line-bottom"></div>
                </div>
                <Drawer
                  open={isOpen}
                  onClose={toggleDrawer}
                  direction="top"
                  // className=""
                >
                 <div style={{ color: "black", textAlign: "right" }}>
                  <a href="/" aria-current="page" style={{ textDecoration: "none" }}>Home</a>
                </div>
                <div style={{ color: "black", textAlign: "right" }}>
                  <a href="/features" style={{ textDecoration: "none" }}>Features</a>
                </div>
                <div style={{ color: "black", textAlign: "right" }}>
                  <a href="/about" style={{ textDecoration: "none" }}>About</a>
                </div>
                <div style={{ color: "black", textAlign: "right" }}>
                  <a href="/contact" style={{ textDecoration: "none" }}>Contact Us</a>
                </div>
                <div style={{ color: "black", textAlign: "right" }}>
                  <a href="/waitlist" style={{ textDecoration: "none" }}>Waitlist</a>
                </div>
                <div style={{ color: "black", textAlign: "right" }}>
                  <a href="/blog" style={{ textDecoration: "none" }}>Blog</a>
                </div>
                <div style={{ color: "black", textAlign: "right" }}>
                  <a href="/getstarted" style={{ textDecoration: "none" }}>GetStarted</a>
                </div>



                </Drawer>
              </div>
            </div>
          </div>
        </header>
      </main>
    </div>
  );
};

export default Navbar;
