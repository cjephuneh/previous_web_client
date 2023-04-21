import React from "react";
import Head from 'next/head'

const signin = () => {
  return (
    <>
    <Head>
      <title>
        Proxima | Signin
      </title>
    </Head>
    <div className="page-wrapper">
      <main className="main-wrapper">
        <section className="section-login">
          <div className="padding-global">
            <div className="container-large">
              <div className="padding-section-large">
                <div className="login-component">
                  <div
                    id="w-node-_9fd540ea-8d3e-fb06-99a6-a117372e6d64-87b1e3d5"
                    data-w-id="9fd540ea-8d3e-fb06-99a6-a117372e6d64"
                    style={{
                      WebkitTransform:
                        "translate3d(-50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      mozTransform:
                        "translate3d(-50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      masTransform:
                        "translate3d(-50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      transform:
                        "translate3d(-50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      //  opacity: "0",
                    }}
                    className="login-image-wrapper"
                  >
                    <img
                      src="/assets/image-3_1image-3.webp"
                      loading="eager"
                      srcSet="/assets/image-3_1-p-500.png 500w, /assets/image-3_1-p-800.png 800w,
                       /assets/image-3_1image-3.webp 1027w"
                      sizes="(max-width: 479px) 100vw, (max-width: 991px) 90vw, 42vw"
                      alt="a person sitting at a table with a laptop and a cup"
                      className="login-image"
                    />
                  </div>
                  <div
                    id="w-node-_9fd540ea-8d3e-fb06-99a6-a117372e6d35-87b1e3d5"
                    data-w-id="9fd540ea-8d3e-fb06-99a6-a117372e6d35"
                    style={{
                      WebkitTransform:
                        "translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      mozTransform:
                        "translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      masTransform:
                        "translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      transform:
                        "translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      //   opacity: "0",
                    }}
                    className="login-content-left"
                  >
                    <div className="max-width-small align-center">
                      <div className="login-content-wrapper">
                        <div className="max-width-large">
                          <h1 className="heading-style-h2">Welcome back 👋</h1>
                          <div className="padding-bottom padding-xsmall"></div>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipiscing
                            elit interdorm ullamcorper sed pharetra senectus
                            donec nunc ame
                          </p>
                          <div className="padding-bottom padding-medium"></div>
                        </div>
                      </div>
                      <div className="login-form-block w-form">
                        <form
                          id="wf-form-Login-Form"
                          name="wf-form-Login-Form"
                          data-name="Login Form"
                          method="get"
                          className="login-form"
                        >
                          <div
                            id="w-node-_9fd540ea-8d3e-fb06-99a6-a117372e6d48-87b1e3d5"
                            className="w-layout-grid form-button-wrapper"
                          >
                            <a
                              href="https://www.google.com/"
                              target="_blank"
                              className="button-login w-inline-block"
                            >
                              <img
                                loading="lazy"
                                src="/assets/Frame_3Frame.webp"
                                alt="Google Logo"
                                className="icon-1x1-xsmall"
                              />
                              <div>Sign in with Google</div>
                            </a>
                            <a
                              href="https://www.facebook.com/"
                              target="_blank"
                              className="button-login w-inline-block"
                            >
                              <img
                                loading="lazy"
                                src="/assets/Frame-1_4Frame-1.webp"
                                alt="Facebook Logo"
                                className="icon-1x1-xsmall"
                              />
                              <div>Sign in with  Facebook</div>
                            </a>
                          </div>
                          <div className="form-field-wrapper">
                            <label
                              htmlFor="Login-Form"
                              id="w-node-_123bda22-fabf-462f-a5a8-8b14caeb615e-87b1e3d5"
                              className="form-label"
                            >
                              Email address
                            </label>
                            <input
                              type="email"
                              className="form-input is-login w-input"
                              maxLength="256"
                              name="Login-Form"
                              data-name="Login Form"
                              placeholder="my@gmail.com"
                              id="Login-Form"
                              required=""
                            />
                          </div>
                          <div className="form-field-wrapper">
                            <label
                              htmlFor="Login-Password"
                              id="w-node-_1740ec42-6b2a-dafd-da79-215f61109751-87b1e3d5"
                              className="form-label"
                            >
                              Password
                            </label>
                            <input
                              type="password"
                              className="form-input is-login w-input"
                              maxLength="256"
                              name="Login-Password"
                              data-name="Login-Password"
                              placeholder="**********"
                              id="Login-Password"
                              required=""
                            />
                          </div>
                          <label
                            id="w-node-_018c3187-c970-4c16-1746-093b1faffa86-87b1e3d5"
                            className="w-checkbox checkbox-field"
                          >
                            <input
                              type="checkbox"
                              id="Remember-me"
                              name="Remember-me"
                              data-name="Remember me"
                              className="w-checkbox-input form-checkbox-icon"
                            />
                            <span
                              className="field-label w-form-label"
                              htmlFor="Remember-me"
                            >
                              Remember me
                            </span>
                          </label>
                          <div className="button-row">
                            <input
                              type="submit"
                              value="Log In"
                              data-wait="Please wait..."
                              className="button w-button"
                            />
                          </div>
                          <div>
                            Don&#x27;t have an account?{" "}
                            <a
                              href="sign-up.html"
                              className="text-color-blue text-style-link"
                            >
                              Create free account
                            </a>
                          </div>
                        </form>
                        <div className="success-message w-form-done">
                          <div className="success-text">
                            Thank you! Your submission has been received!
                          </div>
                        </div>
                        <div className="error-message w-form-fail">
                          <div className="error-text">
                            Oops! Something went wrong while submitting the
                            form.
                          </div>
                        </div>
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
    </>
  );
};

export default signin;
