import React from 'react';
import './phish.css';
import { AiFillFacebook } from 'react-icons/ai';

function Phish() {
  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    borderBottom: '1px solid yellow',
  };

  return (
    <div className="App">
      <main>
        <section className="connect">
          <h1><AiFillFacebook style={{ fontSize: "35px", color: "#1877f2" }}/> 
            <a href="http://127.0.0.1:3000/smedialogin/" style={linkStyle}>
              social-media 
            </a>
          </h1>

          <ul>
            <li>Social-media Login Clone can host it on a similar domain, record target's login then redirect them to the actual social-media.com</li>
          </ul>
        </section>
        
      </main>

    </div>
  );
}

export default Phish;



