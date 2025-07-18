import { useState } from "react";
import Inputchild from "./InputChild";
import DisplayChild from "./DisplayChild";

const Container = () => {
    const [inputtext, settext] = useState("");

    const display = () => {
        settext("bhavya sree");
    };

    const handleChange = (e) => {
        settext(e.target.value);
    };
    return (
        <div>
            <button onClick={display}>Click here</button>
            <Inputchild inputtext={inputtext} />
            <DisplayChild handleChange={handleChange} />
        </div>
    );
    
};
export default Container;
