import { Component } from "react";
import axios from "axios";

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
        <form>
          <label htmlFor="">id</label>
          <input
            type="text"
            name="id"
            value={this.state.person.id}
            onChange={this.handlechange}
          />
          <br />
          <label htmlFor="">name</label>
          <input
            type="text"
            name="name"
            value={this.state.person.name}
            onChange={this.handlechange}
          />
          <br />
          <label htmlFor="">email</label>
          <input
            type="text"
            name="email"
            value={this.state.person.email}
            onChange={this.handlechange}
          />
          <br />
          <label htmlFor="">phone</label>
          <input
            type="text"
            name="phone"
            value={this.state.person.phone}
            onChange={this.handlechange}
          />
          <br />
          <label htmlFor="">address</label>
          <input
            type="text"
            name="address"
            value={this.state.person.address}
            onChange={this.handlechange}
          />
          <br />
          {this.state.editindex === null ? (
            <button type="button" onClick={this.adduser}>add user</button>
          ) : (
            <button type="button" onClick={this.updateUser}>update user</button>
          )}
        </form>
        <hr />
        <table border={1}>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>email</th>
              <th>phone</th>
              <th>address</th>
              <th>edit</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.Digital.map((val, i) => {
              return (
                <tr key={val.id}>
                  <td>{val.id}</td>
                  <td>{val.name}</td>
                  <td>{val.email}</td>
                  <td>{val.phone}</td>
                  <td>{val.address}</td>
                  <td>
                    <button type="button" onClick={() => this.edituser(val, i)}>edit</button>
                  </td>
                  <td>
                    <button type="button" onClick={() => this.deletetuser(val)}>delete</button>
                  </td>
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
