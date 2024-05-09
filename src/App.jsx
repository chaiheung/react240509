function MyComponent() {
  // 최상위 컴포넌트 사용하지 않을 때 -> fragment <></> 사용
  return (
    <>
      <p>Lorem ipsum.</p>
      <p>Dignissimos, minus!</p>
    </>
  );
}

function MyComp() {
  // 최상위 컴포넌트는 1개임
  return (
    <div>
      <p>Lorem ipsum.</p>
      <p>Debitis, delectus.</p>
    </div>
  );
}

function MyTag() {
  // jsx 코드가 여러 줄일 때 ()사용
  return (
    <div>
      hello tag
      <p>Lorem ipsum.</p>
      <p>Culpa, deserunt.</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <MyTag />
      <MyComp />
      <MyComponent />
    </div>
  );
}

export default App;
