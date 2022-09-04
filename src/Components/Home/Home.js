import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const [users, setUsers] = useState([]);
    useEffect( ()=>{
        fetch('http://localhost:5000/users')
        .then(res => res.json())
        .then(data => setUsers(data));
    },[])

    const handleUserDelete = id =>{
        const confirm = window.confirm('Are you sure you want to delete');
        if(confirm){
            console.log('deleting user with id', id);
            const url = `http://localhost:5000/users/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                if(data.deletedCount > 0){
                    console.log('deleted');
                    const remaining = users.filter(user => user._id !== id);  
                    setUsers(remaining);
                }
            })
        }
        
    }
    return(
        <div>
            <h2>Available users: {users.length}</h2>
            <ul>
                {
                    users.map(user => <li key={user._id}>{user.name} :: {user.email}
                    <Link to={`/update/${user._id}`}><button>Update</button></Link>
                    <button onClick={() => handleUserDelete(user._id)}>X</button></li>)
                }
            </ul>

        </div>
    );
};

export default Home;