import React from 'react';
import './contacts.css';
import { MdEmail } from 'react-icons/md';
import { BsLinkedin } from 'react-icons/bs';
import { FaTwitterSquare } from 'react-icons/fa';

function Contact() {

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    borderBottom: '1px solid yellow',
  };


  return (
    <div className="App">
      <main>

      <section>
          <h1><BsLinkedin/> LinkedIn </h1>
          <ul>
            <li><a href="https://www.linkedin.com/in/keagan-bogart-786951209" style={linkStyle}>Keagan Bogart</a></li>
          </ul>
        </section>

        <section>
          <h1><MdEmail /> Email</h1>
          <ul>
            <li><a href="" style={linkStyle}>FieryWarrior@proton.me</a></li>
          </ul>
        </section>


        <section>
          <h2><FaTwitterSquare />Twitter</h2>
          <ul>
            <li><a href="https://twitter.com/FieryWarri89283" style={linkStyle}>FieryWarri89283</a></li>
            </ul>
        </section>

        <h3>*Reminder Moriarty's Matrix is for educational use only (any mis-uses of this project is ONLY the user's fault)</h3>
      </main>

    </div>
  );
}

export default Contact;