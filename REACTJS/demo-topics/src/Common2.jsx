import { Component } from "react";

export default class Common2 extends Component {
    constructor() {
        super()
        this.state = {
            count: 45
        }
    }
    increment = () => {
        this.setState({ count: this.state.count + 15 })
    }
    decrement = () => {
        this.setState({ count: this.setState.count - 15 })
    }
    reset = () => {
        this.setState({ count: 0 })
    }
    render() {
        return <div>
            {this.props.render(this.state.count, this.increment, this.decrement, this.reset)}
        </div>
    }
}