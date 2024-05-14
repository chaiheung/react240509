import React, { useEffect, useState } from "react";

function App(props) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("mount 될 때");
  }, []);
  useEffect(() => {
    console.log("count 가 변경될 때");
    // dependency 가 변경되지 않도록 주의
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>클릭</button>
    </div>
  );
}

export default App;
