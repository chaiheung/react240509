import React from "react";

function App(props) {
  // destructing assignment
  const person = {
    name: "bori",
    email: "bori@gmail.com",
    address: "127.0.0.1",
  };
  // 모든 프로퍼티를 할당할 필요는 없음
  const { name, email } = person;
  console.log("name", name);
  console.log("email", email);

  const car = {
    model: "genesis",
    company: "hyundai",
    price: 500,
  };
  const { model, company, color } = car;
  console.log("model", model);
  console.log("company", company);
  console.log("color", color);

  const house = {
    city: "seoul",
    country: "korea",
  };
  // 없으면 기본값 할당
  const { city, country, area = "02" } = house;
  console.log("city", city);
  console.log("country", country);
  console.log("area", area);
  return <div></div>;
}

export default App;
