import { Component } from "react";

export default class UserCard extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <div>
            <h1>name:{this.props.name}</h1>
            <h1>role:{this.props.role}</h1>
        </div>
    }
}
UserCard.defaultProps = {
    role: "guest"
}