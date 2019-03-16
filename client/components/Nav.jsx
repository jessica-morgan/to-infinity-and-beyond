import React from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Apod from './Apod'

const Nav = () => {
 
  return (
    <div className='topnav'>
    
      <ul>
          <Link to='/'>Home</Link>  <Link to='/astronomy-picture-of-the-day'>Astronomy Picture of the Day</Link>   <Link to='/mars-rover-curiosity'>Mars Rover Curiosity</Link> <Link to='/mars-rover-spirit'>Mars Rover Spirit</Link>
           {/* <Link to='/mercury'>Mercury</Link> */}
           <br/>
      </ul>
    </div>
  )
}

export default Nav