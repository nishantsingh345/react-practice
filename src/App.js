import { React, useState } from "react";
import "./App.css";
import States from "./components/States";
import Props from "./components/Props";
import PrintInput from "./components/PrintInput";
import HideandShow from "./components/HideandShow";
import Form from "./components/Form";
import Conditinoal from "./components/Conditinoal";
import PassfuncProps from "./components/PassfuncProps";
import User from "./User";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";

function App() {
  const users = [
    { id: 1, name: "nishu", email: "nishu@.com" },
    { id: 2, name: "raju", email: "raju@.com" },
    { id: 3, name: "amish", email: "amish@.com" },
    { id: 4, name: "mahua", email: "mahua@.com" },
    { id: 5, name: "rahu", email: "rahu@.com" },
  ];

  const [name, setNmae] = useState("Nishant");

  function changename() {
    setNmae("Rajnish singh");
  }
  function aleet() {
    alert("Rajnish singh");
  }

  return (
    <div className="App">
      <Router>
        {users.map((item) => (
          <div>
            {" "}
            <Link to={"/user/" + item.id}>
              <h1> {item.name}</h1>
            </Link>
          </div>
        ))}
        {/* <Routes>
          <Route path="/user/:id">
            <User />
          </Route>
        </Routes> */}
      </Router>

      {/* <PassfuncProps data={aleet} /> */}
      {/* <Conditinoal /> */}
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
