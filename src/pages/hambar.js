import React from 'react';

function Hambar() {
  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    borderBottom: '1px solid yellow',
  };
  
  return (
    <div>
      <ul>

      <section id = "recon">
        <h2>Recon</h2>
        <li><a href="/reconicon" style={linkStyle}>Recon Cards</a></li>
        <li><a href="/profile_info" style={linkStyle}>Instagram Scaper</a></li>
        <li><a href="/sherlock/search" style={linkStyle}>Username Search</a></li>
      </section>

        <br/>

        <section id = "weapon">
          <h2>Weapon</h2>
          <li><a href="/weapon" style={linkStyle}>Weapon Cards</a></li>
          <li><a href="/filedisplayw" style={linkStyle}>Reverse Shell</a></li>
          <li><a href="/filedisplaykey" style={linkStyle}>Keylogger</a></li>
          <li><a href="/filedisplayvirus" style={linkStyle}>Virus</a></li>
          <li><a href="/filedisplayworm" style={linkStyle}>Worm</a></li>
          <li><a href="/filedisplayjacking" style={linkStyle}>Ransomware</a></li>
          <li><a href="/filedisplaydos" style={linkStyle}>Denial Of Service</a></li>
        </section>
        <br/>


        <section id = "delivery">
          <h2>Delivery</h2>
          <li><a href="/delivery" style={linkStyle}>Delivery Cards</a></li>
          <li><a href="/filedisplaytext" style={linkStyle}>Phone Number</a></li>
          <li><a href="/filedisplaybluetooth" style={linkStyle}>Bluetooth Transfer</a></li>
          <li><a href="/filedisplayemail" style={linkStyle}>Email</a></li>
          <li><a href="/filedisplayftp" style={linkStyle}>FTP</a></li>
          <li><a href="/filedisplayusb" style={linkStyle}>USB</a></li>
        </section>
          <br/>


        <section id = "exploit">
          <h2>Exploit</h2>
          <li><a href="/exploit" style={linkStyle}>Exploit</a></li>
        </section>
          <br/>


        <section id = "install">
          <h2>Install</h2>
          <li><a href="/install" style={linkStyle}>Install</a></li>
        </section>
        <br/>


        <section id = "control">
          <h2>Control</h2>
          <li><a href="/filedisplaycontrol" style={linkStyle}>Connection Code</a></li>
          <li><a href="/connections" style={linkStyle}>Connections</a></li>
        </section>
        <br/>

        <section id = "Actions">
          <h2>Actions</h2>
          <li><a href="/objectives" style={linkStyle}>Objective Cards</a></li>
          <li><a href="/run_command" style={linkStyle}>Reverse Shell Controller</a></li>
        </section>
        <br/>


        <h2>Other</h2>
        <li><a href="/web-terminal" style={linkStyle}>Web Terminal</a></li>
        <li><a href="/packet_capture" style={linkStyle}>Packet Capture</a></li>
        <li><a href="/home" style={linkStyle}>Home</a></li>
        <li><a href="/hambar" style={linkStyle}>Hambar</a></li>

        <br/>

        <h2>VPN-tracker Info</h2>
        {/* <li><a href="/tor_map" style={linkStyle}>Tor Map</a></li> */}
        <li><a href="/ip_map" style={linkStyle}>IP Map</a></li>
        <br/>


</ul>
</div>
);
};

export default Hambar;