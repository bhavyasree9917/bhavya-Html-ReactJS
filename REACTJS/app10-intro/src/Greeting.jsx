import { Component } from "react";
import Hello from "./Hello";

export default class Greeting extends Component{
    constructor(){
        super()
        this.state={
            person:{
                name:"ram"
            }
        }
    }
    render(){
        return<div>
            <Hello all={this.state.person.name}/>
        </div>
    }
}