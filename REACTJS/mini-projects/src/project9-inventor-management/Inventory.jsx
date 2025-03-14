import { Component } from "react";
import axios from "axios"
import Inventoryform from "./Inventoryform";
import Inventorytable from "./Inventorytable";

export default class Inventory extends Component {
    constructor() {
        super()
        this.state = {
            person: {
                id: "",
                name: "",
                quantity: "",
                price: "",
                category: ""
            },
            Inventory: [],
            editindex: null,
        }
    }


    getdataFromServer = () => {
        axios.get("http://localhost:3000/Inventory/").then((response) => {
            this.setState({ Inventory: response.data })
        })

    }

    handlechange = (e) => {
        var newusr = { ...this.state.person }
        newusr[e.target.name] = e.target.value
        this.setState({ person: newusr })
    }
    adduser = () => {
        axios.post("http://localhost:3000/Inventory/", this.state.person).then(() => {
            this.getdataFromServer()
            this.clearForm()
        })
    }

    deletetuser = (val) => {
        axios.delete("http://localhost:3000/Inventory/" + val.id).then(() => {
            this.getdataFromServer()
        })

    }
    edituser = (val, i) => {
        this.setState({ person: val, editindex: i });
    }
    updateUser = () => {
        axios.put("http://localhost:3000/Inventory/" + this.state.Inventory[this.state.editindex].id, this.state.person)
            .then(() => {
                this.getdataFromServer();
                this.setState({ editindex: null });
                this.clearForm();
            })
    }





    clearForm = () => {
        this.setState({
            person: {
                id: "",
                name: "",
                quantity: "",
                price: "",
                category: ""
            }
        })
    }

    render() {
        return <div>
            <Inventoryform person={this.state.person}
                adduser={this.adduser}
                handlechange={this.handlechange}
                updateUser={this.updateUser}
                editindex={this.state.editindex} />
            <hr />
            <Inventorytable Inventory={this.state.Inventory} edituser={this.edituser} deletetuser={this.deletetuser} />
        </div>
    }
    componentDidMount() {
        this.getdataFromServer();
    }
}

