import axios from 'axios'
import { useEffect, useState } from 'react'
import "./Users.scss"

export default function Users({limit}) {
    const [users, setUsers] = useState([])

    useEffect(() => {
      axios("/users", {
        params: {
            _limit: limit
        }
      })
      .then(res => {
        console.log(res.data);
        setUsers(res.data)
      })
      .catch(err => console.log(err))
    }, [limit])

    console.log(users);
    
  return (
    <div className='Users'>
        {
            users?.map(user => (
                <div className='Users-item' key={user.id}>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                </div>
            ))
        }
    </div>
  )
}
