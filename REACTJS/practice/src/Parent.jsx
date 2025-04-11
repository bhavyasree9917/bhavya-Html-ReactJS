import { Component } from "react";
import Common from "./Common";
import Child1 from "./Child1";
import Child2 from "./Child2";

export default class Parent extends Component {
    render() {
        return <div>
            <Common render={(count, increment, decrememt, reset) => (
                <Child1 count={count}
                    increment={increment}
                    decrement={decrememt}
                    reset={reset} />
            )} />
            <hr/>
            <Common render={(count, increment, decrememt, reset) => (
                <Child2 count={count}
                    increment={increment}
                    decrement={decrememt}
                    reset={reset} />
            )} />

        </div>
    }
}