import { Component } from "react";
import Teja from "./Teja";

export default class Prem extends Component{
    constructor(){
        super()
        this.state={
            name:"premkumar",
            lname:"sriramula",
            age:23,
            mother:"lakshmi",
            address:{
                street:"puthlapattu",
                pincode:517124
            }
        }
        changename=()=>{
            this.setState({name:"ram",lname:"bhavyasree",mother:"anjana",age:23})
        }
    }
    render(){
        return<div>
            <ul>
            <button onClick={this.changename}>change name</button>
                <li>{this.state.name}</li>
                <li>{this.state.lname}</li>
                <li>{this.state.age}</li>
                <li>{this.state.address.street}</li>
                <li>{this.state.address.pincode}</li>
                <li>{this.state.mother}</li>
                <Teja all={this.state}/>
            </ul>
        </div>
    }
}