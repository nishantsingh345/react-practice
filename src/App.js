import { React, useState } from "react";
import "./App.css";
import States from "./components/States";
import Props from "./components/Props";
import PrintInput from "./components/PrintInput";
import HideandShow from "./components/HideandShow";
import Form from "./components/Form";
import Conditinoal from "./components/Conditinoal";

function App() {
  const [name, setNmae] = useState("Nishant");

  function changename() {
    setNmae("Rajnish singh");
  }

  return (
    <div className="App">
      <Conditinoal />
      {/* <Form />
      <HideandShow />
      <States />
      <PrintInput />

      <>
        <Props
          name={name}
          email={"nishantsingh123@gmil.com"}
          other={{ address: "delhi", mobile: "000" }}
        />
        <Props
          name={"raju"}
          email={"nishantsingh123@gmil.com"}
          other={{ address: "delhi", mobile: "000" }}
        />
        <Props
          name={"bikaji"}
          email={"nishantsingh123@gmil.com"}
          other={{ address: "delhi", mobile: "000" }}
        />
        <button
          onClick={() => {
            changename();
          }}
        >
          Click Me to change the name
        </button>
      </> */}
    </div>
  );
}

export default App;
