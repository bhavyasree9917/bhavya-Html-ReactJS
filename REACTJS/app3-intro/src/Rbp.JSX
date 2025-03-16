import { Component } from "react";
import Sree from "./Sree";

class Rbp extends Component{
    constructor(){
        super()
        this.state={
            fnmae:"sree",
            lname:"sriramula",
            age:20
        }    
    }
    render(){
       return<div>
        <Sree all={this.state}/>  
       </div>
    }
}
export default Rbp;