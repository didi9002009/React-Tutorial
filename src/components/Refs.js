import React, { Component } from "react";
import { element } from "prop-types";

class Refs extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef(); // 1.1 create ref
    this.cbRef = null; // 1.2 set it as null
    this.setCbRef = element => {
      // 2. set a DOM el to callback ref
      this.cbRef = element;
    };
  }
  componentDidMount() {
    if (this.cbRef) {
      this.cbRef.focus(); // 4. replace with new cb ref
    }
    // this.inputRef.current.focus();
    // console.log(this.inputRef);
  }
  clickHandler = () => {
    alert(this.inputRef.current.value);
  };
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <input type="text" ref={this.setCbRef} />
        <button onClick={this.clickHandler}>Click</button>
      </div> //3.attach setCbRef to input el.
    );
  }
}
export default Refs;
