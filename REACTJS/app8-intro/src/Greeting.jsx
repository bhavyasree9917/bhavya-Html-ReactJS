import { Component } from "react";
import Greetprop from "./Greetprop";

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
            <Greetprop all={this.state.person.name}/>
        </div>
    }
}