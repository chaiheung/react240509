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

  // 연습
  const d = {
    company: {
      name: "apple",
      location: "us",
    },
    name: "iphone",
    price: 300,
  };

  const { ...e } = d;
  const { ...company } = d.company;
  e.company = company; // deep copy

  e.name = "galaxy";
  e.company.name = "samsung";

  console.log("d.name", d.name); // iphone
  console.log("d.company.name", d.company.name); // apple
  console.log("e.name", e.name); // galaxy
  console.log("e.company.name", e.company.name); // samsung
  return <div></div>;
}

export default App;
