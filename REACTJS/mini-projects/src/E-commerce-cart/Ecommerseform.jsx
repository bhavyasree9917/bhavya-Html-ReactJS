import { Component } from "react";

export default class Ecommerseform extends Component {
    render() {

        return <div>
            <form>

                <div ClassName="mb-3">
                    <label htmlfor="exampleInputPassword1" ClassName="form-label">Password</label>
                    <input type="password" ClassName="form-control" name="id"
                        value={this.props.person.id}
                        onChange={this.props.handlechange} />
                </div>
                <div ClassName="mb-3">
                    <label htmlfor="exampleInputPassword1" ClassName="form-label">Password</label>
                    <input type="password" ClassName="form-control" name="name"
                        value={this.props.person.name}
                        onChange={this.props.handlechange} />
                </div>
                <div ClassName="mb-3">
                    <label htmlfor="exampleInputPassword1" ClassName="form-label">Password</label>
                    <input type="password" ClassName="form-control" name="price"
                        value={this.props.person.price}
                        onChange={this.props.handlechange} />
                </div>
                <div ClassName="mb-3">
                    <label htmlfor="exampleInputPassword1" ClassName="form-label">Password</label>
                    <input type="password" ClassName="form-control" name="quantity"
                        value={this.props.person.quantity}
                        onChange={this.props.handlechange} />
                </div>
                <div ClassName="mb-3">
                    <label htmlfor="exampleInputPassword1" ClassName="form-label">Password</label>
                    <input type="password" ClassName="form-control" name="totalprice"
                        value={this.props.person.totalprice}
                        onChange={this.props.handlechange} />
                </div>
                {this.props.editindex === null ? <button type="button" onClick={this.props.adduser}>add user</button> :
                (<button type="button" onClick={this.props.updateUser}> update user</button>)}

            </form>
        </div>

    }
}