import { Component } from "react";

export default class Common1 extends Component {
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
            ({this.props.render(this.state.count, this.increment, this.decrement, this.reset)})
        </div>
    }
}