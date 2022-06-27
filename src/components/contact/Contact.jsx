import React, { useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import "./Contact.scss";

const Contact = () => {
  const formData = useRef();
  const [state, handleSubmit] = useForm("xqknzyyj");

  if (state.succeeded) {
    formData.current.reset();
      return (
        <div className="contact" id="contact">
          <div className="left">
            <img src="assets/shake.svg" alt="" />
          </div>
          <div className="right">
            <h2>Contact.</h2>
            {/* <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Email" />
              <textarea placeholder="Message"></textarea>
              <button type="submit">Send</button>
              {message && <span>Thanks, I'll reply ASAP </span>}
            </form> */}
        <form onSubmit={handleSubmit} ref={formData}>
          <label htmlFor="email">
          </label>
          <input
            id="email"
            type="email"
            name="email"
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
          <textarea
            id="message"
            name="message"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
          <span>Thanks, I'll reply ASAP </span>
        </form>
          </div>
        </div>
      );
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setMessage(true);
  // };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        {/* <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP </span>}
        </form> */}
    <form onSubmit={handleSubmit} ref={formData}>
      <label htmlFor="email">
      </label>
      <input
        id="email"
        type="email"
        name="email"
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
      </div>
    </div>
  );
}

export default Contact