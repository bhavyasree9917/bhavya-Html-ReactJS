import { Component } from "react";

export default class Teja extends Component{
    constructor(){
        super()
        Objectdetails=()=>{
            this.setState({
                person:{
                    fname:"premtej",
                    lname:"sriramula",
                   
                }
            }
        )
        }
    }
 render(){
    return<div>
        <ul>
            <li>{this.props.all.name}</li>
            <li>{this.props.all.lname}</li>
            <li>{this.props.all.age}</li>
            <li>{this.props.all.address.street}</li>
            <li>{this.props.all.address.pincode}</li>
            <button onClick={this. Objectdetails}>changeobjectdetails</button>
        </ul>
    </div>
 }
}