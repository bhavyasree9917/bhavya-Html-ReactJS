import { Component } from "react";

export default class Child extends Component{
   render() {
    return<div>
        <ul>
            <li>{this.props.all.name}</li>
            <li>{this.props.all.lname}</li>
            <li>{this.props.all.age}</li>
            <li>{this.props.all.mother}</li>
            <li>{this.props.all.father}</li>
            <li>{this.props.all.address.street}</li>
            <li>{this.props.all.address.door}</li>
            <li>{this.props.all.address.district}</li>
        </ul>
    </div>
   }
}