import { Component } from "react"
import Click from "./Click"
const Hoc = (Click) => {
    class Br extends Component {
        constructor() {
            super()
            this.state = {
                count: 10
            }
        }
        increment = () => {
            this.setstate = ({ count: this.state.count + 10 })

        }
        decrement = () => {
            this.setstate = ({ count: this.state.count - 10 })

        }
        reset = () => {
            this.setstate = ({ count: 0 })

        }
        render() {
            return <div>
                <Click count={this.state.count}
                    increment={this.increment}
                    decrement={this.decrement}
                    reset={this.reset} />
            </div>
        }

    }
    return Br;
}
export default Hoc;