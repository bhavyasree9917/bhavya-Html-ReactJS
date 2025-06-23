import React, { useEffect, useState } from "react";

const Register = () => {
    const [listusers, setlistusers] = useState([])

    const [users, setUser] = useState({
        fname: "",
        lname: "",
        email: "",
        password: "",
        confirmpassword: ""
    })
    const handlechange = (e) => {
        const newuser = { ...users };
        newuser[e.target.name] = e.target.value;
        setUser(newuser)

    }
    const handlesubmit = () => {
        const newUsers = JSON.parse(localStorage.getItem("users"))
        if (newUsers !== null) {
            newUsers.push(users);
            localStorage.setItem("user", JSON.stringify(newUsers))
        } else {
            localStorage.setItem("user", JSON.stringify(users))
        }
    }
    // const handlesubmit = (e) => {
    //     e.preventDefault()
    //     localstorage()
    //     console.log(user)
    // }

    // useEffect(()=>{
    //     loaddata()
    //     console.log(listusers)
    // },[])

    // const loaddata=()=>{
    //     const exisitingusers =JSON.parse(localStorage.getItem("localdata")) || []
    //     setlistusers(exisitingusers)
    // }


    // const localstorage = () => {

    //     const updatedusers = [...listusers, user]
    //     localStorage.setItem("localdata", JSON.stringify(updatedusers))
    //     setlistusers(updatedusers)
    // }

    return (
        <div>
            <form>
                <label htmlFor="">First name</label>
                <input type="text" name="fname" value={users.fname} onChange={handlechange} ></input><br />
                <label htmlFor="">Last name</label>
                <input type="text" name="lname" value={users.lname} onChange={handlechange}></input><br />
                <label htmlFor="">email</label>
                <input type="email" name="email" value={users.email} onChange={handlechange}></input><br />
                <label htmlFor="">password</label>
                <input type="password" name="password" value={users.password} onChange={handlechange}></input><br />
                <label htmlFor=""> Confirm password</label>
                <input type="password" name="confirmpassword" value={users.confirmpassword} onChange={handlechange}></input><br />
                <button type="button" onClick={handlesubmit}>Register</button>
            </form>
        </div>
    )
}

export default Register;