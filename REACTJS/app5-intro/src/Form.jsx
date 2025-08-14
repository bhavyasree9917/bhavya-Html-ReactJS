import React, { useState } from "react";


const Form = () => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");

    const handlenamechange = (e) => setname(e.target.value);
    const handleemailchange = (e) => setemail(e.target.value)


    return <div>
        <h1>registeration form</h1>
        <form action="">
        <label>
            fname
        </label>
        <input type="name"
            value={name}
            onChange={handlenamechange} />
        <label >email</label>
        <input type="email"
            value={email}
            onChange={handleemailchange} />
            </form>
            <p>name:{name}</p>
            <p>email:{email}</p>

    </div>
}
export default Form