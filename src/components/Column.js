import React from "react";

function Table() {
  //decontrust the prop
  return (
    <React.Fragment>
      <h2>
        I am {person.name}. I am {person.age} years old. I know {person.skill}
      </h2>
    </React.Fragment>
  );
}

export default Table;
