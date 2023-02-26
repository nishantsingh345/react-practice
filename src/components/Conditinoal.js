import React, { useState } from "react";

const Conditinoal = () => {
  const [login, setLogin] = useState(true);

  return <div>{login ? <h1>Nishant singh</h1> : <h1>Bharat singh</h1>}</div>;

  // const [login, setLogin] = useState(false);
  // return <div>{login ? <h1>Conditinoal true</h1> : <h1>Nishant singh</h1>}</div>;
};

export default Conditinoal;
