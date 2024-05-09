function App() {
  const a = 7;
  const b = 3;

  // &&(and) : 양변이 모두 true 일 때만 결과가 true
  const c = a > 10 && b > 0; // false
  const d = a < 10 && b > 0; // true
  console.log("c", c);
  console.log("d", d);

  // ||(or) : 양변이 모두 false 일 때만 결과가 false
  const e = a > 10 || b > 0; // true
  const f = a < 5 || b > 10; // false
  console.log("e", e);
  console.log("f", f);

  // && (and; ~하면) : 왼쪽 항이 true 이면 오른쪽 값
  const g = a < 10 && "hello"; // hello
  const h = a < 5 && "hi"; // false
  console.log("g", g);
  console.log("h", h);

  // ||(or; ~하지 않으면) : 왼쪽 항이 false 이면 오른쪽 값
  const i = a < 10 || "goodbye"; // true
  const j = a < 5 || "bye"; // bye
  console.log("i", i);
  console.log("j", j);

  return (
    <>
      <div></div>
    </>
  );
}

export default App;
