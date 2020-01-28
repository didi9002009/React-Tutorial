import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Dan"
    }
    console.log('LifecycleA constructor')}
  }
    
 static getDerivedStateFromProps(props, state){
    console.log('LifecycleA getDerivedStateFromProps');
    return null;
  }

  ComponentDidMount(){
  console.log('LifecycleA ComponentDidMount')
  }
  
  shouldComponentUpdate(){
  console.log('LifecycleA shouldComponentUpdate')
  return true
}
getSnapshotBeforeUpdate(){
  console.log('LifecycleA getSnapshotBeforeUpdate')  
  return null
}
ComponentDidUpdate(){
  console.log('LifecycleA ComponentDidUpdate')
}

changeState = () => {
  this.setState({
    name:'Jim'
  })
}
  render() {
  console.log('ifecycleA render')
    return(
      <div> Lifecycle A</div>
      <button onClick={this.changeState}>Change State</button>
      <LifecycleB />    
      )   
  }
}

export default LifecycleA;
