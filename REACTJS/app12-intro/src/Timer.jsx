import { Component } from "react"

export default class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            seconds: 0,
            intervalid: null
        }
    }
   componentDidMount(){
    this.state.intervalid=setInterval(()=>{
        this.setState({
            seconds:this.state.seconds+1
        },)
    },1000);
   }
   componentWillUnmount(){
    clearInterval(this.state.intervalid)
   }
    render() {
        return <div>
            <h1>
                timer{this.state.seconds}
            </h1>
        </div>
    }

}