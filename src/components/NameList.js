import React from "react";
import Person from "./Person";

function NameList() {
  const persons = [
    {
      id: 1,
      name: "Dan",
      age: 30,
      skill: "React"
    },
    {
      id: 2,
      name: "Jim",
      age: 25,
      skill: "Vue"
    },
    {
      id: 3,
      name: "Kim",
      age: 33,
      skill: "Angular"
    }
  ];
  const personList = persons.map(person => <Person person={person} />); //person as a para passed as a prop to the Person compo
  return <div>{personList}</div>;

  //   <h2>
  //     I am {person.name}. I am {person.age} years old. I know {person.skill}
  //   </h2>
  // ));
  // return <div>{personList}</div>;

  // const names = ['Dan'. 'Jim', 'Kim']
  // const nameList = names.map(name => (<h2>{name}</h2>));
  // return <div>{nameList}</div>;
}

export default NameList;
