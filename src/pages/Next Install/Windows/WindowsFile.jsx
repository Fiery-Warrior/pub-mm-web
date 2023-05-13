import React from 'react';
import '../style.css';
import { DiWindows } from 'react-icons/di';

function Windows() {
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
            <DiWindows /> Windows Download and Installation process
          </h1>
          <p>To automatically install and start a program after downloading it, you can use PowerShell. Here's an example:</p>
          <ol>
            <li>Create a new PowerShell script file with a ".ps1" extension.</li>
            <li>Open the PowerShell Integrated Scripting Environment (ISE) or any text editor to write the PowerShell script.</li>
            <li>Write the command to invoke the program's installer executable file and include any necessary command-line arguments. For example, if the installer executable is "program_installer.exe" and it needs to be run with the "/silent" and "/norestart" options, the command would be: & 'C:\Path\to\program_installer.exe' /silent /norestart</li>
            <li>Save the PowerShell script file.</li>
            <li>Open PowerShell as an administrator.</li>
            <li>Navigate to the directory where the PowerShell script file is saved using the cd command.</li>
            <li>Run the PowerShell script file by typing its name and pressing enter. For example, if the script file is named "install.ps1", type: .\install.ps1</li>
            <li>The program installer should run and install the program silently, without requiring any further input from the user.</li>
          </ol>
        </section>
      </main>
    </div>
  );
}

export default Windows;
