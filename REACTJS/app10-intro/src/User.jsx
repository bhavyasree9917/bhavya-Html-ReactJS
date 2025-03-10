import { Component } from "react";

export default class User extends Component{
   constructor(){
    super()
    this.state={
        fnmae:"",
        lnmae:"",
        email:"",
        users:[],
        editindex:null,
    
}
   };
   render(){
    return<div>
        <form action="
        ">
            <label htmlFor="">firstname:</label>
            <input type="text" 
            nmae="fname"
            value={this.state.fnmae}
            onchange={this.handlechange}/>{""}
            <br/>
            <label htmlFor="
            ">lastname:</label>
            <input type="text" 
            nmae="lastname"
            value={this.state.lnmae}
            onchange={this.handlechange}/>{""}
            <br/>
            <label htmlFor="">email:</label>
            <input type="text"
            name="email"
            value={this.state.email}
            onchange={this.handlechange} />{""}
        </form>
    </div>
   }
  
}