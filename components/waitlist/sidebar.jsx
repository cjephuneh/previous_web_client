import React from 'react';


function Sidebar () {
    return (
        <div className="contact-content-left-wrapper">
            <div
              data-w-id="bf992a93-1ef3-f62d-68ee-ff5d07e9e687"
              style={{
                WebkitTransform:
                  "translate3d(null, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                mozTransform:
                  "translate3d(null, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                msTransform:
                  "translate3d(null, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                transform:
                  "translate3d(null, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                // opacity: "0",
              }}
              className="contact-content-left"
            >
              <div className="contact-text-wrapper">
                <div className="text-size-huge">Welcome to our Organisation</div>
                <div className="padding-bottom padding-xsmall"></div>
                <div>
                  Proxima building virtual agents for your Organisation
                </div>
              </div>
              <div className="contact-item-wrapper">
                <div className="contact-item">
                  <div className="contact-icon-wrapper">
                    <img
                      src="/assets/Logo_2Logo.webp"
                      loading="lazy"
                      alt="Icon"
                    />
                  </div>
                  <div id="w-node-_82d7164a-ee49-2d8e-5714-b65e89a92205-e5b1e3c8" className="contact-feature">
                    <div>Our Email</div>
                    <div className="padding-bottom padding-xxsmall"></div>
                    <a href="mailto:info@gmail.com" className="text-style-link text-color-white">
                      administrator@proximaai.co
                    </a>
                    <div className="padding-bottom padding-xxsmall"></div>
                    <a href="mailto:youremail@gmail.com"
                      className="text-style-link text-color-white"
                    >
                      {/*youremail@gmail.com*/}
                    </a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon-wrapper">
                    <img
                      src="/assets/Frame_2Frame.webp"
                      loading="lazy"
                      alt="Phone Icon"
                    />
                  </div>
                  <div className="contact-feature">
                    <div>Our Number</div>
                    <div className="padding-bottom padding-xxsmall"></div>
                    <a
                      href="tel:+254796342709"
                      className="text-style-link text-color-white"
                    >
                      +254796342709
                    </a>
                    <div className="padding-bottom padding-xxsmall"></div>
                    <a
                      href="tel:+92377493032"
                      className="text-style-link text-color-white"
                    >
                      +254790001947
                    </a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon-wrapper">
                    <img
                      src="/assets/Frame-1_3Frame-1.webp"
                      loading="lazy"
                      alt="Location Icon"
                    />
                  </div>
                  <div
                    id="w-node-ee870b65-6cee-ba45-cb9f-b493eef216de-e5b1e3c8"
                    className="contact-feature"
                  >
                    <div>Our Location</div>
                    <div className="padding-bottom padding-xxsmall"></div>
                    <div>Juja Mordan Hospital</div>
                    <div className="padding-bottom padding-xxsmall"></div>
                    <div>Juja, Kenya</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    )
}

export default Sidebar