import { Component } from "react";
import Child from "./Child";

export default class extends Component {
    constructor() {
        super()
        this.state = {
            name: "sony",
            lname: "venkatagiri",
            age: 14,
            mother: "nasirun",
            father: "mohan",
            address: {
                street: "tirupathi",
                door: 4 - 17,
                district: "tirupathi"
            }
        }
    }
    render() {
        return<ul>
            <li>
                {this.state.name}
            </li>
            <li>{this.state.lname}</li>
            <li>{this.state.age}</li>
            <li>{this.state.mother}</li>
            <li>{this.state.father}</li>
            <li>{this.state.address.street}</li>
            <li>{this.state.address.door}</li>
            <li>{this.state.address.district}</li>
            <Child all={this.state}/>
        </ul>

    }
}