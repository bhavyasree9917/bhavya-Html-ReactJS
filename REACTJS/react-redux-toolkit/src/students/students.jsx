import { Component } from "react";
import { connect } from "react-redux";

class students extends Component{
    constructor(){
        super()
        this.state={
            student:{

            }
        }
    }
    render(){
        return(<div>
            <h1>welcome bhavya</h1>
        </div>)
    }
}
function mapsStateToProps(state){
    return state
}
export default connect(mapsStateToProps)(students)
