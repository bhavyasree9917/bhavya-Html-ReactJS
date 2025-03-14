import { Component } from "react";
import axios from "axios";
import Profileform from "./Profileform";
import Profiletable from "./Profiletable";

export default class Profile extends Component {
    constructor() {
        super();
        this.state = {
            person: {
                id: "",
                name: "",
                email: "",
                role: "",
                preferences: ""
            },
            Profile: [],
            editindex: null,
        };
    }

    getEcartFromServer = () => {
        axios.get("http://localhost:3000/Profile/").then((response) => {
            console.log(response.data);
            this.setState({ Profile: response.data });
        }).catch((error) => {
            console.error("Error fetching data:", error);
        });
    };

    handlechange = (e) => {
        var newusr = { ...this.state.person };
        newusr[e.target.name] = e.target.value;
        this.setState({ person: newusr });
    };

    adduser = () => {
        axios.post("http://localhost:3000/Profile/", this.state.person).then(() => {
            this.getEcartFromServer();
            this.clearForm();
        });
    };

    deletetuser = (val) => {
        axios.delete("http://localhost:3000/Profile/" + val.id).then(() => {
            this.getEcartFromServer();
        });
    };

    edituser = (val, i) => {
        this.setState({ person: val, editindex: i });
    };

    updateUser = () => {
        axios.put("http://localhost:3000/Profile/" + this.state.Profile[this.state.editindex].id, this.state.person)
            .then(() => {
                this.getEcartFromServer();
                this.setState({ editindex: null });
                this.clearForm();
            });
    };

    clearForm = () => {
        this.setState({
            person: {
                id: "",
                name: "",
                email: "",
                role: "",
                preferences: ""
            }
        });
    };

    render() {
        return (
            <div>
                <Profileform person={this.state.person}
                    adduser={this.adduser}
                    handlechange={this.handlechange}
                    updateUser={this.updateUser}
                    editindex={this.state.editindex} />
                <hr />
                <Profiletable profile={this.state.Profile} edituser={this.edituser} deletetuser={this.deletetuser} />
            </div>
        );
    }

    componentDidMount() {
        this.getEcartFromServer();
    }
}
