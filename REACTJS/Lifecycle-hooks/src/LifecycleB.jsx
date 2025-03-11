import { Component } from "react";

export default class LifeCycleB extends Component {
  constructor(props) {
    super();
    this.state = {};
    console.log("constructor");
  }

  static getDerivedStateFromProps() {
    console.log(" getDerivedStateFromProps");

    return {};
  }
  shouldComponentUpdate() {
    console.log(" shouldComponentUpdate ");
    return true;
  }
  render() {
    console.log(" render ");

    return <h2>{this.props.countValue}</h2>
  }
  getSnapshotBeforeUpdate() {
    console.log(" getSnapshotBeforeUpdate ");
    return true;
    
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  
  
}
