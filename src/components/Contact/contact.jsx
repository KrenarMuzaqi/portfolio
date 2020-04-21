import React, { useState } from "react";

import { FormInput, FormTextarea } from "../form-input-component/form-input";
import Button from "../Buttons/custom-button";

import "./_contact.scss";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="contact " id="contact">
      <div className="contact-content">
        <h1 className="title">Let's work together.</h1>
        <p className="paragraph-16 subtitle">
          Use the form below, or hit me up via email at{" "}
          <a href="mailto:krenarmuzaqi" className="email">
            krenarmuzaqi@gmail.com
          </a>
        </p>

        <form
          className="contact-form"
          id="contact-form"
          action="https://formspree.io/krenarmuzaqi@gmail.com"
          method="POST"
        >
          <FormInput
            type="text"
            name="name"
            value={name}
            handleChange={(e) => setName(e.target.value)}
            label="Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
            label="Email"
            required
          />
          <FormTextarea
            name="message"
            value={message}
            handleChange={(e) => setMessage(e.target.value)}
            label="Message"
            required
          ></FormTextarea>
          <Button>Submit</Button>
          <input
            type="hidden"
            name="_next"
            value="../../../public/thank.html"
          />
        </form>
      </div>
    </div>
  );
};
export default Contact;
