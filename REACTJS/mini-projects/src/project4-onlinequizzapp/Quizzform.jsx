import { Component } from "react"

export default class Quizzform extends Component {
    constructor() {
        super()
    }
    render() {
        return <div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">id</label>
                <input type="text" className="form-control" name="id"
                    value={this.props.person.id}
                    onChange={this.props.handlechange} />
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label"> question</label>
                <input type="text" className="form-control" name="question"
                    value={this.props.person.question}
                    onChange={this.props.handlechange} />
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">options</label>
                <input type="text" className="form-control" name="options"
                    value={this.props.person.options}
                    onChange={this.props.handlechange} />
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">correctanswer</label>
                <input type="text" className="form-control" name="correctanswer"
                    value={this.props.person.correctanswer}
                    onChange={this.props.handlechange} />
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">score</label>
                <input type="text" className="form-control" name="score"
                    value={this.props.person.score}
                    onChange={this.props.handlechange} />
            </div>
            {this.props.editindex === null ? <button type="button" onClick={this.props.adduser}>add user</button> :
                (<button type="button" onClick={this.props.updateUser}> update user</button>)}
        </div>
    }
}