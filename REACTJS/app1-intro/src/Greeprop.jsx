import { Component } from "react";

export default class Greeprop extends Component{
    render(){
        return<div>
            <p>{this.props.all}</p>
        </div>
    }
}