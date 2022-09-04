import React from "react";

const AddUser = () => {
    const handleAddUser= e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password= e.target.password.value;

        const user = {name, email, password};
        //send data to the server

        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
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
            <h1>please add a new user</h1>
            <form onSubmit={handleAddUser}>
                <input type='text' name='name' placeholder='Name'></input><br></br>
                <input type='email' name='email' placeholder='Enter your email' required></input><br></br>
                <input type='Password' name='password' placeholder='Enter your password' required></input><br></br>
                <input type='submit' value='Add User'></input>
            </form>
        </div>
    );
};

export default AddUser;