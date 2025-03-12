import { Component } from "react";
import axios from "axios"

export default class Taskmanager extends Component {
    constructor() {
        super()
        this.state = {
            person: {
                id: "",
                title: "",
                description: "",
                status: "",
                createdat: ""
            },
            Taskmanagement: [],
            editindex: null,
        }
    }


    getEcartFromServer = () => {
        axios.get("http://localhost:3000/Taskmanagement/").then((response) => {
            this.setState({ Taskmanagement: response.data })
        })

    }

    handlechange = (e) => {
        var newusr = { ...this.state.person }
        newusr[e.target.name] = e.target.value
        this.setState({ person: newusr })
    }
    adduser = () => {
        axios.post("http://localhost:3000/Taskmanagement/", this.state.person).then(() => {
            this.getEcartFromServer()
            this.clearForm()
        })
    }

    deletetuser = (val) => {
        axios.delete("http://localhost:3000/Taskmanagement/" + val.id).then(() => {
            this.getEcartFromServer()
        })

    }
    edituser = (val, i) => {
        this.setState({ person: val, editindex: i });
    }
    updateUser = () => {
        axios.put("http://localhost:3000/Taskmanagement/" + this.state.Taskmanagement[this.state.editindex].id, this.state.person)
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
            description: "",
            status: "",
            createdat: ""
        }
    })}

render() {
    return <div>
        <form >
            <label htmlFor="">id</label>
            <input type="text"
                name="id"
                value={this.state.person.id}
                onChange={this.handlechange} />{""}
            <br />
            <label htmlFor="">title</label>
            <input type="text"
                name="title"
                value={this.state.person.title}
                onChange={this.handlechange} />{""}
            <br />
            <label htmlFor="">description</label>
            <input type="text"
                name="description"
                value={this.state.person.description}
                onChange={this.handlechange} />{""}
            <br />
            <label htmlFor=""> status</label>
            <input type="text"
                name="comments"
                value={this.state.person. status}
                onChange={this.handlechange} />{""}
            <br />
            <label htmlFor="">  createdat</label>
            <input type="text"
                name="createdat" 
                value={this.state.person.createdat}
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
                    <th>title</th>
                    <th>description</th>
                    <th>status</th>
                    <th>createdat</th>
                    <th>edit</th>
                    <th>delete</th>
                </tr>
            </thead>
            <tbody>
                {this.state.Taskmanagement.map((val, i) => {
                    return (<tr key={val.id}>
                        <td>{val.id}</td>
                        <td>{val.title}</td>
                        <td>{val.description}</td>
                        <td>{val.status}</td>
                    <td>{val.createdat}</td>
                        <td><button type="button" onClick={() => this.edituser(val, i)}>edit</button></td>
                        <td><button type="button" onClick={() => this.deletetuser(val)}>delete</button></td>
                    </tr>)
                })}

            </tbody>
        </table>
    </div>
}
componentDidMount() {
    this.getEcartFromServer();
}
}

