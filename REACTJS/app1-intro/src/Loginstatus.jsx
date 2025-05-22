import { Component } from "react";

export default class Loginstatus extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isloggin: false
        }
    }
    togglelogin = () => {
        this.setState({
            isloggin: !this.state.isloggin
        })
    }
    render() {
        return <div>
            <h1>{this.state.isloggin ? "welcome back" : "loggin"}</h1>
            <button onClick={this.toggleloggin}>
                {this.state.isloggin ? "login" : "logout"}
            </button>
        </div>
    }
}