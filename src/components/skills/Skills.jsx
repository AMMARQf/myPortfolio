import React from "react";
import "./skills.css";
import CSS from "../../assets/Css3.svg";
import Express from "../../assets/expressjs.svg";
import Html5 from "../../assets/html5.svg";
import Javascript from "../../assets/javascript.svg";
import Mongodb from "../../assets/mongodb.svg";
import Node from "../../assets/nodejs.svg";
import Photoshop from "../../assets/photoshop.svg";
import Reactjs from "../../assets/react.svg";

const SkillsData = [
  {
    id: 1,
    img: Html5,
    title: "Html",
    disc: "Structure",
  },
  {
    id: 2,
    img: CSS,
    title: "CSS",
    disc: "user Interface",
  },
  {
    id: 3,
    img: Javascript,
    title: "Javascript",
    disc: "Interaction",
  },
  {
    id: 4,
    img: Photoshop,
    title: "Photoshop",
    disc: "design tool",
  },
  {
    id: 5,
    img: Reactjs,
    title: "React.js",
    disc: "Framework",
  },
  {
    id: 6,
    img: Node,
    title: "Node.js",
    disc: "Web Server",
  },
  {
    id: 7,
    img: Express,
    title: "Express.js",
    disc: "Node Framework",
  },
  {
    id: 8,
    img: Mongodb,
    title: "MongoDB",
    disc: "Database",
  },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="padding top-section">
        <h5>What skills I have</h5>
        <h2>My Experience</h2>
      </div>

      <div className="container skills-container">
        {SkillsData.map(({id, img, title, disc}) => (
          <article key={id} className="card-skill">
            <div className="icon">
              <img src={img} alt="" />
            </div>

            <div className="content">
              <h4>{title}</h4>
              <p className="text-light">{disc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
