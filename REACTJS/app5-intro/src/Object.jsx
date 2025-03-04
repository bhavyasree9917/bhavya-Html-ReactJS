import { Component } from "react";

export default class Object extends Component{
    constructor(){
        super()
    }
    Objectdetails=()=>{
        this.setState({
            person:{
                fname:"premtej",
                lname:"sriramula",
                contact:9392470961
            }
        }
    )
    }
    render(){
        return<div>
            <ul>
                <li>{this.state.person.fname}</li>
                <li>{this.state.person.contact}</li>
                <li>{this.state.person.lname}</li>
            </ul>
            <button onClick={this. Objectdetails}>changeobjectdetails</button>
        </div>
    }
}
