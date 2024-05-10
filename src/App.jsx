import React from "react";

function App(props) {
  const a = {
    name: "bori",
    age: 11,
    detail: {
      race: "dog",
      type: "pomeranian",
    },
  };
  const { ...b } = a;
  b.age = 12;
  console.log("b.age", b.age); // 12
  console.log("a.age", a.age); // 11

  // 얕은 복사 (shallow copy)
  b.detail.race = "puppy";
  console.log("a.detail.race", a.detail.race); // puppy
  console.log("b.detail.race", b.detail.race); // puppy

  return <div></div>;
}

export default App;
