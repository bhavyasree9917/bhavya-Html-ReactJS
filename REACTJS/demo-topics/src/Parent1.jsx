import { Component } from "react";

import Chi1 from "./Chi1";
import Chi2 from "./Chi2";
import Common2 from "./Common2";

export default class Parent1 extends Component {
    render() {
        return <div>
            <Common2 render={(count, increment, decrement, reset) => {
                <Chi1 count={count}
                    increment={increment}
                    decrement={decrement}
                    reset={reset} />

            }} />
             <Common2 render={(count, increment, decrement, reset) => {
                <Chi2 count={count}
                    increment={increment}
                    decrement={decrement}
                    reset={reset} />

            }} />
        </div>
    }
}