import { Component } from "react";

export default class Timer extends Component {
    constructor() {
        super()
        this.state = {
            seconds: 0,
            intervalId: null
        }
    }
    componentDidMount = () => {
        this.state.intervalId = setInterval(() => {
            this.setState({
                seconds: this.state.seconds + 1
            })
        }, 1000)
    }
    componentWillUnmount = () => {
        clearInterval(this.state.intervalId)
    }
    render() {
        return <div>
            <h1>timer{this.state.seconds}</h1>
        </div>
    }
}