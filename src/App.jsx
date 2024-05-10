import React from "react";

function MyComp(props) {
  return <div></div>;
}

function App(props) {
  {
    /* props 의 값 타입은 javascript 값 타입 */
  }
  {
    /* {}에 값 입력, (string은 {} 생략 가능) */
  }
  return (
    <div>
      <MyComp
        name="son"
        age={3.14}
        address={{ city: "seoul", country: "korea" }}
        food={["pizza", "coffee"]}
        married={true}
        action={function () {
          console.log("action");
        }}
        someAction={() => console.log("some action")}
      />
    </div>
  );
}

export default App;
