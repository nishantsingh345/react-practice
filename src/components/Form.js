import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [intrest, setIntrest] = useState("");
  const [tnc, setTnc] = useState(false);

  function getformdata(e) {
    console.log(name, intrest, tnc);
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={getformdata}>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <br />
        <select
          onChange={(e) => {
            setIntrest(e.target.value);
          }}
        >
          <option>DC</option>
          <option>Marvel</option>
          <option>lucy</option>
        </select>
        <br />
        <br />
        <input
          type="checkbox"
          onChange={(e) => {
            setTnc(e.target.checked);
          }}
        />{" "}
        <span>check terms and condition</span>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
