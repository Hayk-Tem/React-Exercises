import axios from 'axios';
import { useEffect, useState } from 'react'
import "./Todos.scss"

export default function Todos({limit}) {
    const [todos, setTodos] = useState([])

    useEffect(() => {
      axios("/todos", {
        params: {
            _limit: limit
        }
      })
      .then(res => {
        console.log(res.data);
        setTodos(res.data)
      })
      .catch(err => console.log(err))
    }, [limit])


  return (
    <div className='Todos'>
        {
            todos.map(todo => (
                <div className='Todos-item' key={todo.id}>
                    <h2>{todo.title}</h2>
                </div>
            ))
        }
    </div>
  )
}
