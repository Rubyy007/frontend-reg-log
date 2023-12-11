import React from 'react'
import { Link } from 'react-router-dom'

function home() {
  return (
    <>
    <h1>Home Page</h1>
    <h2>welcome </h2>
    <Link to={"/"}>back to Main Page</Link>
    </>
  )
}

export default home