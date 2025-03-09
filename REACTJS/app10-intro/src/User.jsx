import { Component } from "react";

export default class User extends Component{
    constructor(){
    super()
    this.state={
      fname:"sree",
      lname:"ram",
      email:"sree ram @gmail.com"
    }
    Users=[

    ]
    editindex=null;

    }
    render(){
        return(
            <div>
                <label htmlFor="">firstname:</label>
                <input type="text" 
                name="fname"
                id=""
                value={this.state.fname}
                onChange={this.handlechange}/>{""}
                <br/>
                <label htmlFor="">last name:</label>
                <input type="text"
                id=""
                name="lname"
                value={this.state.lname} 
                onChange={this.handlechange}/>{""}
                <br/>
                <label htmlFor="">email:</label>
                <input type="text" 
                id=""
                name="email"
                value={this.state.email}
                onChange={this.handlechange}
                />{""}
            </div>
        )
    }
}