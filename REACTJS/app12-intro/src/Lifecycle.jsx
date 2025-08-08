import { Component } from "react";

class Lifecycle extends Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    timer=()=>{
        this.setState({})
    }

    render(){
return<div>
   <button onClick={this.timer}>start time</button> 
</div>
    }

}
export default Lifecycle