import { Component } from "react";

export default class Profiletable extends Component{
    render(){
        return<div>
            <table border={1}>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>email</th>
                            <th>role</th>
                            <th>preferences</th>
                            <th>edit</th>
                            <th>delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.Profile.map((val, i) => {
                        return (
                            <tr key={val.id}>
                                <td>{val.id}</td>
                                <td>{val.name}</td>
                                <td>{val.email}</td>
                                <td>{val.role}</td>
                                <td>{val.preferences}</td>
                               
                                <td><button type="button" className="btn btn-danger" onClick={() => this.props.edituser(val, i)}>edit</button></td>
                                <td><button type="button" className="btn btn-primary" onClick={() => this.props.deletetuser(val)}>delete</button></td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
        </div>
    }
}