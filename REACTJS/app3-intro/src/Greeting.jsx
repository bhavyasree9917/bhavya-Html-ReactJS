import { Component } from "react";
import Greetprop from "./Greetprop";

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
            <Greetprop all={this.state.person.name}/>
        </div>
    }
}