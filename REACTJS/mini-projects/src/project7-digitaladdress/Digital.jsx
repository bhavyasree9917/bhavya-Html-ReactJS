import { Component } from "react";
import axios from "axios";
import Digitalform from "./Digitalform";
import Digitaltable from "./Digitaltable";

export default class Digital extends Component {
  constructor() {
    super();
    this.state = {
      person: {
        id: "",
        name: "",
        email: "",
        phone: "",
        address: ""
      },
      Digital: [],
      editindex: null,
    };
  }

  getEcartFromServer = () => {
    axios.get("http://localhost:3000/Digital").then((response) => {
      this.setState({ Digital: response.data });
    });
  };

  handlechange = (e) => {
    const newusr = { ...this.state.person };
    newusr[e.target.name] = e.target.value;
    this.setState({ person: newusr });
  };

  adduser = () => {

    axios.post("http://localhost:3000/Digital", this.state.person).then(() => {
      this.getEcartFromServer();
      this.clearForm();
    });
  };

  deletetuser = (val) => {
   
    axios.delete("http://localhost:3000/Digital/" + val.id).then(() => {
      this.getEcartFromServer();
    });
  };

  edituser = (val, i) => {
    this.setState({ person: val, editindex: i });
  };

  updateUser = () => {
   
    axios
      .put("http://localhost:3000/Digital/" + this.state.Digital[this.state.editindex].id, this.state.person)
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
        phone: "",
        address: ""
      }
    });
  };

  render() {
    return (
      <div>
       <Digitalform person={this.state.person}
                      adduser={this.adduser}
                      handlechange={this.handlechange}
                      updateUser={this.updateUser}
                      editindex={this.state.editindex} />
        <hr />
        <Digitaltable Digital={this.state.Digital} edituser={this.edituser} deletetuser={this.deletetuser} />
      </div>
    );
  }

  componentDidMount() {
    this.getEcartFromServer();
  }
}
