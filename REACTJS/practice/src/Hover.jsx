const { Component } = require("react");
import Hoc from "./Hoc";
class Hover extends Component {
    render() {

        return <div>
            <h2>count:{this.props.count}</h2>
            <button onMouseOver={this.props.increment}>increment</button>
            <button onMouseOver={this.props.decrement}>decrement</button>
            <button onMouseOver={this.props.reset}>reset</button>
        </div>

    }

}
export default Hoc(Hover);