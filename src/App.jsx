import { useState } from "react";

import "./App.css";
import Images from "./components/Images";
import Button from "./components/Button";
import Description from "./components/Description";
import descriptions from "./data/descriptions";

function App() {
  const [description, setDescription] = useState("");

  const changeDescription = (descriptionKey) => {
    setDescription(descriptionKey);
  };

  return (
    <>
      <Images />
      <h1>Vite + React</h1>
      <div className="buttons">
        <Button
          onClick={() => changeDescription("first")}
          isActive={description === "first"}
        >
          First
        </Button>
        <Button
          onClick={() => changeDescription("second")}
          isActive={description === "second"}
        >
          Second
        </Button>
        <Button
          onClick={() => changeDescription("third")}
          isActive={description === "third"}
        >
          Third
        </Button>
      </div>
      <div className="card">
        <h3>Descriptions</h3>

        {/* if(description){komponent}else{komponent <p>} */}

        {/* {description ? (
          <Description>{descriptions[description]}</Description>
        ) : (
          <p>Please select description</p>
        )} */}

        {/* if(description){komponent} */}
        {description && <Description>{descriptions[description]}</Description>}
        {/* if(!description){<p>} */}
        {!description && <p>Please select description</p>}
      </div>
    </>
  );
}

export default App;
