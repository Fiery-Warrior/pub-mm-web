// import React, { useState } from "react";
import React from "react";
import { GiMagnifyingGlass } from "react-icons/gi";
import { IoPerson } from 'react-icons/io5';
import { CgWebsite } from 'react-icons/cg';
import { MdSignalWifiStatusbarConnectedNoInternet4 } from 'react-icons/md';
import { MdOutlinePhishing } from 'react-icons/md';
import { GiDualityMask } from 'react-icons/gi';
import { GiAnvilImpact } from "react-icons/gi";
import { TfiEmail } from "react-icons/tfi";
import { FaDownload } from "react-icons/fa"
import { IoLogoGameControllerB } from "react-icons/io"
import { BsFillDoorOpenFill } from "react-icons/bs"
import { FaLaptopCode } from "react-icons/fa"
/*weapon section*/
import { GiKeyboard } from 'react-icons/gi';
import { AiFillFileWord } from 'react-icons/ai';
import { VscTerminalPowershell } from 'react-icons/vsc';
import { BsFillFileEarmarkLock2Fill } from 'react-icons/bs';
import keylogger from './HomeCards/images/keylogger.png';
import reverseshellimage from './HomeCards/images/reverseshell.png';
import vba from './HomeCards/images/vba.png';
import ransom from './HomeCards/images/ransom.png';
/*Delivery Section */
import { BsBluetooth } from 'react-icons/bs';
import { GrDocumentTransfer } from 'react-icons/gr';
import { RiMailSendFill } from 'react-icons/ri';
import emailimage from './HomeCards/images/emailimage.png';
import ftpimage from './HomeCards/images/ftpimage.png';
import blueimage from './HomeCards/images/blueimage.png';
/*Exploit Section */
import expimage from './HomeCards/images/expimage.png';
import cisaimage from './HomeCards/images/cisaimage.png';
import veimage from './HomeCards/images/veimage.png';
import { IoWarningOutline } from 'react-icons/io5';
import { FaBug } from 'react-icons/fa';
import { CiSatellite1 } from 'react-icons/ci';


/*others */
import clone from './HomeCards/images/clone.png';
import Card from "./HomeCards/homecards";

import Username from './HomeCards/videos/Usernames.mp4';
import Whois from './HomeCards/videos/Whois.mp4';
import Connections from './HomeCards/videos/Connections.mp4';
import Actions from './HomeCards/videos/Actions.mp4';
import IP from './HomeCards/videos/IP.mp4';

function Home() {
  // const [showVideo, setShowVideo] = useState(false);

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    borderBottom: '1px solid yellow',
  };

  return (
    <div
      className="slim-container"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        alignItems: "flex-start",
        width: "100vw",
        maxWidth: "100%",
        padding: "20px",
      }}
    >
      <Card
        icon={<GiMagnifyingGlass style={{ color: '#FF3B30' }}/>}
        title="Recon"
        className="card"
        description={
          <div>
            <Card
              icon={<IoPerson />}
              title="Username"
              description={
                <div>
                  {/* <h3>This phase is about Username and their accounts.</h3> */}
                  <p>If you have a username (such as from Instagram), you can input that username and will receive 
                    URLs to numerous accounts that they are registered with such as Spotify, YouTube, Buzzfeed....</p>
                  {/* <br/> 
                  <p>Provides lifestyle insights on the target, an attacker may use this information to reach out to the target on various platforms, assume their identity, craft phishing emails, etc...</p>
                  <br/> */}
                  <video width="750" height="500" controls >
                    <source src={Username} type="video/mp4"/>
                  </video>
                  <p>Database of Username is Powered by </p>
                  <a href="https://github.com/sherlock-project/sherlock.git" style={linkStyle} target="_blank" rel="noopener noreferrer">Sherlock</a>
                </div>
                
              }
              // image={username}
              underImageDescription="Inputted username: icecube and outputted accounts with that URL"

            />
      <Card
        icon={<CgWebsite />}
        
        title="Domain"
        description={
          <div>
            {/* <h3>This phase is about analyzing Domains </h3> */}
            <p>Enter domain (such as youtube.com), you can input that domain and will receive 
              data on it is registered </p>
            {/* <p>After finding information about the domain an attacker may use this information</p> */}
              <video width="750" height="500" controls >
                    <source src={Whois} type="video/mp4"/>
              </video>
            {/* <p>Backend & Database Powered by whois</p>  */}
          </div>
        }
        // image= {domain} className = "img-large"
        underImageDescription = "Inputted domain url: youtube.com and outputted data"
      />



      <Card
        icon={<MdSignalWifiStatusbarConnectedNoInternet4 />}
        title="IP Analysis"
        description={
          <div>
            {/* <h3>This phase is about IP and its information </h3> */}
            {/* <br/> */}
            <p>Analyze who owns an IP and where it is specifically located</p>
            {/* <br/>  */}
            {/* <p>After finding information about the ip an attacker may use this information in various fashions such as knowing where someone lives</p> */}
              {/* <br/>
              <br/> */}
              <video width="750" height="500" controls >
                    <source src={IP} type="video/mp4"/>
              </video>
          </div>
        }
        // image= {ip} className = "img-large"
        // underImageDescription = "Inputted domain ip 12.561.238"
      />


      <Card
        icon={<MdOutlinePhishing/>}
        title="Phishing"
        description={
          <div> 
            {/* <h3>This phase is about Website cloning and Phishing </h3> */}
            {/* <br/> */}
            <p>Once the attacker has determined an individual's preferences he may craft a phishing email that the
              has a greater chance of the target clicking on it. See use case below:
            </p>
            <br/> 
            <p>The attacker may send a phishing email saying that it has detected an unauthorized login from --insert location where they are not-- and then
              it asks them to reset their login information following the below link (it is to the malicious social-media clone) after the target enters their information they will be redirected to the true social-media.com</p>
              <br/>
            <p>This is considered active recon, and is explained for educational purposes only. if it is used: The Creator (and all who helped with this project) are exempt from any blame</p> 
          </div>
        }
        image= {clone} className = "img-large"
        underImageDescription = "Due to possible copyright issues I have used the title of social-media instead of any actual site"
      />


      <Card
        icon={<GiDualityMask/>}
        title="AI DeepFake"
        description={
          <div>
            <h3>Create Deepfake or an AI product </h3>
            <br/>


          </div>
        }
        // image= {domain} className = "img-large"
        // underImageDescription = "Inputted domain url: youtube.com and outputted data"
      />
    </div>
  }
/> {/*Recon Card end */}


{/**Weapon card starts */}
<Card
        icon={<GiAnvilImpact style={{ color: '#FF3B30' }}/>}
        title="Weapon"
        className="card"
        description={
          <div>
            <Card
              icon={<VscTerminalPowershell />}
              title="Reverse"
              description={
                <div>
                  <p>Control target machine through web-terminal</p>
                </div>
              }
              image= {reverseshellimage} className = "img-large"
              underImageDescription="Control target through Moriarty Matrix Actions page"
            />
      <Card
        icon={<GiKeyboard />}
        title="Keylogger"
        description={
          <div>
            <p>Record target's keystrokes identify passwords, websites, activity, and more.</p>
          </div>
        }
        image= {keylogger} className = "img-large"
        underImageDescription = "Capture data into a .txt file"
      />

      <Card
        icon={<AiFillFileWord />}
        title="VBA Macro"
        description={
          <div>
            <p>Overload target system through MacroVirus</p>
          </div>
        }
        image= {vba} className = "img-large"
      />
    <Card
        icon={<BsFillFileEarmarkLock2Fill />}
        title="Ransomware"
        description={
          <div>
            <p>Encrypt target's files and data with a specialized key</p>
          </div>
        }
        image= {ransom} className = "img-large"
      />
    </div>
  }
/>{/**End of Weapon Section */}




{/**End of Delivery Section */}
<Card
        icon={<TfiEmail style={{ color: '#FF3B30' }}/>}
        title="Delivery"
        className="card"
        description={
          <div>
            <Card
              icon={<BsBluetooth />}
              title="Bluetooth"
              description={
                <div>
                  <p>Send message through bluetooth</p>
                </div>
              }
              image= {blueimage} className = "img-large"
              underImageDescription="Must ensure you have bluetooth enable device or adapter for VM"
            />
      <Card
        icon={<RiMailSendFill/>}
        title="Temp Email"
        description={
          <div>
            <p>Send documents and messages through disposable emails</p>
          </div>
        }
        image= {emailimage} className = "img-large"
      />

      <Card
        icon={<GrDocumentTransfer/>}
        title="FTP"
        description={
          <div>
            <p>Send documents over FTP using sender and reciever</p>
          </div>
        }
        image= {ftpimage} className = "img-large"
      />

    </div>
  }
/>{/**End of Delivery Section */}



{/**End of Exploit Section */}
<Card
        icon={<BsFillDoorOpenFill style={{ color: '#FF3B30' }}/>}
        title="Exploit"
        className="card"
        description={
          <div>
            <Card
              icon={<CiSatellite1 />}
              title="CISA"
              // description={
              //   <div>
              //   </div>
              // }
              image= {cisaimage} className = "img-large"
            />
      <Card
        icon={<FaBug/>}
        title="Exploitdb"
        // description={
        //   <div>
        //     <p>Send documents and messages through disposable emails</p>
        //   </div>
        // }
        image= {expimage} className = "img-large"
      />

      <Card
        icon={<IoWarningOutline/>}
        title=" Common vulnerabilities"
        image= {veimage} className = "img-large"
      />

    </div>
  }
/>{/**End of Exploit Section */}

    <Card
    icon={<FaDownload style={{ color: '#FF3B30' }}/>}
    title="Install"
    description="Installing the malware 'package'."
    />    
    <Card
    icon={<IoLogoGameControllerB style={{ color: '#FF3B30' }}/>}
    title="Control"
    description={
      <>
        <video width="750" height="500" controls >
          <source src={Connections} type="video/mp4"/>
        </video>
      </>
    }
    />
    <Card
    icon={<FaLaptopCode style={{ color: '#FF3B30' }}/>}
    title="Actions"
    description={
      <>
        <video width="750" height="500" controls >
          <source src={Actions} type="video/mp4"/>
        </video>
      </>
    }
    />
    </div>
  );
}

export default Home;
