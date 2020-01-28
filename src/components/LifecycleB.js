import React, { Component } from "react";

class LifecycleB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Dan"
    }
    console.log('LifecycleB constructor')
  }
}

static getDerivedStateFromProps(props, state){
  console.log('LifecycleB getDerivedStateFromProps');
  return null;
}
ComponentDidMount(){
  console.log('LifecycleB ComponentDidMount')
}

shouldComponentUpdate(){
  console.log('LifecycleB shouldComponentUpdate')
  return true
}
getSnapshotBeforeUpdate(){
  console.log('LifecycleB getSnapshotBeforeUpdate')
  return null
}
ComponentDidUpdate(){
  console.log('LifecycleB ComponentDidUpdate')
}
render() {
  console.log('ifecycleA render')
  return <div> Lifecycle A</div>
}
}

export default LifecycleB;
