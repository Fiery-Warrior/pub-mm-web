import React, { useState } from 'react';
import './App.css';

//Nav and Card Bodys
import NavBarTop from './Navbar/NavBarTop.js'; //Do not comment out NavBarTop
import { BrowserRouter as Router, Routes, Route }
from 'react-router-dom';
import Recon from './pages/reconicon';
import Weapon from './pages/weapon';
import Delivery from './pages/delivery';
import Exploit from './pages/exploit';
import Install from './pages/install';
import Control from './pages/control';
import Objectives from './pages/objectives';
import Hambar from './pages/hambar';
import Freq from './pages/freq';


import FileDisplaycontrol from './pages/Objectives/FileDisplaycontrol';

//Recon
import FileDisplayip from './pages/Recon/ip/FileDisplayip';
import FileDisplaydomain from './pages/Recon/domain/FileDisplaydomain';
import Phish from './pages/Recon/Phish/Phish';
import SmediaLogin from './pages/Recon/Phish/SmediaLogin';
import FileDisplayphone from './pages/Recon/phone/FileDisplayphone';
import Aimost from './pages/Recon/Aiall/Aimost';

//Delivery
import FileDisplaytext from './pages/Delivery/FileDisplaytext';
import FileDisplaybluetooth from './pages/Delivery/bluetooth/FileDisplaybluetooth';
import FileDisplayemail from './pages/Delivery/email/FileDisplayemail';
import FileDisplayftp from './pages/Delivery/ftp/FileDisplayftp';
import FileDisplayusb from './pages/Delivery/usb/FileDisplayusb';
import FileDisplayweb from './pages/Delivery/website-link/FileDisplayweb';

//Weapon
import ReverseShell from './pages/Weapon/FileDisplayW';
import FileDisplaykey from './pages/Weapon/keylogger/FileDisplaykey';
import FileDisplayworm from './pages/Weapon/vba/FileDisplayworm';
import FileDisplayvirus from './pages/Weapon/virus/FileDisplayvirus';
import FileDisplayjacking from './pages/Weapon/jacking/FileDisplayjacking';
import FileDisplaydos from './pages/Weapon/dos/FileDisplaydos';


//Exploit
import Commonvuln from './pages/Next Exploit/commonvuln/FileDisplaycv';
import CommonWeak from './pages/Next Exploit/commonweak/CommonWeak';
import Exploitdb from './pages/Next Exploit/exploitdb/Exploitdb';



import Navbar from './Navbar';

import Home from './pages/home';

import Contact from './pages/Contacts/Contacts';

import Pub from './pages/Pub/pub.js';
// import { Switch } from '@mui/material';

import Action from './pages/Pyback/Action';
import Connection from './pages/Pyback/Connection';
import Username from './pages/Pyback/Username';
import Domain from './pages/Pyback/Domain';
import Ip from './pages/Pyback/Ip';

function App() {
  const [showTerminal, setShowTerminal] = useState(false);
  
 
  return (
    <div className="App">
      <div className ="top">
       {/* <NavBarTop/>*/}
            <Router>


              <Navbar/>

            <Routes>

                {/* Card Body Pages */}
                <Route path='/reconicon' element={<Recon/>} />
                <Route path='/weapon' element={<Weapon/>} />
                <Route path='/delivery' element={<Delivery/>} />
                <Route path='/exploit' element={<Exploit/>} />
                <Route path='/install' element={<Install/>} />
                <Route path='/control' element={<Objectives/>} />
                <Route path='/objectives' element={<Control/>} /> {/*Originally Objectives */}

                <Route path='/Freq' element={<Freq/>} />
                <Route path='/Hambar' element={<Hambar/>} />

                {/* Objectives */}
                <Route path='/FileDisplaycontrol' element={<FileDisplaycontrol/>} /> {/*Control Page*/}


                {/* Recon Links */}
                <Route path='/FileDisplayip' element={<FileDisplayip/>} />
                <Route path='/FileDisplaydomain' element={<FileDisplaydomain/>} />
                <Route path='/Phish' element={<Phish/>} />
                <Route path='/SmediaLogin' element={<SmediaLogin/>} />
                <Route path='/FileDisplayphone' element={<FileDisplayphone/>} />
                <Route path='/Aimost' element={<Aimost/>} />


                {/* Delivery Links  */}
                <Route path='/FileDisplaytext' element={<FileDisplaytext/>} /> {/*ReverseShell*/}
                <Route path='/FileDisplaybluetooth' element={<FileDisplaybluetooth/>} />
                <Route path='/FileDisplayemail' element={<FileDisplayemail/>} />
                <Route path='/FileDisplayftp' element={<FileDisplayftp/>} />
                <Route path='/FileDisplayusb' element={<FileDisplayusb/>} />
                <Route path='/FileDisplayweb' element={<FileDisplayweb/>} />



                {/* Weapon Links */}
                <Route path='/FileDisplayW' element={<ReverseShell/>} /> {/*ReverseShell*/}
                <Route path='/FileDisplaykey' element={<FileDisplaykey/>} />
                <Route path='/FileDisplayvirus' element={<FileDisplayvirus/>} />
                <Route path='/FileDisplayworm' element={<FileDisplayworm/>} />
                <Route path='/FileDisplayjacking' element={<FileDisplayjacking/>} />
                <Route path='/FileDisplaydos' element={<FileDisplaydos/>} />


                {/*Exploit Links */}
                <Route path='/Commonvuln' element={<Commonvuln/>} />
                <Route path='/CommonWeak' element={<CommonWeak/>} />
                <Route path='/Exploitdb' element={<Exploitdb/>} />


                {/* Control/Actions/Objectives Links */}



                <Route path='/contacts' element={<Contact/>} />

                
                <Route path='/Home' element={<Home/>} />


                <Route path='/' element={<Pub/>} /> {/**Removed /Pub and made just '/' so that it would show as the deafult page at  http://localhost:3000/ but i still need to edit the links from clicked on /Pub to just '/' */}

                {/**Backend so will only show video clips in frontend */}
                <Route path='/Action' element={<Action/>} />
                <Route path='/Connections' element={<Connection/>} />
                <Route path='/Username' element={<Username/>} />
                <Route path='/Domain' element={<Domain/>} />
                <Route path='/Ip' element={<Ip/>} />





            </Routes>
            </Router>




            </div>
    </div>
    
  );
}

export default App;
