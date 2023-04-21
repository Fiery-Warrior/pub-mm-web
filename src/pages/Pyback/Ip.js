import React from "react";
import IP from '../HomeCards/videos/IP.mp4';

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

function Ip() {
  return (
    <>
      <style>{style}</style> {/* Add the CSS style */}
      <div className="video-container">
        <video width="850" height="600" controls>
          <source src={IP} type="video/mp4" />
        </video>
      </div>
    </>
  );
}

export default Ip;
