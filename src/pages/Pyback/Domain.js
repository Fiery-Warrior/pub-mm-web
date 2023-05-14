import React from "react";

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

function Domain() {
  return (
    <>
      <style>{style}</style> {/* Add the CSS style */}
      <div className="video-container">

      </div>
    </>
  );
}

export default Domain;
