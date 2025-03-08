import { Component } from "react";

export default class User2 extends Component{
    constructor(){
        super()
        this.state={
           fname:"sree",
           lname:"bhavyasree",
           email:"bhavyasre9917@gmail.com"
        },
        User=[

        ],
        editindex=null;

    };
    render(){
        return<div>
            <label htmlFor="">first name:</label>
            <input
             type="text"
             nmae="fname"
             id=""
             value={this.state.fname}
             onchange={this.handlechange} />
        </div>
    }
}