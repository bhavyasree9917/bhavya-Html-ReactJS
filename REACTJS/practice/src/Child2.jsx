import { Component } from "react";

export default class Child2 extends Component{
    render(){
        return<div>
            <h2>count:{this.props.count}</h2>
            <button onMouseOver={this.props.increment}>increment</button>
            <button onMouseOver={this.props.decrement}>decrement</button>
            <button onMouseOver={this.props.reset}>reset</button>
        </div>
    }
}