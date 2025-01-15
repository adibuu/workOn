import { useState } from "react";

import "./App.css";
import Images from "./Images";
import Description from "./Description";

const descriptions = {
  1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel purus imperdiet, commodo enim non, ultrices est. Mauris justo ex, lobortis accumsan tincidunt in, fringilla in elit. Etiam nec ante erat. Duis at blandit nisi. Cras a tempor lectus. Sed porta, erat at sodales aliquam, diam nisi auctor leo, non rutrum quam quam vel justo. Donec vel fringilla risus. Proin iaculis elit vel lorem tempor tempus. Donec sed augue erat. Pellentesque id tellus sed nisl interdum posuere a sit amet diam. Nam purus risus, tempor ut odio et, molestie fringilla ligula. Praesent ac venenatis massa. Proin a laoreet libero. Donec bibendum tincidunt ex vitae pellentesque.",
  2: "Morbi vel diam eu velit sodales ornare eget ut massa. Proin massa arcu, pretium vel lobortis eget, hendrerit eu massa. Nulla sit amet elit leo. Nulla condimentum porttitor lorem lobortis porttitor. Nunc dapibus ipsum nec mi tempor, et ultrices nisl tempor. Vivamus mattis vitae enim eu efficitur. Ut quis quam varius, vulputate mauris vel, mattis leo. Praesent bibendum ante erat, eu bibendum sem cursus sit amet. Donec sagittis orci vel nisi malesuada, ut venenatis lacus iaculis. Vivamus ex arcu, vestibulum vel tristique in, sollicitudin nec sapien. Pellentesque viverra semper finibus. Morbi vitae gravida diam, non bibendum lectus. Curabitur euismod facilisis nisi, quis molestie arcu facilisis quis. Sed nec elit eget orci aliquam lacinia pellentesque ut metus.",
  3: "Morbi semper id purus at pellentesque. Donec at felis odio. Duis consectetur sodales ex, nec volutpat tortor porta in. Proin rutrum nulla eget nibh auctor, sit amet vestibulum tellus vulputate. Morbi aliquet felis in lacus dignissim, aliquet elementum elit pellentesque. Aliquam hendrerit urna in velit mollis pulvinar. Donec ultrices, tellus quis malesuada egestas, sapien tellus rhoncus mauris, quis tincidunt ante leo a neque. Vivamus lobortis leo eu orci tincidunt faucibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
};

const secondDescriptionInformations = [
  {
    title: "Title 1",
    content: "Title 1 content",
  },
  {
    title: "Title 2",
    content: "Title 2 content",
  },
];

function App() {
  const [selectedDescription, setSelectedDescription] = useState();

  const handleClick = (descritpionNumber) => {
    setSelectedDescription(descritpionNumber);

    console.log("Description number: " + descritpionNumber + " was clicked!");
  };

  return (
    <>
      <Images />
      <h1>Vite + React</h1>
      <div className="buttons">
        <button
          className={selectedDescription === 1 ? "active" : ""}
          onClick={() => handleClick(1)}
        >
          Description 1
        </button>
        <button
          className={selectedDescription === 2 ? "active" : ""}
          onClick={() => handleClick(2)}
        >
          Description 2
        </button>
        <button
          className={selectedDescription === 3 ? "active" : ""}
          onClick={() => handleClick(3)}
        >
          Description 3
        </button>
      </div>
      <div className="card">
        {selectedDescription ? (
          <Description>{descriptions[selectedDescription]}</Description>
        ) : (
          <p>Please select description</p>
        )}

        {selectedDescription === 2 &&
          secondDescriptionInformations.map((information) => (
            <div key={information.title}>
              <h3>{information.title}</h3>
              <p>{information.content}</p>
            </div>
          ))}
      </div>
    </>
  );
}

export default App;
