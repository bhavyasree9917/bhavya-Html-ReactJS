import { Component } from "react";
import Clickcount from "./Clickcount";

const Hoc = (Clickcount) => {
    class Hoc extends Component {
        constructor() {
            super()
            this.state = {
                count: 0
            }
            increment = () => {
                this.setState({ count: this.state.count + 1 })
            }
            decrement = () => {
                this.setState({ count: this.state.count - 1 })
            }
            reset = () => {
                this.setState({ count: 0 })
            }
        }
        render() {
            return <div>
                <Clickcount count={this.state.count}
                    increment={this.increment}
                    decrement={this.decrement}
                    reset={this.reset} />
            </div>
        }
    }

}
export default Hoc;