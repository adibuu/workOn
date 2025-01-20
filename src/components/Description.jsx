/* eslint-disable react/prop-types */
import { useState } from "react";

const Description = ({ image = null, attributes = [], children }) => {
  const [showImage, setShowImage] = useState(false);

  console.log(attributes);

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

      {attributes.length > 0 && (
        <>
          {/* {attributes.map((attribute, index) => {
            const isSecondElement = index === 1;

            return (
              <p
                key={attribute}
                style={{ color: isSecondElement ? "red" : "white" }}
              >
                {attribute}
              </p>
            );
          })} */}

          {attributes.map((attribute, index) => (
            <p key={attribute} style={{ color: index === 1 ? "red" : "white" }}>
              {attribute}
            </p>
          ))}
        </>
      )}

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
