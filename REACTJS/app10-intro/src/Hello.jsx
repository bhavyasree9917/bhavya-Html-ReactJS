import { Component } from "react";

export default class Hello extends Component{
render(){
    return<div>
        <p>{this.props.all}</p>
    </div>
}
}