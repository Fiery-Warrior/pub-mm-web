import React from 'react';
import '../style.css';
import { MdPhoneIphone } from 'react-icons/md';

function Iphoneios() {
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
            <MdPhoneIphone /> iphone
          </h1>
          <ul>
            <li>
              Create a configuration profile with the app's installation file using Apple Configurator 2.
            </li>
            <li>
              Save the configuration profile as a .mobileconfig file.
            </li>
            <li>
              Transfer the .mobileconfig file to the Mac computer where you want to run the installation command.
            </li>
            <li>
              Open Terminal on the Mac computer.
            </li>
            <li>
              Navigate to the directory where the .mobileconfig file is located.
            </li>
            <li>
              Run the following command: cfgutil install-app /path/to/profile.mobileconfig - This will install the configuration profile and the app on the connected iOS device(s).
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Iphoneios;