import React from 'react'

import {marsRoverSpirit} from '../api'

export default class MarsRoverSpirit extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
          data: []
      }
    }
    componentDidMount () {
        marsRoverSpirit()
        .then(marsSpiritInfo => {
            this.setState({
                data: marsSpiritInfo.photos
            }
          )
         
        })
      }
    render () {

      return (
          this.state.data.length ? 
          <div className='apod-font'>
          
              <h3 className='apod-font'>Navcam</h3>
                
                          
                  {this.state.data.map((obj) => {
                      return (
                          <div>
                       <p key={obj.earth_date}>{obj.earth_date}</p>
                      <img className='img' key={obj.img_src} src={obj.img_src}></img>
                      </div>
                      )
                  })}
 
          </div> : <div ></div>
      )
    }
  }
  
