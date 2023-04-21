import React from "react";
import Connections from '../HomeCards/videos/Connections.mp4';

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

function Connection() {
  return (
    <>
      <style>{style}</style> {/* Add the CSS style */}
      <div className="video-container">
        <video width="850" height="600" controls>
          <source src={Connections} type="video/mp4" />
        </video>
      </div>
    </>
  );
}

export default Connection;
