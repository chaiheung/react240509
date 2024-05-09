// built in component : html 의 기본 요소
// component : 직접 만든 요소(태그), 대문자로 시작
// component 는 return 을 가진 함수
function MyComponent() {
  // return : 화면에 출력할 코드 작성
  // jsx; javascript xml
  return <div>hello component :)</div>;
}
function MyComponent2() {
  // JSX 코드 : <div></div>
  const myElem = <h1>hi JSX</h1>;
  return myElem;
}

function App() {
  // component 사용 시 종료 태그 생략 불가능
  // br 같은 빈 요소는 시작태그에서 꼭 종료
  return (
    <>
      <div>
        {/* jsx 내에서의 주석 */}
        {/* ctrl + / */}
        <h1>
          hello
          <br />
          react
        </h1>
        <h2>Hello!!!</h2>
        <h3>hello!!</h3>
        <h4>hi!</h4>
        <MyComponent />
        <MyComponent2 />
      </div>
    </>
  );
}

export default App;
