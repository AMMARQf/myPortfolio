import React from "react";
import "./services.css";
import { MdOutlineDesignServices } from "react-icons/md";
import { IoRocketSharp } from "react-icons/io5";
import { FaCode } from "react-icons/fa";

const servicesData = [
  {
    id: 1,
    title: "Web Design",
    icon: <MdOutlineDesignServices />,
    disc: "Crafting visually appealing and user-friendly website designs to enhance user experience.",
  },
  {
    id: 2,
    title: "Fast Performance",
    icon: <IoRocketSharp />,
    disc: "Optimizing website speed and performance for a smooth and seamless experience.",
  },
  {
    id: 3,
    title: "Clean Code",
    icon: <FaCode />,
    disc: "Writing well-structured, maintainable, and efficient code for scalable web applications.",
  },
];

function Services() {
  return (
    <section className="services" id="services">
      <div className=" padding top-section">
        <h5>What I Offer</h5>
        <h2>Services</h2>
      </div>

      <div className="container services-container">
        {servicesData.map(({ id, title, icon, disc }) => (
          <div key={id} className="service">
            {icon}
            <div className="title">{title}</div>
            <p className="disc">{disc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
