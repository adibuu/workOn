/* eslint-disable react/prop-types */
import { useState } from "react";

const Description = ({ image = null, children }) => {
  const [showImage, setShowImage] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p>{children}</p>
      {image && (
        <>
          <button onClick={() => setShowImage(!showImage)}>
            {showImage ? "Hide image" : "Show image"}
          </button>
          {showImage && <img src={image} alt="Description image" />}
        </>
      )}
    </div>
  );
};

export default Description;
