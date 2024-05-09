import React from "react";

function App(props) {
  // string
  const s1 = "some string";
  const s2 = "other string";
  const s3 = "I'm bori";
  const s4 = 'your name is "bori"';

  // backtick
  // template literal
  const s5 = `another string`;

  const name = "son";
  const age = 16;

  const s6 = name + " is " + age * 2 + " years old.";
  const s7 = `${name} is ${age * 2} years old.`;

  return (
    <div>
      <p>{s6}</p>
      <p>{s7}</p>
    </div>
  );
}

export default App;
