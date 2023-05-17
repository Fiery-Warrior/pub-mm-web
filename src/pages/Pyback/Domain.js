import React from "react";
import domain from '../HomeCards/images/domain.png';

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

function Domain() {
  return (
    <>
      <style>{style}</style>
      <div className="image-container">
        <a href="https://youtu.be/T_b1OSVHGWw">
          <img src={domain} alt="ip" />
        </a>
      </div>
    </>
  );
}

export default Domain;
