import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [title, setTitle] = useState("The Website for Security Educators");
  const titles = ["The Website for Security Teams", "The Website for Sysadmins", "The Website for Learners", "The Website for Engineers"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTitle(titles[Math.floor(Math.random() * titles.length)]);
    }, 1700); /*Time before next message is displayed*/
    return () => clearInterval(intervalId);
  }, [titles]);


  return (
    <div className="app-container">
      <header>
        <img src="/logo.png" alt="logo" style={{width: '200px', height: '40px'}} />
        {/*<h1>Moriarty Matrix</h1>*/}
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </nav>
      </header>
      <main>


      <section className="intro">
          <div className="intro-content">
            <h1>Moriarty Matrix</h1>
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
          <img src="/reconsherlock.png" alt="Sherlock" id="sherlock-img"/>
          <p>Takes minimal user input on the recon stage and outputting a detailed dossier on the target.</p>
          <div class="card-details">
            <br/>
            <p>Provides information concerning: usernames, emails, phone numbers, IP addresses, and more information. As seen below the user enters minimal information and 
              receives an output like below which can be further used to gain control of target. Uses original recon search code, Sherlock, ______, and ________
            </p>
            <a href="#" class="button">See more photos</a>
          </div>
        </div>

        <div class="card">
          <h2>Weaponization</h2>
          {/*<img src="https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/cyc2022_20b.jpg" alt="Earth Science">*/}
          <p>basic how moriarty matrix handles stage: Weaponization</p>
          <div class="card-details">
            <br/>
            <p>more in depth on how it handles this stage-in this matrix-what the benefit is-what user gets</p>
            <a href="#" class="button">See more photos</a>
          </div>
        </div>

        <div class="card">
          <h2>Delivery</h2>
          {/*<img src="https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/2021_0917_small_explorers_full.jpg" alt="Aeronautics">*/}
          <p>basic how moriarty matrix handles stage: Delivery</p>
          <div class="card-details">
            <br/>
            <p>more in depth on how it handles this stage-in this matrix-what the benefit is-what user gets</p>
            <a href="#" class="button">See more photos</a>
          </div>
        </div>

        <div class="card">
          <h2>Install/Exploit</h2>
          {/*<img src="https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/jupiter_21hubble_pia23615-16.png" alt="Planetary Science">*/}
          <p>basic how moriarty matrix handles stages: Install/Exploit</p>
          <div class="card-details">
            <br/>
            <p>more in depth on how it handles this stage-in this matrix-what the benefit is-what user gets</p>
            <a href="#" class="button">See more photos</a>
          </div>
        </div>

        <div class="card">
          <h2>Command & Control</h2>
          {/*<img src="https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/solar-dynamics-observatory-eclipse.jpg" alt="Heliophysics">*/}
          <p>basic how moriarty matrix handles stage: Command & Control</p>
          <div class="card-details">
            <br/>
            <p>more in depth on how it handles this stage-in this matrix-what the benefit is-what user gets</p>
            <a href="#" class="button">See more photos</a>
            </div>
              </div>

              <div class="card">
                <h2>Actions on Objectives</h2>
                {/*<img src="https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/insight.jpg" alt="Technology">*/}
                <p>basic how moriarty matrix handles stage: Actions on Objectives</p>
                <div class="card-details">
                  <br/>
                  <p>more in depth on how it handles this stage-in this matrix-what the benefit is-what user gets</p>
                  <a href="#" class="button">See more photos</a>
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
              <h3>Reconnaissance</h3>
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

export default App;

