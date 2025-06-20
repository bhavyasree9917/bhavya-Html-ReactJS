import { Component } from "react";

export default class Child4 extends Component {
    render() {
        return <div>
            <h1>count:{this.props.count}</h1>
            <button onMouseOver={this.props.increment}>increment</button>
            <button onMouseOver={this.props.decrement}>decrememnt</button>
            <button onMouseOver={this.props.reset}>reset</button>
        </div>
    }
}