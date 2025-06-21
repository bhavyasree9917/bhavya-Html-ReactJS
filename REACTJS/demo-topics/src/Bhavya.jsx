import { Component } from "react";

export default class Bhavya extends Component {
    constructor() {
        super()
        this.state = {
            user: "sree"
        }
    }
    changename = () => {
        this.setState({ user: this.state.user+"bhavya" })
    }
    render() {
        return <div>
            <h1>{this.state.user}</h1>
            <button onClick={this.changename}>namechange</button>
        </div>
    }
}