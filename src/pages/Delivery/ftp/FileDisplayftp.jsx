import React, { useState, useEffect } from 'react';
import '../filedisplay.css';

const FileDisplaykey = () => {

  return (
    <div className="file-display-container">
      <div className="file-display-item">
        <h2 className="file-display-heading">Sender</h2>
        <pre className="file-display-content">
          <code>
            {`
import ftplib

# Define FTP server details
ftp_server = "ftp.example.com"
ftp_username = "username"
ftp_password = "password"

# Define local file path and remote file path
local_file_path = "/path/to/local/file.txt"
remote_file_path = "/path/to/remote/file.txt"

# Create FTP connection and login
ftp = ftplib.FTP(ftp_server, ftp_username, ftp_password)

# Open the local file in binary mode
with open(local_file_path, "rb") as file:
    # Switch to the appropriate directory on the FTP server
    ftp.cwd("/path/to/remote/directory")

    # Send the file to the FTP server
    ftp.storbinary("STOR " + remote_file_path, file)

# Close the FTP connection
ftp.quit()

            `}
          </code>
        </pre>
      </div>
      <div className="file-display-item">
        <h2 className="file-display-heading">Reciever Code</h2>
        <pre className="file-display-content">
          <code>
            {`
import ftplib

# Define FTP server details
ftp_server = "ftp.example.com"
ftp_username = "username"
ftp_password = "password"

# Define remote file path and local file path
remote_file_path = "/path/to/remote/file.txt"
local_file_path = "/path/to/local/file.txt"

# Create FTP connection and login
ftp = ftplib.FTP(ftp_server, ftp_username, ftp_password)

# Switch to the directory on the FTP server
ftp.cwd("/path/to/remote/directory")

# Open the local file in binary mode for writing
with open(local_file_path, "wb") as file:
    # Retrieve the remote file from the FTP server
    ftp.retrbinary("RETR " + remote_file_path, file.write)

# Close the FTP connection
ftp.quit()

            `}
          </code>
        </pre>
      </div>
      <div className="file-display-item">
        <h2 className="file-display-heading">Description</h2>
        <p className="file-display-description">
        <br/>File location must be changed<br/><br/>
        The code shows the sender and reciever using FTP and ftplib which is preinstalled
        </p>
      </div>
    </div>
  );
};

export default FileDisplaykey;
