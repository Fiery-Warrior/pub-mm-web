import React from 'react';
import '../style.css';
import { MdPhoneIphone } from 'react-icons/md';

function Android() {
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
            <MdPhoneIphone /> android device
          </h1>
          <ul>
            <li>
              adb install /path/to/your/app.apk - Installs the app located at "/path/to/your/app.apk" on the connected Android device.
            </li>
            <li>
              Using Android Studio - Connect your Android device to your computer and run your app from Android Studio to automatically install it.
            </li>
            <li>
              Using Google Play Store - Upload your app to the Google Play Store and users can download and install it from there.
            </li>
            <li>
              Using a third-party app store - Upload your app to a third-party app store such as Amazon Appstore or APKMirror and users can download and install it from there.
            </li>
            <li>
              Using a custom script - Create a custom script to automate the installation process using the Android Package Manager (PM) tool or other command line and programming methods.
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Android;
