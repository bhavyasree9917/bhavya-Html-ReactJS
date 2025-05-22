import { Component } from "react";

export default class Toggle extends Component {
    constructor() {
        super()
        this.state = {
            ison: false
        }
    }

    handletoggle = () => {
        this.setState({
            ison: !this.state.ison
        })
    }
    render() {
        return <div>
            <h2>{this.state.ison ? "on" : "off"}</h2>
            <button onClick={this.handletoggle}>handletoggle</button>
        </div>
    }
}