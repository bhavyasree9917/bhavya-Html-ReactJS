import { Component } from "react";

export default class Class extends Component{
    constructor(){
        super()
        this.state={
            fname:"sree",
            lname:"sriramula",
            contact:9392470961
        }
    }
    changename=()=>{
        this.setState({fname:"ram"})
    }
    render(){
        return<div>
            <button onClick={this.changename}>change name</button>
            <h2>{this.state.fname}</h2>
            
        </div>
    }
}