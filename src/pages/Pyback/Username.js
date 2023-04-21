import React from "react";
import Usernames from '../HomeCards/videos/Usernames.mp4';

const style = `
.video-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
video {
  max-width: 100%;
  max-height: 100%;
}
`;

function Username() {
  return (
    <>
      <style>{style}</style> {/* Add the CSS style */}
      <div className="video-container">
        <video width="850" height="600" controls>
          <source src={Usernames} type="video/mp4" />
        </video>
      </div>
    </>
  );
}

export default Username;
