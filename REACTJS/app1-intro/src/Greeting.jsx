import { Component } from "react";
import Greetingprop from "./Greetingprop";

export default class Greeting extends Component{
    constructor(){
        super()
        this.state={
            person:{
                name:"sriramula bhavyasree"
            }
        }
    }
    render(){
        return<div>
            <h1>{this.state.person.name}</h1>
            <Greetingprop all={this.state.person.name}/>
        </div>
        
    }
}