import React from 'react'
import { Route } from 'react-router-dom'
import Home from './Home'
import Apod from './Apod'
import Nav from './Nav'
import MarsRoverSpirit from './MarsRoverSpirit'
import MarsRoverCuriosity from './MarsRoverCuriosity'
// import Mercury from './Mercury'

const App = () => {
  return (
    <div>
      <Nav/>
      <br/>
      <div>
          <Route exact path="/" component={Home} />
          <Route path="/astronomy-picture-of-the-day" component={Apod} />
          <Route path="/mars-rover-spirit" component={MarsRoverSpirit}/>
          <Route path="/mars-rover-curiosity" component={MarsRoverCuriosity}/>
          {/* <Route path="/mercury" component={Mercury}/> */}
  </div>
    </div>
  
  )
}

export default App
