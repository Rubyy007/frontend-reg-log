import React from 'react'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className='home'>
      <h2>Home Page</h2>
      <Link to={"/reg1"}>To Register</Link>
      <Link to={"/log"}>To Login</Link>
      
    </div>
  )
}

export default App