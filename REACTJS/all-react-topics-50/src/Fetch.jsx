import React, { Component } from "react";

class Fetch extends Component {
    state = { user: null };

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users/1")
            .then(res => res.json())
            .then(data => this.setState({ user: data }));
    }

    render() {
        const { user } = this.state;
        return (
            <div>
                {user ? <h2>{user.name}</h2> : "Loading  user"}
            </div>
        );
    }
}

export default Fetch;
