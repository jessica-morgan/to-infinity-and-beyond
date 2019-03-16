import React from 'react'

import {marsRoverCuriosity} from '../api'

export default class MarsRoverCuriosity extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
          data: []
      }
    }
    componentDidMount () {
        marsRoverCuriosity()
        .then(marsCuriosityInfo => {
            this.setState({
                data: marsCuriosityInfo.photos
            }
          )
         
        })
      }
    render () {
        console.log(this.state.data)
      return (
          this.state.data.length ? 
          <div className='apod-font'>
              {/* <h2 className='apod-font'>Mars Rover Curiosity</h2> */}
             
              <h3 className='apod-font'>Navcam</h3>
              
                  {this.state.data.map((obj) => {
                      return (
                          <div>
                         {/* <ul key={obj.earth_date}> */}
                       <p>{obj.earth_date}</p>
                      <img className='img' src={obj.img_src}></img>
                      {/* </ul> */}
                    </div>
                      )
                  })}
                 
          </div> : <div ></div>
      )
    }
  }