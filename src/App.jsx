function App() {
  // const, let 중에 사용
  const myTag = <h1>hello</h1>;
  const val1 = "hm";
  const val2 = 7;
  const val3 = true;
  const val4 = false;
  const val5 = null;
  const val6 = undefined;
  const val7 = [1, 2, 3];
  const val8 = { age: 23, name: "ki" };
  // {} : jsx 내에서 javascript 코드 사용
  return (
    <>
      <div>{myTag}</div>
      <div>{val1}</div>
      <div>{val2}</div>

      {/* boolean, null, undefined : 출력 안됨 */}
      <div>{val3}</div>
      <div>{val4}</div>
      <div>{val5}</div>
      <div>{val6}</div>

      {/* array : 그대로 출력 */}
      <div>{val7}</div>

      {/* object : 오류 */}
      {/*<div>{val8}</div>*/}
      {/* property 에 접근해서 사용 */}
      <div>{val8.name}</div>
      <div>{val8.age}</div>
    </>
  );
}

export default App;
