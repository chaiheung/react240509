function App() {
  // {} 사용하여 js 코드 작성 가능
  const v1 = 5;
  const v2 = 3;

  function someAction() {
    return "흥민";
  }
  function someAction2(p) {
    return p * p;
  }
  return (
    <>
      {/* 연산 가능 */}
      <p>
        {2}+{3}={2 + 3}
      </p>
      <p>
        {v1}+{v2}={v1 + v2}
      </p>
      <p>
        {v1}-{v2}={v1 - v2}
      </p>
      <p>
        {v1}x{v2}={v1 * v2}
      </p>
      <p>
        {v1}/{v2}={v1 / v2}
      </p>
      {/* 함수 */}
      <p>{someAction()}</p>
      <p>{someAction2(5)}</p>
      {/*  삼항 연산자 */}
      <p>{v1 < 10 ? "작다" : "크다"}</p>
      <p>{v1 > 3 ? "크다" : "작다"}</p>
    </>
  );
}

export default App;
