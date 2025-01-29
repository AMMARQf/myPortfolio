import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineWhatsApp } from "react-icons/ai";

const ContactData = [
  {
    id: 1,
    icon: <MdOutlineEmail />,
    title: "Email",
    link: "mailto:maralbqma147@gmail.com",
  },
  {
    id: 2,
    icon: <FaInstagram />,
    title: "Instagram",
    link: "https://www.instagram.com/amarqf1?igsh=N3BzeG84NDhsaTVx",
  },
  {
    id: 3,
    icon: <AiOutlineWhatsApp />,
    title: "Whatsapp",
    link: "https://wa.me/+967775802683",
  },
];

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_e8zz44a",
      "template_qwp64qe",
      form.current,
      "XrJ3dE0EI6RUf_KFL"
    );
    e.target.reset();
  };

  return (
    <section className="contact" id="contact">
      <div className="padding top-section">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
      </div>

      <div className="container contact-container">
        <div className="contact-options">
          {ContactData.map(({ id, icon, title, link }) => (
            <article key={id} className="contact-option">
              {icon}
              <h4>{title}</h4>
              <a href={link} target="_blank">
                Send Message
              </a>
            </article>
          ))}
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            placeholder="Enter your Name"
            name="name"
            required
          />
          <input type="email" placeholder="Enter your Email" name="email" />
          <textarea
            rows={10}
            name="message"
            id=""
            required
            placeholder="Enter your Message"
          ></textarea>
          <button className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
