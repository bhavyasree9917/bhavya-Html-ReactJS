import { Component } from "react";

export default  class Click extends Component{
    render(){
        return(<div>
            <h1>{this.props.count}</h1>
            <button onClick={this.props.increment}></button>
            <button onClick={this.props.decrement}></button>
            <button onClick={this.props.reset}></button>
        </div>)
      
    }
}