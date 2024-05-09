import React from "react";

function App(props) {
  const a = {
    name: "hm",
    team: "tot",
    backno: 7,
  };
  return (
    <div>
      {a.name} 은 {a.team} 소속으로 등번호는 {a.backno}번이다.
    </div>
  );
}

export default App;
