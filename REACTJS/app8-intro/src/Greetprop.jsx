import { Component } from "react";

export default class Greetprop extends Component{
    render(){
        return<div>
           <p>{this.props.all}</p> 
        </div>
    }
}