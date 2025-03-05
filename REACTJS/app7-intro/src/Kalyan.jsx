import { Component } from "react";
import Sree from "./Sree";

export default class Kalyan extends Component{
    constructor(){
        super()
        this.state={
            name:"bhavyasree",
            lnmae:"sriramula",
            age:21,
            contact:9392470961,
            address:{
                street:"puthlapattu",
                door:4-16,
                district:"chittoor"
            }
        }
    }
    render(){
        return<div>
            <ul>
            <li>{this.state.name}</li>
            <li>{this.state.lnmae}</li>
            <li>{this.state.age}</li>
            <li>{this.state.address.street}</li>
            <li>{this.state.address.door}</li>
            <li>{this.state.address.district}</li>
             
            <Sree all={this.state}/>
        </ul>
        </div>
    }
}
