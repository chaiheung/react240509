import React, { useState } from "react";

function App(props) {
  const [age, setAge] = useState(0);
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [team, setTeam] = useState("");
  return (
    <div>
      <div>
        <input
          type="text"
          onChange={(e) => setAge(e.target.value)}
          placeholder={"나이"}
        />
      </div>
      <div>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder={"이름"}
        />
      </div>
      <div>
        <input
          type="text"
          onChange={(e) => setCountry(e.target.value)}
          placeholder={"국가"}
        />
      </div>
      <div>
        <input
          type="text"
          onChange={(e) => setTeam(e.target.value)}
          placeholder={"구단"}
        />
      </div>
      <div>
        {age}-year-old {name} from {country} plays for {team}.
      </div>
    </div>
  );
}

export default App;
