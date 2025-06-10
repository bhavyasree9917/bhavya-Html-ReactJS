import React, { Component } from 'react';

class Counter7 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
    };
    render() {
        return (
            <div>
                <h2>Counter App</h2>
                <p>Count: {this.state.count}</p>
                <button onClick={this.handleIncrement}>Increment</button>
            </div>
        );
    }
}

export default Counter7;
