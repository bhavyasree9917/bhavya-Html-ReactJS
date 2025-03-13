import { Component } from "react";
import axios from "axios"

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
            <form >
                <label htmlFor="">id</label>
                <input type="text"
                    name="id"
                    value={this.state.person.id}
                    onChange={this.handlechange} />{""}
                <br />
                <label htmlFor="">name</label>
                <input type="text"
                    name="name"
                    value={this.state.person.name}
                    onChange={this.handlechange} />{""}
                <br />
                <label htmlFor="">quantity</label>
                <input type="text"
                    name="quantity"
                    value={this.state.person.quantity}
                    onChange={this.handlechange} />{""}
                <br />
                <label htmlFor="">price</label>
                <input type="text"
                    name="price"
                    value={this.state.person.price}
                    onChange={this.handlechange} />{""}
                <br />
                <label htmlFor="">category</label>
                <input type="text"
                    name="ccategory"
                    value={this.state.person.category}
                    onChange={this.handlechange} />

                <br />
                {this.state.editindex === null ? <button type="button" onClick={this.adduser}>add user</button> :
                    (<button type="button" onClick={this.updateUser}> update user</button>)}
            </form>
            <hr />
            <table border={1}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>quantity</th>
                        <th>price</th>
                        <th>category</th>
                        <th>edit</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.Inventory.map((val, i) => {
                        return (<tr key={val.id}>
                            <td>{val.id}</td>
                            <td>{val.name}</td>
                            <td>{val.quantity}</td>
                            <td>{val.price}</td>
                            <td>{val.category}</td>
                            <td><button type="button" onClick={() => this.edituser(val, i)}>edit</button></td>
                            <td><button type="button" onClick={() => this.deletetuser(val)}>delete</button></td>
                        </tr>)
                    })}

                </tbody>
            </table>
        </div>
    }
    componentDidMount() {
        this.getdataFromServer();
    }
}

