import axios from 'axios'
import Users from './components/Users/Users'
import Posts from './components/Posts/Posts'
import Comments from './components/Comments/Comments'
import Todos from './components/Todos/Todos'
import { useState } from 'react'
import classNames from 'classnames'

import './App.scss'
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com"

// users
//todos
//posts
//comments

export default function App() {

  const [page, setPage] = useState("")

  const changePage = (str) => {
    setPage(str)
  }

  const renderPage = () => {
    switch (page) {
      case "users":
           return <Users limit={10}/>
      case "todos":
        return <Todos limit={10}/>
        case "comments":
          return <Comments limit={10}/> 
      case "posts":
        return <Posts limit={10}/> 
      default:
        return null;
    }
  }
  
  return (
    <div className='App'>
      <div className='App-buttons'>
        <button onClick={() => changePage("users")} className={classNames({
          active: page === "users" ? true : false
        })}>users</button>
        <button onClick={() => changePage("posts")} className={classNames({
          active: page === "posts" ? true : false
        })}>posts</button>
        <button onClick={() => changePage("comments")} className={classNames({
          active: page === "comments" ? true : false
        })}>comments</button>
        <button onClick={() => changePage("todos")} className={classNames({
          active: page === "todos" ? true : false
        })}>todos</button>
      </div>
      <div className='App-content'>
          {renderPage()}
      </div>
    </div>
  )
}
