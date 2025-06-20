import { Component } from "react";
import Hoc from "./Hoc";

class Clickcount extends Component {
    render() {
        const { count, increment, decrement, reset } = this.props
        return <div>
            <h1>count:{count}</h1>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
        </div>
    }
}
export default Hoc(Clickcount)