import { Component } from "react";
import Hoc from "./Hoc";

class Hovercount extends Component {
    render() {

        const { count, increment, decrement, reset } = this.props
        return <div>
            <h1>count:{count}</h1>
            <button onMouseOver={increment}>increment</button>
            <button onMouseOver={decrement}>decrement</button>
            <button onMouseOver={reset}>reset</button>
        </div>
    }
}
export default Hoc(Hovercount)