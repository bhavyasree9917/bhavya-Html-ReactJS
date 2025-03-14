import { Component } from "react";
import axios from "axios"
import Libraryform from "./Libraryform";
import Librarytable from "./Librarytable";

export default class Library extends Component {
    constructor() {
        super()
        this.state = {
            person: {
                id: "",
                title: "",
                author: "",
                isavailable: "",
                borrower: ""
            },
            Library: [],
            editindex: null,
        }
    }


    getEcartFromServer = () => {
        axios.get("http://localhost:3000/Library/").then((response) => {
            this.setState({ Library: response.data })
        })

    }

    handlechange = (e) => {
        var newusr = { ...this.state.person }
        newusr[e.target.name] = e.target.value
        this.setState({ person: newusr })
    }
    adduser = () => {
        axios.post("http://localhost:3000/Library/", this.state.person).then(() => {
            this.getEcartFromServer()
            this.clearForm()
        })
    }

    deletetuser = (val) => {
        axios.delete("http://localhost:3000/Library/" + val.id).then(() => {
            this.getEcartFromServer()
        })

    }
    edituser = (val, i) => {
        this.setState({ person: val, editindex: i });
    }
    updateUser = () => {
        axios.put("http://localhost:3000/Library/" + this.state.Library[this.state.editindex].id, this.state.person)
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
                title: "",
                author: "",
                isavailable: "",
                borrower: ""
            }
        })
    }

    render() {
        return <div>
            <Libraryform person={this.state.person}
                adduser={this.adduser}
                handlechange={this.handlechange}
                updateUser={this.updateUser}
                editindex={this.state.editindex} />
            <hr />
            <Librarytable Library={this.state.Library} edituser={this.edituser} deletetuser={this.deletetuser} />
        </div>
    }
    componentDidMount() {
        this.getEcartFromServer();
    }
}

