import React, { useState } from "react";
const Form = () => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");


    const handlenamechange = (e) => setname(e.target.value);
    const handleemailchange = (e) => setemail(e.target.value);
    return <div>
        <h1>user form</h1>
        <label>name</label>
        <input type="text"
            value={name}
            onChange={handlenamechange} />
        <label>email</label>
        <input type="email"
            value={email}
            onChange={handleemailchange} />


        <p>entername:{name}</p>
        <p>enteremail:{email}</p>
    </div>
}
export default Form;