import { Component } from "react";

export default class Counter extends Component {
    constructor() {
        super()
        this.state = {
            count: 10
        }
    }
    increment = () => {
        this.setState({ count: this.state.count + 1 })
    }
    render() {
        return <div>
            <h1>{this.state.count}</h1>
            <button onClick={this.increment}>increase the value</button>
        </div>
    }
}