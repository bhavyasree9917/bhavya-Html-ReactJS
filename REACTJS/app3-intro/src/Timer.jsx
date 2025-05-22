import { Component } from "react";

export default class Timer extends Component{
    constructor(){
        super()
        this.state={
            seconds:0,
            interValid:null
        }
    }
    increment=()=>{
        this.setState({seconds:this.state.seconds+1})

    }
    componentDidMount(){
         this.state.interValid=setInterval(()=>{
            this.increment()
        },1000)
    }
    componentWillUnmount(){
        clearInterval(this.state.interValid)
    }
    
    render(){
        return<div>
            <h1>{this.state.seconds}</h1>
            
        </div>
    }
}