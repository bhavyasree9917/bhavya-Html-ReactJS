import { Component } from "react";

export default class Sree extends Component{
    render(){
        return<div>
            <ul>
                <li>{this.props.name}</li>
                <li>{this.props.lnmae}</li>
                <li>{this.props.age}</li>
                 <li>{this.props.all.address.street}</li>
                <li>{this.props.all.address.door}</li>
                <li>{this.props.all.address.district}</li> 
            </ul>
        </div>
 
}
}