import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }
    render() {
      return this.state.isLoggedIn && <div>Welcome Dan</div> //mtd 4, also preferable

      // return this.state.isLoggedIn ?    // mtd 3: preferable
      //  (<div>Welcome Dan</div>) :
      //   (<div>Welcome Guest</div>)

    // let message                           //mtd 2
    // if(this.state.isLoggedIn){
    //   message = <div>Welcome Dan</div>
    // }else{
    //    message = <div>Welcome Dan</div>
    // }
    
    // return <div>{message}</div>        //mtd 1
  //   if (this.state.isLoggedIn) {
  //     return <div>Welcome Dan</div>;
  //   } else {
  //     return <div>Welcome Guest</div>;
  //   }
  // }
}

export default UserGreeting