import React from "react";

const Greet = ({ name, heroName }) => {
  //1.
  // const { name, heroName } = props;  // 2. replace ({name, heroName}) with props
  return (
    <div>
      <h1>
        Hello {name} a.k.a {heroName}
      </h1>
    </div>
  );
};
export default Greet;
