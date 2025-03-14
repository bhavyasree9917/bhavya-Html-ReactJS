import { Component } from "react"

export default class Libraryform extends Component {
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
                <label htmlFor="formGroupExampleInput2" className="form-label">title</label>
                <input type="text" className="form-control" name="title"
                    value={this.props.person.title}
                    onChange={this.props.handlechange} />
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">author</label>
                <input type="text" className="form-control" name="author"
                    value={this.props.person.author}
                    onChange={this.props.handlechange} />
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">isavailable</label>
                <input type="text" className="form-control" name="isavailable"
                    value={this.props.person.isavailable}
                    onChange={this.props.handlechange} />
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">borrower</label>
                <input type="text" className="form-control" name="borrower"
                    value={this.props.person.borrower}
                    onChange={this.props.handlechange} />
            </div>
            {this.props.editindex === null ? <button type="button" onClick={this.props.adduser}>add user</button> :
                (<button type="button" onClick={this.props.updateUser}> update user</button>)}
        </div>
    }
}