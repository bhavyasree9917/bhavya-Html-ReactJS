import { Component } from "react";
import Hoc from "./Hoc";

class Clickcount extends Component {
    render() {
        return <div>
            <h1>count:{this.props.count}</h1>
            <button onClick={this.props.increment}>increment</button>
            <button onClick={this.props.decrement}>decrement</button>
            <button onClick={this.props.reset}>reset</button>
        </div>
    }
}
export default Hoc(Clickcount)