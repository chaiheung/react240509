import React from "react";

function App(props) {
  // function : 함수
  // 1. 이름 있는 함수
  function action1(param, param2) {
    // 명령문들...
    return 1;
  }

  // 2. 이름 없는 함수
  const v = function (param, param2) {
    return 2;
  };

  // 3. 화살표 함수 (arrow function)

  // 3-1. 파라미터가 여러 개, 명령문이 여러 개인 경우
  const a = (param1, param2, param3) => {
    // 명령문1
    // 명령문2
  };
  // 함수 실행
  action1(null, null);
  v(null, null);
  a(null, null), null;

  // 3-2. 파라미터가 없고, 명령문이 여러 개인 경우
  const b = () => {
    // 명령문3
  };

  // 3-3. 파라미터가 한 개, 명령문이 여러 개인 경우
  // 파라미터가 한 개일 때 () 생략 가능
  const c = (param1) => {
    // 명령문4
  };

  // 3-4. 명령문이 하나일 때
  const d = () => {
    console.log("명령문이 하나인 arrow function");
  };
  const e = () => console.log("{} 생략 가능");

  // f와 g는 같은 기능
  const f = () => "{} 생략 시 값이 리턴됨";
  const g = () => {
    return "{} 생략 시 값이 리턴됨";
  };

  return <div></div>;
}

export default App;
