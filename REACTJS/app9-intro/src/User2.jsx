import { Component } from "react";

export default class User2 extends Component {
  constructor() {
    super();
    this.state = {
      person: {
        fname: "",
        lname: "",
        age: ""
      },
      users: [],
      editindex: null,
    };
  }

  handleChange = (e) => {
    const newPerson = { ...this.state.person };
    newPerson[e.target.name] = e.target.value;
    this.setState({ person: newPerson });
  };

  addUser = () => {
    const newUsers = [...this.state.users];
    newUsers.push(this.state.person);
    this.setState({ users: newUsers });
    this.clearUser();
  };

  clearUser = () => {
    this.setState({ person: { fname: "", lname: "", age: "" } });
  };

  handleDelete = (i) => {
    const newUsers = [...this.state.users];
    newUsers.splice(i, 1);
    this.setState({ users: newUsers });
  };

  handleEdit = (user, i) => {
    this.setState({ person: user, editindex: i });
  };

  handleUpdate = () => {
    const newUsers = [...this.state.users];
    newUsers[this.state.editindex] = this.state.person;
    this.setState({ users: newUsers, editindex: null });
    this.clearUser();
  };

  render() {
    return (
      <div>
        <form action="">
          <label htmlFor="">First Name:</label>
          <input
            type="text"
            name="fname"
            value={this.state.person.fname}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="">Last Name:</label>
          <input
            type="text"
            name="lname"
            value={this.state.person.lname}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="">Age:</label>
          <input
            type="text"
            name="age"
            value={this.state.person.age}
            onChange={this.handleChange}
          />
          <br />
          {this.state.editindex === null ? (
            <button type="button" onClick={this.addUser}>
              Add User
            </button>
          ) : (
            <button type="button" onClick={this.handleUpdate}>
              Update User
            </button>
          )}
        </form>
        <hr />
        <table border={2}>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user, i) => (
              <tr key={i}>
                <td>{user.fname}</td>
                <td>{user.lname}</td>
                <td>{user.age}</td>
                <td>
                  <button onClick={() => this.handleEdit(user, i)}>
                    Edit
                  </button>
                </td>
                <td>
                  <button onClick={() => this.handleDelete(i)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
