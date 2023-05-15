import React from "react";
import connection_image from '../HomeCards/images/connections_image.png';

const style = `
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; /* Added flex-direction */
  height: 100vh;
}

.image-container a {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: black;
}

.image-container a img {
  max-width: 100%;
  max-height: 100%;
}

.image-container h2 {
  margin-top: 5%;
  color: white;
}
`;

function Connection() {
  return (
    <>
      <style>{style}</style>
      <div className="image-container">
        <a href="https://clipchamp.com/watch/xTTNclB39dh">
          <img src={connection_image} alt="Connection" />
        </a>
        <a href="/controlcode">
          <h2>See code here</h2>
        </a>
      </div>
    </>
  );
}

export default Connection;
