import React from "react";

function App(props) {
  // JSON ( JavaScript Object Notation )
  // JS의 객체 작성법을 빌린 문자열 형식의 데이터

  // JSON 데이터 타입
  // 문자열, 수, 객체, 배열, 논리, null
  // property 명은 큰 따옴표로 묶음

  // 직렬화(stringify, encode) : 객체 -> JSON(문자열)
  const obj1 = { name: "son", age: 33 };
  const json1 = `{ "name": "son", "age": 33 }`;

  const obj2 = { name: "lee", age: 22 };
  const json2 = JSON.stringify(obj2); // 직렬화
  console.log("obj2", obj2);
  console.log("json2", json2);

  // 역직렬화(parse, decode) : JSON(문자열) -> 객체
  return <div></div>;
}

export default App;
