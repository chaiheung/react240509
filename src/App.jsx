import React from "react";

function App(props) {
  // 이름 있는 함수
  function action1() {
    console.log("이름 있는 함수");
  }
  action1(); // 함수 실행

  // 이름 없는 함수
  const action2 = function () {
    console.log("이름 없는 함수 @@@@@");
  };
  return (
    <div>
      <button onClick={action1}>클릭!</button>
      <br />
      <button onClick={action2}>클릭@</button>
      <br />
      <button
        onClick={function () {
          console.log("이름없는 함수 #####");
        }}
      >
        클릭#
      </button>
    </div>
  );
}

export default App;
