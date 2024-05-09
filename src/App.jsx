import React from "react";

function App(props) {
  // object
  const a = {
    name: "john",
  };
  const b = a;
  console.log(a === b); // true
  console.log("a.name", a.name); // john
  console.log("b.name", b.name); // john

  b.name = "jane";
  console.log(a === b); // true
  console.log("a.name", a.name); // jane
  console.log("b.name", b.name); // jane

  return <div></div>;
}

export default App;
