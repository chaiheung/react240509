import React from "react";

function MyComp({ name, age, children }) {
  console.log(name);
  console.log(age);
  console.log(children);
  return (
    <div>
      <div>name : {name}</div>
      <div>age : {age}</div>
      <div>children : {children}</div>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <MyComp name={"son"} age={33}>
        {/* content 는 children prop */}
        <p>Lorem ipsum dolor.</p>
      </MyComp>
      <MyComp name={"lee"} age={22}>
        <ul>
          <li>Lorem.</li>
          <li>Repellat?</li>
        </ul>
      </MyComp>
    </div>
  );
}

export default App;
