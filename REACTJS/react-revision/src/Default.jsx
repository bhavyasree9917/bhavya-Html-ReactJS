import { Component } from "react";

class Default extends  Component {
  render() {
    return <h1> {this.props.name}</h1>;
  }
}

Default.defaultProps = {
  name: 'Guest'
};
export default Default
