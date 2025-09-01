import { Component } from "react";

export default class Child1 extends Component {
    constructor() {
        super()
    }
    render() {
        return <div>
            <h1>{this.props.count}</h1>
            <button onClick={this.props.increment}>increment count</button>
            <button onClick={this.props.decrement}>decrement count </button>
            <button onClick={this.props.reset}>reset </button>
        </div>
    }

}