import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitContactForm } from '../../redux/slice/contact/contactSlice';


function Letstalk() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { isLoading, isSuccess, isError, isMessage } = useSelector(
    (state) => state.contact
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const contactData = { name, email, message };
    dispatch(submitContactForm(contactData));
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  React.useEffect(() => {
    if (isSuccess) {
      // Clear the form values after successful submission
      setName('');
      setEmail('');
      setMessage('');
    }
  }, [isSuccess]);

  return (
    <div
      id="w-node-c5cf970e-c2f6-ab4f-cef1-d6ebcfabacfa-e5b1e3c8"
      data-w-id="c5cf970e-c2f6-ab4f-cef1-d6ebcfabacfa"
      style={{
        WebkitTransform:
          'translate3d(null, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
        mozTransform:
          'translate3d(null, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
        msTransform:
          'translate3d(null, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
        transform:
          'translate3d(null, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
      }}
      className="contact-content-right"
    >
      <h2>Let's talk?</h2>
      <div className="padding-bottom padding-xsmall"></div>
      <p>
        Make sure that the organizations achieve customer satisfaction through
        efficient interactions
      </p>
      <div className="padding-bottom padding-medium"></div>
      <div className="contact-form-block w-form">
        <form
          id="wf-form-Contact-Form"
          name="wf-form-Contact-Form"
          data-name="Contact Form"
          method="get"
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <div className="form-field-wrapper">
            <label htmlFor="Contact-Name" className="field-label">
              Name
            </label>
            <input
              type="text"
              className="form-input is-contact w-input"
              maxLength="256"
              name="Contact-10-Name"
              data-name="Contact 10 Name"
              placeholder="John Doe"
              id="Contact-Name"
              required=""
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="form-field-wrapper">
            <label htmlFor="Contact-Email" className="field-label">
              Email
            </label>
            <input
              type="email"
              className="form-input is-contact w-input"
              maxLength="256"
              name="Contact-10-Email"
              data-name="Contact 10 Email"
              placeholder="youremail@gmail.com"
              id="Contact-Email"
              required=""
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="form-field-wrapper">
            <label htmlFor="Contact-Message" className="field-label">
              Message
            </label>
            <textarea
              id="Contact-Message"
              name="Contact-10-Message"
              maxLength="5000"
              data-name="Contact 10 Message"
              placeholder="Type your message..."
              required=""
              className="form-input is-contact is-text-area w-input"
              value={message}
              onChange={handleMessageChange}
            ></textarea>
          </div>
          <input
            type="submit"
            value={isLoading ? 'Sending...' : 'Send Message'}
            data-wait="Please wait..."
            id="w-node-c5cf970e-c2f6-ab4f-cef1-d6ebcfabad19-e5b1e3c8"
            className="button w-button"
            disabled={isLoading}
          />
        </form>
        {isSuccess && (
          <div className="success-message w-form-done">
            <div className="success-text">
              Thank you! Your submission has been received!
            </div>
          </div>
        )}
        {isError && (
          <div className="error-message w-form-fail">
            <div className="error-text">{isMessage}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Letstalk;
