import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-logo">AMARQf</div>

      <ul className="permalink">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="copyright">
        <small>
          &copy;2025 AMARQf, All right reserved.
        </small>
      </div>
    </footer>
  );
}

export default Footer;
