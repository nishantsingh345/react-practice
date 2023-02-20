import React, { useState } from "react";

const PrintInput = () => {
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);

  function getdata(val) {
    console.log(val.target.value);
    setData(val.target.value);
    setPrint(false);
  }

  return (
    <div>
      {print ? <p>{data}</p> : null}
      <input type="text" onChange={getdata} />
      <button onClick={() => setPrint(true)}>print data by click</button>
    </div>
  );
};

export default PrintInput;
