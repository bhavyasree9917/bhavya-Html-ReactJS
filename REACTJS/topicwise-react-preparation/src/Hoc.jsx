import React, { Component } from "react";
import Clickcounter from "./Clickcounter";

const Hoc=(Clickcounter)=>{
    class bhavya extends Component{
        constructor(){
            super()
            this.state={
                count:0
            }
        }

        increment=()=>{
            this.setState({count:this.state.count+1})
        }
        decrement=()=>{
            this.setState({count:this.state.count-1})
        }
        reset=()=>{
            this.setState({count:0})
        }
        render(){
            return<div>
                <Clickcounter count={this.state.count}
                increment={this.increment}
                decrement={this.decrement}
                reset={this.reset}/>
            </div>
        }
    }
    return bhavya;

}
export default Hoc