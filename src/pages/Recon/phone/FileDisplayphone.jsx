import React from 'react';
import './aideep.css';
import { FaPaintBrush } from 'react-icons/fa';

function Aideep() {
  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    borderBottom: '1px solid yellow',
  };

  return (
    <div className="App">
      <main>
        <section className="connect">
          <h1><FaPaintBrush />Art[ifical] Intellegence</h1>
          <ul>
            <li><a href="https://stablediffusionweb.com/#demo" style={linkStyle}>Diffusion Online</a> </li>
            <li><a href="https://www.midjourney.com/home/?callbackUrl=%2Fapp%2F" style={linkStyle}>Midjourney </a> </li>
            <li><a href="https://dreamstudio.ai/generate" style={linkStyle}>Dream Studio </a> </li>
            <li><a href="https://app.runwayml.com/logine" style={linkStyle}>Runway </a> </li>
            <li><a href="https://deepdreamgenerator.com/" style={linkStyle}>Deep Dream Generator</a> </li>

          </ul>
        </section>

      </main>

    </div>
  );
}

export default Aideep;