import React ,{useEffect, useState} from 'react'

const ClUsers = () => {

    const [user, setUser] = useState([]);

    useEffect(() => {
        const fetchUsers = async() =>{
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await res.json();
            setUser(data);
        }
        
        fetchUsers();
    },[]);

  return (
    <div>
        {(user.length === 0) ? (
            <h3>Loading..</h3>
        ) :(
            user.map(item => (
                <h3>{item.id} : {item.name}</h3>
            ))
        )}
    </div>
  )
}

export default ClUsers