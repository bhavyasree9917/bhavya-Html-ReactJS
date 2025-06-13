import React, { Component } from 'react';

class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'bhavyasree',
            age: 21
        };
    }

    updateName = () => {
        this.setState({ name: 'rampotheneni' });
    };

    updateAge = () => {
        this.setState({ age: 22});
    };

    render() {
        return (
            <div>
                <h2>User Info</h2>
                <p>Name: {this.state.name}</p>
                <p>Age: {this.state.age}</p>
                <button onClick={this.updateName}>name change</button>
                <button onClick={this.updateAge}>age </button>
            </div>
        );
    }
}

export default UserInfo;
