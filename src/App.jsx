import React from "react";

function App(props) {
  // object ({}, [])
  // [] : 배열, 원소를 순서대로 저장한 객체
  const a = [6, 7, 8];
  const v1 = a[0];
  const v2 = a[1];
  const v3 = a[2];
  console.log("v1", v1);
  console.log("v2", v2);
  console.log("v3", v3);
  const [x, y, z] = a;
  console.log("x", x);
  console.log("y", y);
  console.log("z", z);

  // 연습
  const b = ["pizza", 3.14, "lunch"];
  const [x1, x2, x3] = b;
  // const x1 = b[0];
  // const x2 = b[1];
  // const x3 = b[2];
  console.log("x1", x1); // pizza
  console.log("x2", x2); // 3.14
  console.log("x3", x3); // lunch

  // 기본값 할당 가능
  const c = ["son", "lee"];
  const [a1] = c;
  console.log("a1", a1); // son

  const [b1, b2, b3] = c;
  console.log("b1", b1); // son
  console.log("b2", b2); // lee
  console.log("b3", b3); // undefined

  const [c1, c2, c3 = "kim"] = c;
  console.log("c1", c1); // son
  console.log("c2", c2); // lee
  console.log("c3", c3); // kim

  // 연습
  const d = ["name", "email", "phone"];
  const [d1, d2, d3, d4 = "city"] = d;

  console.log("d1", d1);
  console.log("d2", d2);
  console.log("d3", d3);
  console.log("d4", d4);
  return <div></div>;
}

export default App;
