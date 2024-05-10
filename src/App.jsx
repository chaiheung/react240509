import React from "react";

function MyComp({ name, age, someProp, otherProp }) {
  console.log(name);
  console.log(age);
  console.log(someProp); // true
  console.log(otherProp); // 값이 없이 이름만 작성되면 true
  return <div></div>;
}

function App(props) {
  return (
    <div>
      <MyComp name="son" age={30} someProp={true} otherProp></MyComp>
    </div>
  );
}

export default App;
