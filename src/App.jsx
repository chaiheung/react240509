import React from "react";

function App(props) {
  const a = {};
  console.log("a", typeof a);

  const b = []; // array object
  console.log("b", typeof b);

  // 배열(array) : 여러 값을 순서(index)대로 가지고 있는 객체

  const c = ["son", "lee", "kim", "hwang"];
  console.log("c", c); // 전체 출력
  console.log("c의 0번 index", c[0]);
  console.log("c의 1번 index", c[1]);
  console.log("c의 2번 index", c[2]);
  console.log("c의 3번 index", c[3]);
  console.log("c의 4번 index", c[4]); // undefined

  return (
    <div>
      <ul>
        <li>{c[0]}</li>
        <li>{c[1]}</li>
        <li>{c[2]}</li>
        <li>{c[3]}</li>
      </ul>
    </div>
  );
}

export default App;
