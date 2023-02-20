import React from "react";

const Props = (props) => {
  return (
    <div style={{ backgroundColor: "skyblue", color: "blue" }}>
      <h1>Name :- {props.name} </h1>
      <p>Email :- {props.email} </p>
      <p>Address :- {props.other.address}</p>
      <p>Mobile :- {props.other.mobile}</p>
    </div>
  );
};

export default Props;
