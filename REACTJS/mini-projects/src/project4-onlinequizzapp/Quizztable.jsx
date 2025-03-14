import { Component } from "react";

export default class Quizztable extends Component {
    render() {
        return <div>
            <table border={1}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>question</th>
                        <th>options</th>
                        <th>correctanswer</th>
                        <th>score</th>
                        <th>edit</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.Quizzapp.map((val, i) => {
                        return (
                            <tr key={val.id}>
                                <td>{val.id}</td>
                                <td>{val.question}</td>
                                <td>{val.options}</td>
                                <td>{val.correctanswer}</td>
                                <td>{val.score}</td>
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