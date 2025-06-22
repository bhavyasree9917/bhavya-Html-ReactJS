import { Component } from "react";

export default class Counter2 extends Component {
    constructor() {
        super()
        this.state = {
            count: 90
        }
    }
    increment = () => {
        this.setState({ count: this.state.count + 10 })
    }
    render() {
        return <div>
            <h1>count:{this.state.count}</h1>
            <button onMouseOver={ this.increment}>increment</button>
        </div>
    }
}