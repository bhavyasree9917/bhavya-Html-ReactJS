import React, { Component } from "react";
class Deafu extends Component{
    constructor(){
        super()
    }
    render(){
        return<div>
            <h1>{this.props.name}</h1>
        </div>
    }
}
Deafu.defaultProps={
name:"sree "

}
export default Deafu