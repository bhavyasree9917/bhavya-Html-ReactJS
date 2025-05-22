import { Component } from "react";

export default class Usercard extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return<div>
            <h1>{this.props.name}</h1>
            <h1>{this.props.role}</h1>
        </div>
    }
}
Usercard.defaultProps={
    role:"guest"
}