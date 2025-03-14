import { Component } from "react";

export default class Expensivetable extends Component{
    render(){
        return<div>
             <table border={1}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>amount</th>
                        <th>category</th>
                        <th>description</th>
                        <th>category</th>
                        <th>edit</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.Expensive.map((val, i) => {
                        return (<tr key={val.id}>
                            <td>{val.id}</td>
                            <td>{val.amount}</td>
                            <td>{val.category}</td>
                            <td>{val.description}</td>
                            <td>{val.category}</td>

                            <td><button type="button"className="btn btn-primary" onClick={() => this.props.edituser(val, i)}>edit</button></td>
                            <td><button type="button" className="btn btn-danger" onClick={() => this.props.deletetuser(val)}>delete</button></td>
                        </tr>)
                    })}

                </tbody>
            </table>
        </div>
    }
}