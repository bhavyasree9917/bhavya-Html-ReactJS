import React, { Component } from "react";
export default class Profile1 extends Component{
    constructor(){
        super()
    }
    render(){
      return<div>
        <h1>{this.props.name}</h1>
        <h1>{this.props.age}</h1>
      </div>

    }
}