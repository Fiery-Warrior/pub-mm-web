import React from 'react';
import '../style.css';
import { GrApple } from 'react-icons/gr';

function Mac() {
  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    borderBottom: '1px solid yellow',
  };

  return (
    <div className="App">
      <main>
        <section className="connect">
          <h1>
            <GrApple /> Aplle Mac Download and Installation process
          </h1>
          <p>Example of automating installation using command line:</p>
          <code>sudo installer -pkg /path/to/installer.pkg -target /</code>
          <p>Example of automating installation using AppleScript:</p>
          <code>
            tell application "Installer"<br />
            open "/path/to/installer.pkg"<br />
            activate<br />
            delay 5 -- wait for the installer to open<br />
            tell application "System Events"<br />
            keystroke return<br />
            delay 5 -- wait for the installation to complete<br />
            keystroke "q" using command down -- close the installer<br />
            end tell<br />
            end tell<br />
          </code>
        </section>
      </main>
    </div>
  );
}

export default Mac;
