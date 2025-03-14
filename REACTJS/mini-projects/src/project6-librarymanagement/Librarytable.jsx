import { Component } from "react";

export default class Librarytable extends Component{
    render(){
        return<div>
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
                {this.props.Library.map((val, i) => {
                    return (<tr key={val.id}>
                        <td>{val.id}</td>
                        <td>{val.title}</td>
                        <td>{val.author}</td>
                        <td>{val.isavailable}</td>
                    <td>{val.borrower}</td>
                        <td><button type="button" className="btn btn-primary" onClick={() => this.props.edituser(val, i)}>edit</button></td>
                        <td><button type="button"  className="btn btn-danger" onClick={() => this.props.deletetuser(val)}>delete</button></td>
                    </tr>)
                })}

            </tbody>
        </table>
        </div>
    }
}