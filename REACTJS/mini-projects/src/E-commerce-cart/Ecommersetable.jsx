import { Component } from "react";

export default class Ecommersetable extends Component{
    render(){
      return  <table border={1}>
        <thead>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>price</th>
                <th>quantity</th>
                <th>totalprice</th>
                <th>edit</th>
                <th>delete</th>
            </tr>
        </thead>
        <tbody>
            {this.props.Ecart.map((val, i) => {
                return (<tr key={val.id}>
                    <td>{val.id}</td>
                    <td>{val.name}</td>
                    <td>{val.price}</td>
                    <td>{val.quantity}</td>
                    <td>{val.totalprice}</td>
                    <td><button type="button"className="btn btn-primary" onClick={() => this.props.edituser(val, i)}>edit</button></td>
                    <td><button type="button" className="btn btn-danger" onClick={() => this.props.deletetuser(val)}>delete</button></td>
                </tr>)
            })}
        </tbody>
    </table>
    }
}