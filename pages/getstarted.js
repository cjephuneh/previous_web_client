import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { submitGetStarted } from '../redux/slice/getstarted/getstartedSlice';

function GetStarted() {
  const dispatch = useDispatch();
  const [getstartedData, setgetstartedData] = useState({
    organization: '',
    location: '',
    email: '',
    phonenumber: '',
    country: '',
    description: '',
  });

  const handleChange = (e) => {
    setgetstartedData({ ...getstartedData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(getstartedData)
    dispatch(submitGetStarted(getstartedData));
    setgetstartedData({
      organization: '',
      location: '',
      email: '',
      phoneNumber: '',
      country: '',
      description: '',
    })
  };

  return (
    <div className="page-wrapper">
      <main className="main-wrapper">
        <section className="section-signup">
          <div className="padding-global">
            <div className="container-large">
              <div className="padding-section-large">
                <div className="signup-component">
                <div id="w-node-_29826690-63ec-990d-359e-b2fedc68f823-50b1e3d6" className="signup-image-wrapper" >
                    <img className="signup-image" src="/assets/image-3_1image-3.webp" width="513.5" alt="a person sitting at a table with a laptop and a cup"
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

                      sizes="(max-width: 479px) 100vw, (max-width: 991px) 90vw, 39vw"
                      data-w-id="29826690-63ec-990d-359e-b2fedc68f824"
                      loading="lazy"
                      srcSet="/assets/image-3_1-p-500.png 500w, /assets/image-3_1-p-800.png 800w, 
                            /assets/image-3_1image-3.webp 1027w"
                    />
                  </div>
                  <div id="w-node-_29826690-63ec-990d-359e-b2fedc68f7fa-50b1e3d6" data-w-id="29826690-63ec-990d-359e-b2fedc68f7fa"
                    style={{
                      WebkitTransform:
                        "translate3d(null, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      mozTransform:
                        "translate3d(null, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      msTransform:
                        "translate3d(null, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      transform:
                        "translate3d(null, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    //   opacity: "0",
                    }}
                    className="signup-content-wrapper"
                  >
                  <div className="signup-content-wrapper">
                    <h1 className="heading-style-h2"> Join grow your business </h1>
                    <div className="padding-bottom padding-xsmall"></div>
                    <div className="padding-bottom padding-small"></div>
                    <div className="signup-form-block w-form">
                      <form onSubmit={handleSubmit} className="signup-form">
                        <div className="form-field-wrapper">
                          <div className="field-label">Organisation</div>
                          <input
                            type="text"
                            className="form-input-field w-input"
                            maxLength="256"
                            name="organization"
                            value={getstartedData.organization}
                            onChange={handleChange}
                            placeholder="Jane Cooper"
                            id="Sign-up-Name-2"
                            required
                          />
                        </div>

                        <div className="form-field-wrapper">
                          <div className="field-label">Location</div>
                          <input
                            type="text"
                            className="form-input-field w-input"
                            maxLength="256"
                            name="location"
                            value={getstartedData.location}
                            onChange={handleChange}
                            placeholder="enteryourlocation"
                            id="Sign-up-Form-Email-2"
                            required
                          />
                        </div>

                        <div className="form-field-wrapper">
                          <div className="field-label">Email</div>
                          <input
                            type="email"
                            className="form-input-field w-input"
                            maxLength="256"
                            name="email"
                            value={getstartedData.email}
                            onChange={handleChange}
                            placeholder="enteryouemail@gmail.com"
                            id="Sign-up-Form-Password-2"
                            required
                          />
                        </div>

                        <div className="form-field-wrapper">
                          <div className="field-label">Phonenumber</div>
                          <input
                            type="text"
                            className="form-input-field w-input"
                            maxLength="256"
                            name="phoneNumber"
                            value={getstartedData.phoneNumber}
                            onChange={handleChange}
                            placeholder="enteryourphonenumber"
                            id="Sign-up-Form-Password-2"
                            required
                          />
                        </div>

                        <div className="form-field-wrapper">
                          <div className="field-label">Country</div>
                          <input
                            type="text"
                            className="form-input-field w-input"
                            maxLength="256"
                            name="country"
                            value={getstartedData.country}
                            onChange={handleChange}
                            placeholder="enteryourcountry"
                            id="Sign-up-Form-Password-2"
                            required
                          />
                        </div>

                        <div className="form-field-wrapper">
                          <div className="field-label">Description</div>
                          <textarea
                            className="form-input-field form-textarea w-input"
                            maxLength="5000"
                            name="description"
                            value={getstartedData.description}
                            onChange={handleChange}
                            placeholder="enter your description here"
                            id="Sign-up-Form-Password-2"
                            required
                          ></textarea>
                        </div>

                        <div className="div-block-3">
                          <input
                            type="submit"
                            value="Get Started"
                            className="getstarted-button w-button"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
  }

export default GetStarted;
