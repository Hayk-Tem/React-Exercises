import axios from 'axios';
import { useEffect, useState } from 'react'
import "./Comments.scss"

export default function Comments({limit}) {

    const [comments, setComments] = useState([])

    useEffect(() => {
      axios("/comments", {
        params: {
            _limit: limit
        }
      })
      .then(res => {
        console.log(res.data);
        setComments(res.data)
      })
      .catch(err => console.log(err))
    }, [limit])

  return (
    <div className='Comments'>
        {
        comments?.map(comment => (
            <div className='Comments-item' key={comment.id}>
                <h2>{comment.name}</h2>
                <p>{comment.email}</p>
                <p>{comment.body}</p>
            </div>
        ))
    }
        </div>
  )
}
