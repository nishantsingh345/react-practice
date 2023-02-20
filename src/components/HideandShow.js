import React, { useState } from "react";

const HideandShow = () => {
  const [staus, setStaus] = useState(true);

  return (
    <div>
      {staus ? <h1>this is hide and show time !</h1> : ""}

      {/* <button
        onClick={() => {
          setStaus(false);
        }}
      >
        Hide
      </button>
      <button
        onClick={() => {
          setStaus(true);
        }}
      >
        Show
      </button> */}

      <button
        onClick={() => {
          setStaus(!staus);
        }}
      >
        Toggle
      </button>
    </div>
  );
};

export default HideandShow;
