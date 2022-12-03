import React from 'react'
import { BrowserRouter, Link } from "react-router-dom";

function Montado() {
  return (
    <div>
       <ul className='lista'>
        <li>
          <Link to="/home" >Home</Link>
        </li>
        <li>
          <Link to="/about" >About</Link>
        </li>
        <li>
          <Link to="/dashboard" >Dashboard</Link>
        </li>
        <li>
          <Link to="/header" >Header</Link>
        </li>
      </ul>
    </div>
  )
}

export default Montado