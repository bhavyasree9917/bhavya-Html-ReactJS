import { Component } from "react";
import axios from "axios"
import Socialmediaform from "./Socialmediaform";
import Socialmediatable from "./Socialmediatable";

export default class Socialmedia extends Component {
    constructor() {
        super()
        this.state = {
            person: {
                id: "",
                content: "",
                likes: "",
                comments: "",
                author: ""
            },
            socialmedia: [],
            editindex: null,
        }
    }


    getEcartFromServer = () => {
        axios.get("http://localhost:3000/socialmedia/").then((response) => {
            this.setState({ socialmedia: response.data })
        })

    }

    handlechange = (e) => {
        var newusr = { ...this.state.person }
        newusr[e.target.name] = e.target.value
        this.setState({ person: newusr })
    }
    adduser = () => {
        axios.post("http://localhost:3000/socialmedia/", this.state.person).then(() => {
            this.getEcartFromServer()
            this.clearForm()
        })
    }

    deletetuser = (val) => {
        axios.delete("http://localhost:3000/socialmedia/" + val.id).then(() => {
            this.getEcartFromServer()
        })

    }
    edituser = (val, i) => {
        this.setState({ person: val, editindex: i });
    }
    updateUser = () => {
        axios.put("http://localhost:3000/socialmedia/" + this.state.socialmedia[this.state.editindex].id, this.state.person)
            .then(() => {
                this.getEcartFromServer();
                this.setState({ editindex: null });
                this.clearForm();
            })
    }





clearForm = () => {
    this.setState({
        person: {
            id: "",
            content: "",
            likes: "",
            comments: "",
            author: ""
        }
    })}

render() {
    return <div>
         <Socialmediaform person={this.state.person}
                        adduser={this.adduser}
                        handlechange={this.handlechange}
                        updateUser={this.updateUser}
                        editindex={this.state.editindex} />
        <hr />
         <Socialmediatable  socialmedia={this.state.socialmedia} edituser={this.edituser} deletetuser={this.deletetuser} />
       
    </div>
}
componentDidMount() {
    this.getEcartFromServer();
}
}

