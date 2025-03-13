import { Component } from "react";
import axios from "axios"

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
            <label htmlFor="">author</label>
            <input type="text"
                name="author"
                value={this.state.person.author}
                onChange={this.handlechange} />{""}
            <br />
            <label htmlFor=""> isavailable</label>
            <input type="text"
                name="isavailable"
                value={this.state.person. isavailable}
                onChange={this.handlechange} />{""}
            <br />
            <label htmlFor="">borrower</label>
            <input type="text"
                name="borrowert" 
                value={this.state.person.borrower}
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
                    <th>author</th>
                    <th>isavailable</th>
                    <th>borrower</th>
                    <th>edit</th>
                    <th>delete</th>
                </tr>
            </thead>
            <tbody>
                {this.state.Library.map((val, i) => {
                    return (<tr key={val.id}>
                        <td>{val.id}</td>
                        <td>{val.title}</td>
                        <td>{val.author}</td>
                        <td>{val.isavailable}</td>
                    <td>{val.borrower}</td>
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

