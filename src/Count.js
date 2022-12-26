import { useState } from "react";

function Count() {
  const [count, setCount] = useState(100);

  const onCountUpBtn = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Num Count : {count}</h1>
      <button onClick={onCountUpBtn}>Count Up</button>
    </div>
  );
}

export default Count;
