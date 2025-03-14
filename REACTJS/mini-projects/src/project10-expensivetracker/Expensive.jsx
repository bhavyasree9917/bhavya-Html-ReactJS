import { Component } from "react";
import axios from "axios"
import Expensiveform from "./Expensiveform";
import Expensivetable from "./Expensivetable";

export default class Expensive extends Component {
    constructor() {
        super()
        this.state = {
            person: {
                id: "",
                amount: "",
                category: "",
                description: "",
                category: ""
            },
            Expensive: [],
            editindex: null,
        }
    }


    getEcartFromServer = () => {
        axios.get("http://localhost:3000/Expensive/").then((response) => {
            this.setState({ Expensive: response.data })
        })

    }

    handlechange = (e) => {
        var newusr = { ...this.state.person }
        newusr[e.target.name] = e.target.value
        this.setState({ person: newusr })
    }
    adduser = () => {
        axios.post("http://localhost:3000/Expensive/", this.state.person).then(() => {
            this.getEcartFromServer()
            this.clearForm()
        })
    }

    deletetuser = (val) => {
        axios.delete("http://localhost:3000/Expensive/" + val.id).then(() => {
            this.getEcartFromServer()
        })

    }
    edituser = (val, i) => {
        this.setState({ person: val, editindex: i });
    }
    updateUser = () => {
        axios.put("http://localhost:3000/Expensive/" + this.state.Expensive[this.state.editindex].id, this.state.person)
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
                amount: "",
                category: "",
                description: "",
                category: ""
            }
        })
    }

    render() {
        return <div>
            <Expensiveform person={this.state.person}
                adduser={this.adduser}
                handlechange={this.handlechange}
                updateUser={this.updateUser}
                editindex={this.state.editindex} />
            <hr />
            <Expensivetable Expensive={this.state.Expensive} edituser={this.edituser} deletetuser={this.deletetuser} />

        </div>
    }
    componentDidMount() {
        this.getEcartFromServer();
    }
}

