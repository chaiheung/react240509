function App() {
  // &&, ||
  // falsy (false 같은)
  // : false, 0, "", null, undefined

  const a = NaN;
  if (a) {
    console.log("a는 참");
  } else {
    console.log("a는 거짓");
  }

  // truthy (true 같은) : falsy 가 아닌 경우 전부
  // &&, || 와 조합

  let b = 0;
  let c = b && "값이 있음";
  console.log("c", c); // 0

  let d = b || "값이 없음";
  console.log("d", d); // "값이 없음"

  return (
    <>
      <div></div>
    </>
  );
}

export default App;
