import { Component } from "react";
import Greeprop from "./Greeprop";

export default class Greeting extends Component{
    constructor(){
        super()
        this.state={
            person:{
                name:"pspk"
            }
        }
    }
    render(){
        return<div>
            <Greeprop all={this.state.person.name}/>
        </div>
    }
}