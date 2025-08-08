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
   <button onClick={this.timer}>s </button> 
</div>
    }

}
export default Lifecycle