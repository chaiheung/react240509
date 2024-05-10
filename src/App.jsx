import React from "react";

function MyComp({ name, age, team = "무소속" }) {
  return (
    <div>
      <ul>
        <li>{name}</li>
        <li>{age}</li>
        <li>{team}</li>
      </ul>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <MyComp name="hm" age={33} team="tot" />
      <MyComp name="ki" age={24} team="psg" />
      <MyComp name="js" age={42} />
    </div>
  );
}

export default App;
