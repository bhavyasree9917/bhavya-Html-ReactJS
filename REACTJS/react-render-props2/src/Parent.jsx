import { Component } from "react";

import Child2 from "./Child2";
import Child1 from "./Child1";

export default class extends Component {
    constructor() {
        super()

    }
    render() {
        return <div>
            <Child2 render={(count, increment, decrement, reset) => (
                <Child1 count={count}
                    increment={increment}
                    decrement={decrement}
                    reset={reset} />


            )} />    </div>
    }
}