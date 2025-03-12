import React, { Component } from "react";
import axios from "axios";
export default class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      student: {
        name: "",
        email: "",
        contact: "",
      },
      users: [],
      editIndex: null,
    };
  }

  getusersFromServer = () => {
   
    axios.get("http://localhost:3000/users").then((response) => {
      console.log(response.data);
      this.setState({ users: response.data });
    });
  };
  addStudent = () => {
    console.log(this.state.student);
  
    axios
      .post("http://localhost:3000/users", this.state.student)
      .then(() => {
        this.getusersFromServer();
        this.clearForm()

      });
  };

  handleChange = (e) => {
    const newStudent = { ...this.state.student };
    newStudent[e.target.name] = e.target.value;
    this.setState({ student: newStudent });
  };

  handleDelete = (user) => {
    axios.delete("http://localhost:3000/users/" + user.id).then(() => {
      this.getusersFromServer();
    });
  };

  handleEdit = (std, i) => {
    this.setState({ student: std, editIndex: i });
  };

  updateStudent = () => {
    axios
      .put(
        "http://localhost:3000/users/" + this.state.student.id,
        this.state.student
      )
      .then(() => {
        this.getusersFromServer();
        this.setState({editIndex:null})
        this.clearForm()
      });
  };
  clearForm=()=>{
    this.setState({student:{
        name: "",
        email: "",
        contact: "",
    }})
  }
  render() {
    return (
      <div>
        <form>
          <label htmlFor="">Stundent Name </label>
          <input
            type="text"
            name="name"
            value={this.state.student.name}
            onChange={this.handleChange}
          />{" "}
          <br />
          <label htmlFor="">Stundent Email </label>
          <input
            type="text"
            name="email"
            value={this.state.student.email}
            onChange={this.handleChange}
          />{" "}
          <br />
          <label htmlFor="">Stundent Contact </label>
          <input
            type="text"
            name="contact"
            value={this.state.student.contact}
            onChange={this.handleChange}
          />{" "}
          <br />
          {this.state.editIndex === null ? (
            <button onClick={this.addStudent} type="button">
              Add Student
            </button>
          ) : (
            <button onClick={this.updateStudent} type="button">
              Update Student
            </button>
          )}
        </form>

        <table border={1}>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>ID</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user, i) => {
              return (
                <tr key={i}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.contact}</td>
                  <td>{user.id}</td>
                  <td>
                    <button
                      onClick={() => {
                        this.handleEdit(user, i);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        this.handleDelete(user);
                      }}
                    >
                      Delete
                    </button>
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
    this.getusersFromServer();
  }
}
