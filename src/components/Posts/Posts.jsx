import axios from 'axios';
import { useEffect, useState } from 'react'
import "./Posts.scss"

export default function Posts({limit}) {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios("/posts", {
      params: {
          _limit: limit
      }
    })
    .then(res => {
      console.log(res.data);
      setPosts(res.data)
    })
    .catch(err => console.log(err))
  }, [limit])


  return (
    <div className='Posts'>
      {
        posts?.map(post => (
          <div className='Posts-item' key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))
      }
    </div>
  )
}

