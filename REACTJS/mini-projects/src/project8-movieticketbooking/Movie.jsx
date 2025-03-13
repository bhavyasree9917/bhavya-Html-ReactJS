import { Component } from "react";
import axios from "axios";

export default class Movie extends Component {
  constructor() {
    super();
    this.state = {
      person: {
        seatNumber: "",
        isBooked: "",
        category: "",
        userID: "",
      },
      Movies: [], 
      editindex: null,
    };
  }

  getMoviesFromServer = () => { 
    axios.get("http://localhost:3000/Movies")  
      .then((response) => {
        this.setState({ Movies: response.data });  
        
      });
  };

  handleChange = (e) => { 
    const newusr = { ...this.state.person };
    newusr[e.target.name] = e.target.value;
    this.setState({ person: newusr });
    console.log(this.state.person)
  };

  addUser = () => { 
    axios.post("http://localhost:3000/Movies", this.state.person)
      .then(() => {
        this.getMoviesFromServer();
        this.clearForm();
      });
  };

  deleteUser = (val) => {  
    axios.delete("http://localhost:3000/Movies/" + val.id)
      .then(() => {
        this.getMoviesFromServer();
      });
  };

  editUser = (val, i) => {
    this.setState({ person: val, editindex: i });
  };

  updateUser = () => {
    axios.put("http://localhost:3000/Movies/" + this.state.Movies[this.state.editindex].id, this.state.person)  
      .then(() => {
        this.getMoviesFromServer();
        this.setState({ editindex: null });
        this.clearForm();
      });
  };

  clearForm = () => {
    this.setState({
      person: {
        seatNumber: "",
        isBooked: "",
        category: "",
        userID: "",
      },
    });
  };

  render() {
    return (
      <div>
        <form>
          <label htmlFor="">seatNumber</label>
          <input
            type="text"
            name="seatNumber"
            value={this.state.person.seatNumber}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="">isBooked</label>
          <input
            type="text"
            name="isBooked"
            value={this.state.person.isBooked}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="">category</label>
          <input
            type="text"
            name="category"
            value={this.state.person.category}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="">userID</label>
          <input
            type="text"
            name="userID"
            value={this.state.person.userID}
            onChange={this.handleChange}
          />
          <br />

          {this.state.editindex === null ? (
            <button type="button" onClick={this.addUser}>Add User</button>
          ) : (
            <button type="button" onClick={this.updateUser}>Update User</button>
          )}
        </form>
        <hr />
        <table border={1}>
          <thead>
            <tr>
              <th>Seat Number</th>
              <th>Is Booked</th>
              <th>Category</th>
              <th>User ID</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.Movies.map((val, i) => { 
              return (
                <tr key={val.id}>
                  <td>{val.seatNumber}</td>
                  <td>{val.isBooked}</td>
                  <td>{val.category}</td>
                  <td>{val.userID}</td>
                  <td>
                    <button type="button" onClick={() => this.editUser(val, i)}>Edit</button>
                  </td>
                  <td>
                    <button type="button" onClick={() => this.deleteUser(val)}>Delete</button>
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
    this.getMoviesFromServer(); 
  }
}
