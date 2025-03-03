import { Component } from "react";

class Sree extends Component{
    constructor(){
        super()

    }
    render(){
        return<div>
            <h1>{this.props.all.fname}</h1>
        </div>
    }
}
export default Sree;