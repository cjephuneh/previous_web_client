import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitContactForm } from '../../redux/slice/contact/contactSlice';


function Letstalk() {
  const dispatch = useDispatch();
  //const { isLoading, isError, isSuccess } = useSelector(state => state.waitlist); 
  const [contactData, setcontactData] = useState({
    name: '',
    email: '',
    subject:'',
    message: ''
  });

  const handleChange = (e) => {
    setcontactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitContactForm(contactData))
    setcontactData({
      name: '',
      email: '',
      subject:'',
      message: ''
    });
  };


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
              name="name" // Update name attribute to "name"
              data-name="Contact 10 Name"
              placeholder="John Doe"
              id="Contact-Name"
              required=""
              value={contactData.name}
              onChange={handleChange}
            />

            <input
              type="email"
              className="form-input is-contact w-input"
              maxLength="256"
              name="email" // Update name attribute to "email"
              data-name="Contact 10 Email"
              placeholder="youremail@gmail.com"
              id="Contact-Email"
              required=""
              value={contactData.email}
              onChange={handleChange}
            />


            <textarea
              id="Contact-subject"
              name="subject" // Update name attribute to "message"
              maxLength="5000"
              data-name="Contact 10 Message"
              placeholder="subject..."
              required=""
              className="form-input is-contact is-text-area w-input"
              value={contactData.subject}
              onChange={handleChange}
            ></textarea>


            <textarea
              id="Contact-Message"
              name="message" 
              maxLength="5000"
              data-name="Contact 10 Message"
              placeholder="Type your message..."
              required=""
              className="form-input is-contact is-text-area w-input"
              value={contactData.message}
              onChange={handleChange}
            ></textarea>

             
          </div>
          <input
           type="submit"
           value="Send Message"
           data-wait="Please wait..."
           id="w-node-c5cf970e-c2f6-ab4f-cef1-d6ebcfabad19-e5b1e3c8"
           className="button w-button"
          />
        </form>
        
          <div className="success-message w-form-done">
            <div className="success-text">
              Thank you! Your submission has been received!
            </div>
          </div>
     
        
          <div className="error-message w-form-fail">
            <div className="error-text"></div>
          </div>
      
      </div>
    </div>
  );
}

export default Letstalk;
