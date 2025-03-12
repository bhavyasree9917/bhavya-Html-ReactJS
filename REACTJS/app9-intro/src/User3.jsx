import { Component } from "react";

export default class User3 extends Component{
    constructor(){
        super()
        this.state={
            person:{
                fname:"",
                lname:"",
                email:""
            },
            users:[],
            editindex:null,
        }
       
       
    }
    render(){
        return<div>
            <form action="">
                <label htmlFor="">firstname</label>
                <input type="text"
                name="fname" 
                id=""
                value={this.state.person.fname}
                onchange={this.handlechange}/>{""}
                <br/>
                <label htmlFor="">last  name</label>
                <input type="text" 
                name="lname"
                id=""
                value={this.state.person.lname}
                onchange={this.handlechange}/>{""}
                <br/>
                <label htmlFor="">email</label>
                <input type="text"
                name="email" 
                id=""
                value={this.state.person.email}
                onchange={this.handlechange}/>{""}
                <br/>
                {this.state.editindex===null?(
                    <button type="button" onClick={ this.adduser}>adduser</button>
                ):(
                    <button type="button" onClick={this.handleupdate}>
                        updateuser
                    </button>
                )}
            </form>
            <hr/>
            <table border={2}>
                <thead>
                    <tr>
                    <th>firstname</th>
                    <th>lastname</th>
                    <th>email</th>
                    <th>edit</th>
                    <th>delete</th>
                    </tr>
                </thead>

            </table>
        </div>
    }
}