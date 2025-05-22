import { Component } from "react";

export default class Inputfield extends Component {
    constructor() {
        super()
        this.state = {
            inputvalue: ""
        }
    }
    handlechange = (e) => {
        this.setState({ inputvalue: e.target.value })

    }
    render() {
        return <div>
            <input type="text" value={this.state.inputvalue} onChange={this.handlechange} />
            <p>inputvalue:{this.state.inputvalue}</p>
        </div>
    }
}