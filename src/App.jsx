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

  // 깊은 복사(deep copy)
  // 얕은 복사를 여러번 사용하여 해결
  const { ...c } = a; // shallow copy
  const { ...detail1 } = a.detail; // shallow copy
  c.detail = detail1; // deep copy
  c.detail.type = "pome";
  console.log("a.detail.type", a.detail.type);
  console.log("c.detail.type", c.detail.type);

  return <div></div>;
}

export default App;
