import { React, useState } from "react";

const States = () => {
  const [data, setData] = useState(0);

  function count() {
    return setData(data + 1);
  }
//   console.log(alert("hi"));
  return (
    <div>
      <div>Count : {data}</div>
      <button onClick={count}>Click me here</button>
    </div>
  );
};

export default States;
