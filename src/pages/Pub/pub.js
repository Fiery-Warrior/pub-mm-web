import React, { useState, useEffect } from 'react';
import './pub.css';

import { GiMagnifyingGlass } from "react-icons/gi";
import { GiAnvilImpact } from "react-icons/gi";
import { TfiEmail } from "react-icons/tfi";
import { BsFillDoorOpenFill } from "react-icons/bs"
import { IoLogoGameControllerB } from "react-icons/io"
import { FaLaptopCode } from "react-icons/fa"
// import Full from '../HomeCards/videos/Full.mp4';

function Pub() {
  const [title, setTitle] = useState("The Website for Security Educators");
  const titles = ["The Website for Security Teams", "The Website for Sysadmins", "The Website for Learners", "The Website for Engineers", "The Website for Developers"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTitle(titles[Math.floor(Math.random() * titles.length)]);
    }, 2700); /*Time before next message is displayed*/
    return () => clearInterval(intervalId);
  }, [titles]);


  return (
    <div className="app-container pub">
      <header>
      <a href = "/home" target="_blank">
          <img src="/logo.png" alt="logo" style={{width: '250px', height: '45px'}} />
        </a>

        <nav>
          <ul>
            <li><a href="/home" target="_blank">Features</a></li>
            <li><a href="https://github.com/Fiery-Warrior/mm_pythonweb" target="_blank">GitHub</a></li>
            <li><a href="/contacts">Contact Me</a></li>
          </ul>
        </nav>
      </header>
      <main>


      <section className="intro">
          <div className="intro-content">
            {/* <h1>Moriarty Matrix</h1> */}
            <p>{title}</p>
          </div>
        </section>
        <section className="features">

          <div className="feature-card">
            <i className="fas fa-shield-alt"></i>
            <h3>Cyber-Kill-Chain</h3>
            <p>Moriarty follows the Cyber Kill Chain by Lockheed Martin. Walking through the seven stages of the Cyber kill chain</p>
          </div>
          
          <div className="feature-card">
            <i className="fas fa-terminal"></i>
            <h3>Security-focused</h3>
            <p>Moriarty is designed to be a secure and privacy-focused web-app, with built-in tools for penetration testing and digital forensics.</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-globe"></i>
            <h3>Web UI/UX</h3>
            <p>Join the Moriarty community and learn about Offensive Security for Education purposes Only. Step-by-step process of Kill-chain including launching and controlling machine from localhost website</p>
          </div>
        </section>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>


        {/* <section classsName = "video-container">
        <video width="750" height="500px" controls>
          <source src={Full} type="video/mp4"/>
        </video>
        </section> */}


{/**Cyber Kill Chain Explanation */}
<section>
  


    <div class="cards-container">

        <div class="card">
          {/* <h2>Reconnaissance</h2> */} <GiMagnifyingGlass className='icon'/>
          <h2 className='card-header'> <GiMagnifyingGlass/></h2>
          <div class="card-details">
            <br/>
            <p>
              Analyzes domain, IP, Phish, AI...
            
            </p>
            <a href="/reconicon" target="_blank" class="button">See demo</a>
          </div>
        </div>

        <div class="card">
          {/* <h2>Weaponization</h2> */} <GiAnvilImpact className='icon'/>
          <h2 className='card-header'><GiAnvilImpact/></h2>
          <div class="card-details">
            <br/>
            <p>
              Create and use differnt pre-built attacks
            </p>
            <a href="/weapon" target="_blank" class="button">See demo</a>
          </div>
        </div>

        <div class="card">
          {/* <h2>Delivery</h2> */} <TfiEmail className='icon'/>
          <h2 className='card-header'><TfiEmail/></h2>
          <div class="card-details">
            <br/>
            <p>
              Distribute created package (attack)
            </p>
            <a href="/delivery" target="_blank" class="button">See demo</a>
          </div>
        </div>

        <div class="card">
          {/* <h2>Install/Exploit</h2> */} <BsFillDoorOpenFill className='icon'/>
          <h2 className='card-header'><BsFillDoorOpenFill/></h2>
          <div class="card-details">
            <br/>
            <p>Exploit target vulnerability</p>
            <a href="/exploit" target="_blank" class="button">See demo</a>
          </div>
        </div>

        <div class="card">
          {/* <h2>Command & Control</h2> */} <IoLogoGameControllerB className='icon'/>
          <h2 className='card-header'><IoLogoGameControllerB/></h2>
          <div class="card-details">
            <br/>
            <p>Establish communication with target system</p>
            <a href="/connections" target="_blank" class="button">See demo</a>
            </div>
              </div>

              <div class="card">
                {/* <h2>Actions on Objectives</h2> */} <FaLaptopCode className='icon'/>
                <h2 className='card-header'><FaLaptopCode/></h2>
                <div class="card-details">
                  <br/>
                  <p>Retrieve the desired information</p>
                  <a href="/objectives" target="_blank" class="button">See demo</a>
                </div>
              </div>
            </div>      
</section>




        <section className="cta">
          <button>Download Moriarty</button>
        </section>
        <section className="blog">



          <div className="blog-feed">

          <h2>Recent Updates</h2>
            <div className="blog-card" id="recon">
              <h3>User Interface</h3>
              <p>The latest version of Moriarty is now available for download, featuring numerous bug fixes and security enhancements.</p>
              <a href="https://github.com/Fiery-Warrior/pub-mm-web/graphs/commit-activity" target="_blank">Read more</a>
            </div>


          </div>
        </section>


      </main>
      <footer>
        <p>Copyright © 2023 Moriarty Matrix</p>
      </footer>
    </div>
  );
}

export default Pub;