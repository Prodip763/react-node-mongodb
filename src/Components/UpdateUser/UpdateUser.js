import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateUser = () =>{
    const {id} = useParams();
    const [user, setUser] = useState({});
    useEffect( ()=>{
        const url = `http://localhost:5000/users/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setUser(data));
    },[]);

    const handleUpdateUser= e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password= e.target.password.value;

        const updateUser = {name, email, password};
        //send data to the server
        const url = `http://localhost:5000/users/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log('success', data);
            alert('user added successfully');
            e.target.reset();
        })
    }

    return(
        <div>
            <h2>Update user: {user.name}</h2>
            <form onSubmit={handleUpdateUser}>
                <input type='text' name='name' placeholder='Name'></input><br></br>
                <input type='email' name='email' placeholder='Enter your email' required></input><br></br>
                <input type='Password' name='password' placeholder='Enter your password' required></input><br></br>
                <input type='submit' value='Update User'></input>
            </form>
        </div>
    );
};


export default UpdateUser;