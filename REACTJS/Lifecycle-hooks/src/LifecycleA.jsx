import { Component } from "react";
import LifecycleB from "./LifecycleB";


export default class LifecycleA extends Component {
  constructor(props) {
    super();
    console.log("I am from constructor, 1st stage of mounting phase");
    this.state={
        count:10,
    }
  }
  static getDerivedStateFromProps(Props, State) {
    console.log("I am from getDerivedStateFromProps, 2nd stage of mounting phase");
    return null
  }
  changeCount=()=>{
    this.setState({count:this.state.count+1})
  }
  render() {
    console.log("iam from render,3rd phase of mounting phase")
    return <div>
        <h2>Welcome to lifecycle hooks</h2>
        <button onClick={this.changeCount}>Change Count</button>
        <LifecycleB countValue={this.state.count} />
    </div>
  }
  componentDidMount(){
    console.log("iam from componentdidmount ,4th stage of mounting phase")
  }
}
