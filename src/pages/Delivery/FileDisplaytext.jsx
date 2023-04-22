import React, { useState, useEffect } from 'react';
import './filedisplay.css';

const FileDisplayW = () => {

  return (
    <div className="file-display-container">
      <div className="file-display-item">
        <h2 className="file-display-heading">text.py</h2>
        <pre className="file-display-content">
          <code>
            {`
from twilio.rest import Client

# Your Twilio account SID and auth token
account_sid = 'YOUR_ACCOUNT_SID'
auth_token = 'YOUR_AUTH_TOKEN'

# Create a Twilio client instance
client = Client(account_sid, auth_token)

# Send a message with a custom sender ID
message = client.messages.create(
    body='Hello, this is a test message!',
    from_='YOUR_CUSTOM_SENDER_ID',
    to='RECIPIENT_PHONE_NUMBER'
)

# Print the message SID
print(message.sid)

            `}
          </code>
        </pre>
      </div>

      <div className="file-display-item">
        <h2 className="file-display-heading">Description</h2>
        <p className="file-display-description">
        <br/>
        Twilio does not require a credit card or another phne number, it only requires A first and A last name and An email address (can you temp or proton)
        <br/>
        <br/>
        Replace YOUR_ACCOUNT_SID and YOUR_AUTH_TOKEN with your Twilio account credentials,
        <br/>
        <br/>
         YOUR_CUSTOM_SENDER_ID with the custom sender ID you want to use, and RECIPIENT_PHONE_NUMBER with the phone number you want to send the message to. 
        <br/>
        <br/>
        Note that the custom sender ID must be a valid phone number or short code that you have registered with Twilio.
        
        
        </p>
      </div>
    </div>
  );
};

export default FileDisplayW;
