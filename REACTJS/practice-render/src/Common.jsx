import { Component } from "react";

export default class Common extends Component {
    constructor() {
        super()
        this.state = {
            count: 10
        }
    }
    increment = () => {
        this.setState({ count: this.state.count + 10 })
    }
    decrement = () => {
        this.setState({ count: this.state.count - 10 })

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