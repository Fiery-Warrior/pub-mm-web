import React, { useState, useEffect } from 'react';
import './pub.css';

function Pub() {
  const [title, setTitle] = useState("The Website for Security Educators");
  const titles = ["The Website for Security Teams", "The Website for Sysadmins", "The Website for Learners", "The Website for Engineers"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTitle(titles[Math.floor(Math.random() * titles.length)]);
    }, 2700); /*Time before next message is displayed*/
    return () => clearInterval(intervalId);
  }, [titles]);


  return (
    <div className="app-container pub">
      <header>
        <img src="/logo.png" alt="logo" style={{width: '250px', height: '45px'}} />
        {/*<h1>Moriarty Matrix</h1>*/}
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="/home" target="_blank">Features</a></li>
            <li><a href="https://github.com/Fiery-Warrior/mm_pythonweb" target="_blank">GitHub</a></li>
            <li><a href="#">Contact Us</a></li>
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
            <p>Moriarty follows the Cyber Kill Chain by Lockheed Martin and the MITRE ATT&CK Matrix. Moriarty goes mainly through the seven stages of the Cyber kill chain</p>
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




{/**Cyber Kill Chain Explanation */}
<section>
  
    <div class="cards-container">

        <div class="card">
          <h2>Reconnaissance</h2>
          {/* <img src="/reconsherlock.png" alt="Sherlock-recon" id="sherlock-recon-img"/> */}
          <p>Input one piece of data Outputs into a detailed analysis of the target</p>
          <div class="card-details">
            <br/>
          {/**<p>Requires minimal user input and provides a detailed dossier on the target, including information such as usernames, emails, phone numbers, IP addresses, and more. .</p>
             */}
            <p>
              Usernames Outputs All Accounts urls <br/>
              Domain URL Outputs Registered data
              Email Address Outputs Phone numbers
              Phone Number Outputs Information
            
            </p>
            {/* <a href="#" class="button">See demo</a> */}
          </div>
        </div>

        <div class="card">
          <h2>Weaponization</h2>
          {/* <img src="/weap.png" alt="Sherlock-weap" id="sherlock-weap-img"/> */}
          <p>basic how moriarty matrix handles stage: Weaponization</p>
          <div class="card-details">
            <br/>
            <p>more in depth on how it handles this stage-in this matrix-what the benefit is-what user gets</p>
            {/* <a href="#" class="button">See demo</a> */}
          </div>
        </div>

        <div class="card">
          <h2>Delivery</h2>
          <p>basic how moriarty matrix handles stage: Delivery</p>
          <div class="card-details">
            <br/>
            <p>more in depth on how it handles this stage-in this matrix-what the benefit is-what user gets</p>
            {/* <a href="#" class="button">See demo</a> */}
          </div>
        </div>

        <div class="card">
          <h2>Install/Exploit</h2>
          <p>basic how moriarty matrix handles stages: Install/Exploit</p>
          <div class="card-details">
            <br/>
            <p>more in depth on how it handles this stage-in this matrix-what the benefit is-what user gets</p>
            {/* <a href="#" class="button">See demo</a> */}
          </div>
        </div>

        <div class="card">
          <h2>Command & Control</h2>
          <p>basic how moriarty matrix handles stage: Command & Control</p>
          <div class="card-details">
            <br/>
            <p>more in depth on how it handles this stage-in this matrix-what the benefit is-what user gets</p>
            {/* <a href="#" class="button">See demo</a> */}
            </div>
              </div>

              <div class="card">
                <h2>Actions on Objectives</h2>
                <p>basic how moriarty matrix handles stage: Actions on Objectives</p>
                <div class="card-details">
                  <br/>
                  <p>more in depth on how it handles this stage-in this matrix-what the benefit is-what user gets</p>
                  {/* <a href="#" class="button">See demo</a> */}
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
              <a href="#">Read more</a>
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