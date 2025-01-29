import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
import { BiBook } from "react-icons/bi";
import { RiServerLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import "./nav.css";

import { useState } from "react";

function Nav() {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a
        className={activeNav === "#" ? "active" : ""}
        onClick={() => setActiveNav("#")}
        href="#"
      >
        <IoHomeOutline />
      </a>
      <a
        className={activeNav === "#about" ? "active" : ""}
        onClick={() => setActiveNav("#about")}
        href="#about"
      >
        <LuUserRound />
      </a>
      <a
        className={activeNav === "#skills" ? "active" : ""}
        onClick={() => setActiveNav("#skills")}
        href="#skills"
      >
        <BiBook />
      </a>
      <a
        className={activeNav === "#services" ? "active" : ""}
        onClick={() => setActiveNav("#services")}
        href="#services"
      >
        <RiServerLine />
      </a>
      <a
        className={activeNav === "#contact" ? "active" : ""}
        onClick={() => setActiveNav("#contact")}
        href="#contact"
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
}

export default Nav;
