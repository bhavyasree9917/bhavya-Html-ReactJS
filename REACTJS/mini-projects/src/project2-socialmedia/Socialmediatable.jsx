import { Component } from "react";

export default class Socialmediatable extends Component{
render(){
    return<div>
          <table border={1}>
            <thead>
                <tr>
                    <th>id</th>
                    <th>content</th>
                    <th>likes</th>
                    <th>comments</th>
                    <th>author</th>
                    <th>edit</th>
                    <th>delete</th>
                </tr>
            </thead>
            <tbody>
                {this.props.socialmedia.map((val, i) => {
                    return (<tr key={val.id}>
                        <td>{val.id}</td>
                        <td>{val.content}</td>
                        <td>{val.likes}</td>
                        <td>{val.comments}</td>
                        <td>{val.author}</td>
                        <td><button type="button" className="btn btn-primary"onClick={() => this.props.edituser(val, i)}>edit</button></td>
                        <td><button type="button" className="btn btn-danger"onClick={() => this.props.deletetuser(val)}>delete</button></td>
                    </tr>)
                })}

            </tbody>
        </table>
    </div>
}
}