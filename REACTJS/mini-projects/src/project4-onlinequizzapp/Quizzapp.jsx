import { Component } from "react";
import axios from "axios";

export default class Quizzapp extends Component {
    constructor() {
        super();
        this.state = {
            person: {
                id: "",
                question: "",
                options: "",
                correctanswer: "",
                score: ""
            },
            Quizzapp: [],  
            editindex: null,
        };
    }

    getEcartFromServer = () => {
        axios.get("http://localhost:3000/Quizzapp/").then((response) => {
            this.setState({ Quizzapp: response.data });
        });
    }

    handlechange = (e) => {
        var newusr = { ...this.state.person };
        newusr[e.target.name] = e.target.value;
        this.setState({ person: newusr });
    }

    adduser = () => {
        axios.post("http://localhost:3000/Quizzapp/", this.state.person).then(() => {
            this.getEcartFromServer();
            this.clearForm();
        });
    }

    deletetuser = (val) => {
        axios.delete("http://localhost:3000/Quizzapp/" + val.id).then(() => {
            this.getEcartFromServer();
        });
    }

    edituser = (val, i) => {
        this.setState({ person: val, editindex: i });
    }

    updateUser = () => {
        axios.put("http://localhost:3000/Quizzapp/" + this.state.Quizzapp[this.state.editindex].id, this.state.person)
            .then(() => {
                this.getEcartFromServer();
                this.setState({ editindex: null });
                this.clearForm();
            });
    }

    clearForm = () => {
        this.setState({
            person: {
                id: "",
                question: "",
                options: "",
                correctanswer: "",
                score: ""
            },
            editindex: null 
        });
    }

    render() {
        return (
            <div>
                <form>
                    <label htmlFor="">id</label>
                    <input
                        type="text"
                        name="id"
                        value={this.state.person.id}
                        onChange={this.handlechange}
                    />
                    <br />
                    <label htmlFor="">question</label>
                    <input
                        type="text"
                        name="question"
                        value={this.state.person.question}
                        onChange={this.handlechange}
                    />
                    <br />
                    <label htmlFor="">options</label>
                    <input
                        type="text"
                        name="options"
                        value={this.state.person.options}
                        onChange={this.handlechange}
                    />
                    <br />
                    <label htmlFor="">correctanswer</label>
                    <input
                        type="text"
                        name="correctanswer" 
                        value={this.state.person.correctanswer}
                        onChange={this.handlechange}
                    />
                    <br />
                    <label htmlFor="">score</label>
                    <input
                        type="text"
                        name="score" 
                        value={this.state.person.score}
                        onChange={this.handlechange}
                    />
                    <br />
                    {this.state.editindex === null
                        ? <button type="button" onClick={this.adduser}>add user</button>
                        : <button type="button" onClick={this.updateUser}>update user</button>}
                </form>
                <hr />
                <table border={1}>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>question</th>
                            <th>options</th>
                            <th>correctanswer</th>
                            <th>score</th>
                            <th>edit</th>
                            <th>delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.Quizzapp.map((val, i) => { 
                            return (
                                <tr key={val.id}>
                                    <td>{val.id}</td>
                                    <td>{val.question}</td>
                                    <td>{val.options}</td>
                                    <td>{val.correctanswer}</td>
                                    <td>{val.score}</td>
                                    <td><button type="button" onClick={() => this.edituser(val, i)}>edit</button></td>
                                    <td><button type="button" onClick={() => this.deletetuser(val)}>delete</button></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }

    componentDidMount() {
        this.getEcartFromServer();
    }
}
