import React, { Component } from "react";
export default class Greeting1 extends Component{
    constructor(){
        super()

    }
    render(){
        return<div>
            <h1>{this.props.name}</h1>
        </div>
    }
}