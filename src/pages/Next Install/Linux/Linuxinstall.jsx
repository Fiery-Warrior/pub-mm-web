import React from 'react';
import '../style.css';
import { DiLinux } from 'react-icons/di';

function Linuxinstall() {
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
            <DiLinux /> Linux Download and Installation Process
          </h1>
          <p>
            Linux is a free and open-source operating system that powers many servers, desktops, and mobile devices around the world. The installation process for Linux varies depending on the distribution you choose. Here are some popular Linux distributions and their download pages:
          </p>
          <ul>
            <li>
              <a href="https://ubuntu.com/download" style={linkStyle}>
                Ubuntu - A popular desktop Linux distribution
              </a>
            </li>
            <li>
              <a href="https://getfedora.org/en/workstation/download/" style={linkStyle}>
                Fedora - A community-driven Linux distribution sponsored by Red Hat
              </a>
            </li>
            <li>
              <a href="https://www.debian.org/distrib/" style={linkStyle}>
                Debian - A stable and popular Linux distribution
              </a>
            </li>
            <li>
              <a href="https://www.centos.org/download/" style={linkStyle}>
                CentOS - A community-driven Linux distribution derived from Red Hat Enterprise Linux
              </a>
            </li>
            <li>
              <a href="https://www.archlinux.org/download/" style={linkStyle}>
                Arch Linux - A lightweight and flexible Linux distribution
              </a>
            </li>
          </ul>
          <p>
            Once you have downloaded the Linux distribution of your choice, you can follow the installation instructions provided on their website to install it on your computer. The process usually involves creating a bootable USB drive or DVD and booting your computer from it to begin the installation process.
          </p>
          <h2>Automatically Install Software on Linux</h2>
          <p>
            In Linux, you can use package managers like APT or Yum to install software packages. You can also use third-party tools like Snap or Flatpak to install and manage software packages. Here's an example of how to automatically install a package using the APT package manager:
          </p>
          <pre>
            $ sudo apt-get update
            $ sudo apt-get install PACKAGE_NAME -y
          </pre>
          <p>
            Replace PACKAGE_NAME with the name of the package you want to install. The -y option is used to automatically answer "yes" to any prompts during the installation process.
          </p>
        </section>
      </main>
    </div>
  );
}

export default Linuxinstall;
