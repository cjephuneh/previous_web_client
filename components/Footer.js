import React from "react";

function Footer () {
  return (
    <>
      <footer className="footer-component">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="w-layout-grid footer-top-wrapper">
                <div data-w-id="3af3ce62-e206-cc52-3a38-fdc4e64b600e" className="footer-left-wrapper">
                  <div className="footer-logo-wrapper">
                    <a href="/" aria-current="page" className="footer-logo-link w-nav-brand w--current" >
                      <img
                        src="/assets/logo12.png"
                        loading="lazy"
                        width="Auto"
                        height="50"
                        alt="Airtech logo white"
                      />
                    </a>
                  </div>
                  <div>
                  Connecting Brands to Customers 
                    <span className="hide-mobile-landscape">
                      <br />
                    </span>{" "}
                    Through Virtual Agents
                  </div>
                  <div className="padding-bottom padding-large"></div>
                  {/* <div className="footer-form-block w-form">
                    <form
                      id="email-form"
                      name="email-form"
                      data-name="Email Form"
                      method="get"
                      className="footer-form"
                    >
                      <input
                        type="email"
                        className="form-input is-footer w-node-a5bd9c2f-657d-ef5b-0515-76ad309d02ef-e64b6009 w-input"
                        maxLength="256"
                        name="Email"
                        data-name="Email"
                        placeholder="Enter your email"
                        id="Email-2"
                        required=""
                      />
                      <input
                        type="submit"
                        value="Get Started"
                        data-wait="Please wait..."
                        id="w-node-_51a9b7b3-bead-01d1-e732-5bbee434bec0-e64b6009"
                        className="button is-footer w-button"
                      />
                    </form>
                    <div className="success-message text-color-blue w-form-done">
                      <div>Thank you! Your submission has been received!</div>
                    </div>
                    <div className="error-message w-form-fail">
                      <div className="text-color-dark-blue">
                        Oops! Something went wrong while submitting the form.
                      </div>
                    </div>
                  </div> */}
                </div>
                <div className="w-layout-grid footer-menu-wrapper">
                  <div data-w-id="3af3ce62-e206-cc52-3a38-fdc4e64b6024" className="footer-link-list" >
                    <div className="text-weight-semibold">Pages</div>
                    <div className="padding-bottom padding-xsmall"></div>
                    <a href="/" aria-current="page" className="footer-link w--current" >Home </a>
                    <a href="/features" className="footer-link">Features </a>
                    <a href="/about" className="footer-link">About us</a>
                    
                    
                  </div>

                  <div data-w-id="3af3ce62-e206-cc52-3a38-fdc4e64b6034" className="footer-link-list">
                    {/* <div className="text-weight-semibold">Pages</div> */}
                    <div className="padding-bottom padding-xsmall"></div>
                    <a href="/contact" className="footer-link">Contact Us</a>
                    <a href="/blog" className="footer-link">Blog</a>
                    
                  </div>

                  <div data-w-id="3af3ce62-e206-cc52-3a38-fdc4e64b6042" className="footer-link-list">
                    <div className="text-weight-semibold">Utility Pages</div>
                    <div className="padding-bottom padding-xsmall"></div>
                    <a href="/blog" className="footer-link">Blog Category </a>
                    <a href="/blog" className="footer-link">Blog Post</a>
                  </div>

                </div>
              </div>
              <div className="footer-divider"></div>
              <div className="padding-top padding-medium">
                <div className="footer-bottom-wrapper">
                  <div className="footer-credit-text">
                    Copyright 2023 © Proxima |
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
