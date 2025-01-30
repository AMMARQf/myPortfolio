import React from "react";
import "./about.css";
import MyPhoto from "../../assets/universityPhoto.png";
import MyPhoto2 from "../../assets/universityPhotoBandW.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

function About() {
  return (
    <section className="about" id="about">
      <div className="padding top-section">
        <h5>Get to know</h5>
        <h2>About Me</h2>
      </div>

      <div className="container about-container">
        <div className="about-image">
          <img className="image1" src={MyPhoto} alt="" />
          <img src={MyPhoto2} alt="" />
        </div>
        <div className="about-text">
          <div className="about-experience">
            <article>
              <FaAward />
              <h4>Experience</h4>
              <p>+2 years</p>
            </article>
            <article>
              <VscFolderLibrary />
              <h4>Collaboration</h4>
              <p>Open to team-based projects</p>
            </article>
            <article>
              <FiUsers />
              <h4>Projects</h4>
              <p>+40 Small and learning projects</p>
            </article>
          </div>
          <p className="text">
            I'm Ammar, an ITC student and front-end developer passionate about
            creating innovative websites with great user experiences. Skilled in
            HTML, CSS, JavaScript, and React.js, I've built a portfolio and
            various small projects to refine my skills. Always eager to learn
            and tackle new challenges in web development.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
}
import "./about.css";

export default About;
