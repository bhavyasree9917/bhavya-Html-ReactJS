import { Component } from "react";

export class Ram extends Component{
    render(){
       return<div>
         <h1>{this.props.id}</h1>
            <h1>{this.props.all.name}</h1>
            <h1>{this.props.all.usernmae}</h1>
            <h1>{this.props.all.address.street}</h1>
            <h1>{this.props.all.address.suite}</h1>
            <h1>{this.props.all.address.city}</h1>
            <h1>{this.props.all.address.zipcode}</h1>
       </div> 
    }
}