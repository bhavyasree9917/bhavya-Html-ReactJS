import { Component } from "react";
import Hoc from "./Hoc";

class Hovercounter extends Component {
    render() {
        return <div>
            <h1>count:{this.props.count}</h1>
            <button onMouseOver={this.props.increment}>increment</button >
            <button onMouseOver={this.props.decrement}>decrement</button>
            <button onMouseOver={this.props.reset}>reset</button>
        </div>
          
    }
}
export default Hoc( Hovercounter);