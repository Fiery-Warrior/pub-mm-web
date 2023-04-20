import React from 'react';
import './aimost.css';
import { MdRecordVoiceOver } from 'react-icons/md';
import { TbMessageChatbot } from 'react-icons/tb';

function Aimost() {
  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    borderBottom: '1px solid yellow',
  };

  return (
    <div className="App">
      <main>
        <section className="connect">
          <h1><TbMessageChatbot />ChatBot</h1>
          <ul>
            <li><a href="https://www.perplexity.ai/" style={linkStyle}>Perplexity</a> </li>
            <li><a href="https://chat.openai.com/" style={linkStyle}>OpenAi </a> </li>
            <li><a href="https://bard.google.com/?hl=en" style={linkStyle}>Google Bard </a> </li>
            <li><a href="https://www.bing.com/search?form=MY02AA&OCID=MY02AA&=ch&pl=launch&q=Bing+AI&showconv=1" style={linkStyle}>Bing Ai </a> </li>

          </ul>
        </section>
        <section className="connect">

          <h1><MdRecordVoiceOver />Other</h1>
          <ul>
            <li><a href="https://beta.character.ai/" style={linkStyle}>Character.ai: Converse with a clone of almost anyone</a> </li>
            <li><a href="https://www.anthropic.com/index/measuring-progress-on-scalable-oversight-for-large-language-models" style={linkStyle}>Anthropic  </a> </li>
          </ul>
        </section>

      </main>

    </div>
  );
}

export default Aimost;