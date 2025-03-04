import { Component } from "react";

export default class Class extends Component{
    constructor(){
        super()
        this.state={
            fname:"sree",
            lname:"sriramula",
            contact:9392470961,
            mothername:"lakshmi",
            fathername:"ramesh"
        }
    }
    changename=()=>{
        this.setState({fname:"ram",lname:"bhavyasree",contact:9676825370,mothername:"lakshmisree",fathername:"rameshbabu"})
    }
    render(){
        return<div>
            <button onClick={this.changename}>change name</button>
            <h2>{this.state.fname}</h2>
            <h2>{this.state.lname}</h2>
            <h2>{this.state.contact}</h2>
            <h2>{this.state.mothername}</h2> 
            <h2>{this.state.fathername}</h2>
        </div>
    }
}