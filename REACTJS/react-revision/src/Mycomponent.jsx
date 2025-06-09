import React from 'react';

class MyComponent extends React.Component {
  componentDidMount() {
    console.log('componentDidMount runs once after render');
  }

  render() {
    return <h1>Hello, world</h1>;
  }
}

export default MyComponent;
