import React, { useEffect, useState } from "react";

function MyComp() {
  // 특정 순간에 실행되는 메소드를 파라미터로 받음
  // 특정 순간 :
  // 예) initial render(mount), re-render,
  // 컴포넌트가 트리에서 떨어질 때(unmount), state가 바뀔 때

  // 첫번째 파라미터 : 실행되는 메소드
  // 두번째 파라미터 : dependency(실행 순간)

  // 두번째 파라미터 없으면 rendering 될 때마다 실행
  useEffect(() => {
    console.log("useEffect");
  });

  // 두번째 파라미터에 빈 배열을 넣으면 initial rendering 때만 실행됨
  useEffect(() => {
    console.log("첫 렌더링 때 실행");
  }, []);

  // 첫번째 파라미터의 리턴은 unmount 될 때 실행
  useEffect(() => {
    return () => {
      console.log("언마운트 될 때 실행");
    };
  }, []);

  const [count, setCount] = useState(0);
  return (
    <div>
      hello comp
      <button onClick={() => setCount(count + 1)}>CLICK</button>
    </div>
  );
}

function App(props) {
  const [show, setShow] = useState(true);
  return (
    <div>
      <input
        type="checkbox"
        checked={show}
        onChange={(e) => setShow(e.target.checked)}
      />
      {show && <MyComp />}
    </div>
  );
}

export default App;
