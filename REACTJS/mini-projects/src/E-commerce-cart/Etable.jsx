import { Component } from "react";

export default class Etable extends Component {
    render() {
        return <div>
            <table border={1}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>lname</th>
                        <th>edit</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.person.map((val, i) => {
                        return (<tr key={val.i}>
                            <td>{val.id}</td>
                            <td>{val.name}</td>
                            <td>{val.lname}</td>
                            <td><button type="button" onClick={() => this.props.edituser(val, i)}>edituser</button></td>
                            <td><button type="button" onClick={() => this.props.deleteuser(val)}>deleteuser</button></td>
                        </tr>)

                    })}
                </tbody>

            </table>
        </div>
    }
}
