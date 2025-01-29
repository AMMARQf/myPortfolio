import React from 'react'
import './home.css'
import { FaDeviantart } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import MyPhoto from '../../assets/myPhoto.png'
import MyPhoto2 from '../../assets/myPhoto2.png'
import CV from '../../assets/AmmarAlbqma.pdf'

function Home() {
  return (
    <div id='home' className='container home-container'>
      <div className='home-image'>
        <img src={MyPhoto} className='img1' alt="" />
        <img src={MyPhoto2} className='img2' alt="" />
      </div>
      <div className="home-myName">
        <h2>Hi, It's me</h2>
        <h1>Ammar Albaqma</h1>
        <h3>Web Developer</h3>
        <ul className='icons'>
          <li className='icon'>
            <a title='DeviantArt' target='_blank' href="https://www.deviantart.com/ammar--albqma/gallery/all">
              <FaDeviantart/>
            </a>
          </li>
          <li className='icon'>
            <a title='Github' target='_blank' href="https://github.com/AMMARQf">
              <FaGithub/>
            </a>
          </li>
          <li className='icon'>
            <a title='LinkedIn' target='_blank' href="https://www.linkedin.com/in/ammar-al-bqma-508a43267/">
              <FaLinkedinIn/>
            </a>
          </li>
        </ul>
        <div className="btns">
          <a href={CV} className='btn' download>Download CV</a>
          <a href='#contact' className='btn btn-primary'>Let's talk</a>
        </div>
      </div>

      <a href='#about' className="scroll-down">Scroll Down</a>
    </div>
  )
}

export default Home
