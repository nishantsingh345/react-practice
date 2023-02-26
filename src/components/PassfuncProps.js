import React from "react";

const PassfuncProps = (props) => {
  return (
    <div>
      <h1>Pass Function As Props</h1>
      <button
        onClick={() => {
          props.data();
        }}
      >
        call my data
      </button>
    </div>
  );
};

export default PassfuncProps;
