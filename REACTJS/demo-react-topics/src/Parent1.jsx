import { Component } from "react";
import Common from "./Common";
import Child3 from "./Child3";
import Child4 from "./Child4";

export default class Parent1 extends Component {
    render() {
        return <div>
            <Common render={(count, increment, decrement, reset) => (
                <Child3 count={count}
                    increment={increment}
                    dectrement={decrement}
                    reset={reset} />
            )} />
             <Common render={(count, increment, decrement, reset) => (
                <Child4 count={count}
                    increment={increment}
                    dectrement={decrement}
                    reset={reset} />
            )} />

        </div>
    }
}