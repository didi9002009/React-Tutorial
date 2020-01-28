import React from "react";
// import Person from "./Person";

function NameList() {
  const names = ["Dan", "Jim", "Kim", "Dan"];
  // const persons = [
  //   {
  //     id: 1,
  //     name: "Dan",
  //     age: 30,
  //     skill: "React"
  //   },
  //   {
  //     id: 2,
  //     name: "Jim",
  //     age: 25,
  //     skill: "Vue"
  //   },
  //   {
  //     id: 3,
  //     name: "Kim",
  //     age: 33,
  //     skill: "Angular"
  //   }
  // ];
  const nameList = names.map((name, index) => (
    <h2 key={index}>
      {index} {name}
    </h2>
  ));
  return <div>{nameList}</div>;
}

export default NameList;
