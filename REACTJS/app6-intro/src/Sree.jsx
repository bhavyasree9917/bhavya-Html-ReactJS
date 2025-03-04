import { Component } from "react";
import { Ram } from "./Ram";

export default class sree extends Component{
    constructor(){
        super()
        this.state={
            id:1,
            name:"sriramula bhavyasree",
            usernmae:"bhavya",
            address:{
                street:"puthalapattu",
                suite:"apt.556",
                city:"chittoor",
                zipcode:9678544,
             
            }
        }
    }
    render(){
        return<div>
            <h1>{this.state.id}</h1>
            <h1>{this.state.name}</h1>
            <h1>{this.state.usernmae}</h1>
            <h1>{this.state.address.street}</h1>
            <h1>{this.state.address.suite}</h1>
            <h1>{this.state.address.city}</h1>
            <h1>{this.state.address.zipcode}</h1>
            <Ram all={this.state}/>
        </div>
    }
   





























    
}
