import { Component } from "react";
import axios from "axios";
import Quizzform from "./Quizzform";
import Quizztable from "./Quizztable";

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
                <Quizzform person={this.state.person}
                               adduser={this.adduser}
                               handlechange={this.handlechange}
                               updateUser={this.updateUser}
                               editindex={this.state.editindex} />
                <hr />
               <Quizztable Quizzapp={this.state.Quizzapp} edituser={this.edituser} deletetuser={this.deletetuser} />
            </div>
        );
    }

    componentDidMount() {
        this.getEcartFromServer();
    }
}
