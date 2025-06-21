import { Component } from "react";
import Common from "./Common";
import Child1 from "./Child1";
import Child2 from "./Child2";

export default class Parent extends Component {
    render() {
        return <div>
            <Common render={(count, increment, decrement, reset) => (
                <Child1 count={count}
                    increment={increment}
                    decrement={decrement}
                    reset={reset} />
            )} />
              <Common render={(count, increment, decrement, reset) => (
                <Child2 count={count}
                    increment={increment}
                    decrement={decrement}
                    reset={reset} />
            )} />
        </div>
    }
}