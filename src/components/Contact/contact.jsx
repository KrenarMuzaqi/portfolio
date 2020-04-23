import React, { useState, useEffect } from "react";

import { FormInput, FormTextarea } from "../form-input-component/form-input";
import Button from "../Buttons/custom-button";

import Aos from "aos";
import "aos/dist/aos.css";

import "./_contact.scss";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="contact " id="contact">
      <div className="contact-content">
        <h1 className="title" data-aos="fade-right">
          Let's work together.
        </h1>
        <p className="paragraph-16 subtitle" data-aos="fade-left">
          Use the form below, or hit me up via email at{" "}
          <a href="mailto:krenarmuzaqi" className="email">
            krenarmuzaqi@gmail.com
          </a>
        </p>

        <form
          data-aos="fade-left"
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
        </form>
      </div>
    </div>
  );
};
export default Contact;
