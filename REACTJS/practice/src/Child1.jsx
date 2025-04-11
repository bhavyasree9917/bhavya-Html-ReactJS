import { Component } from "react";

export default class Child1 extends Component{
    render(){
        return<div>
            <h2>count:{this.props.count}</h2>
            <button onClick={this.props.increment}>increment</button>
            <button onClick={this.props.decrement}>decrement</button>
            <button onClick={this.props.reset}>reset</button>
        </div>
    }
}