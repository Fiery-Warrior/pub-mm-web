import React from 'react';
import './email.css';
import { MdEmail } from 'react-icons/md';
import { BsLinkedin } from 'react-icons/bs';
import { BsStopwatchFill } from 'react-icons/bs';
import { GiCampfire } from 'react-icons/gi';
import { SiProtonmail } from 'react-icons/si';

function Email() {

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    borderBottom: '1px solid yellow',
  };

  return (
    <div className="App">
      <main>
        <section>
          <h1>Stay Anonymous</h1>
          <br/>
          <ul className='text-and-icons'>
            <li><BsLinkedin/> <a href="https://temp-mail.org/en/" style={linkStyle}>TempMail</a></li>
            <li><BsStopwatchFill/> <a href="https://10minutemail.com/" style={linkStyle}>10 Minute Mail</a></li>
            <li><GiCampfire /> <a href="https://burnermail.io/" style={linkStyle}>Burner Mail</a></li>
            <li><MdEmail /> <a href="https://tempail.com/" style={linkStyle}>Tempail</a></li>
            <li><SiProtonmail /> <a href="https://proton.me/" style={linkStyle}>Proton Mail</a></li>
          </ul>
        </section>


        <p>*Reminder Moriarty's Matrix is for educational use only (any mis-uses of this project is ONLY the user's fault)</p>

      </main>
    </div>
  );
}

export default Email;
