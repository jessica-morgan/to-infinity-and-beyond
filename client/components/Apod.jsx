import React from 'react'

import {getInfo} from '../api'

export default class Apod extends React.Component {
    constructor (props) {
      super(props)
  
      this.state = {
        title: " ",
        image: " ",
        explaination: " ",
        date: " "
      }
  
    }
  
    componentDidMount () {
      getInfo()
      .then(apodInfo => {
        this.setState({
          title: apodInfo.title,
          image: apodInfo.url,
          explaination: apodInfo.explaination,
          date: apodInfo.date
        })
      })
    }
  
    render () {
      return (
        <div>

          <p className='apod-date'>
          {this.state.date}
          </p>
          <p className='apod-title'>
          {this.state.title}
          </p>
          <img className="apod-img" src={this.state.image}></img>
        </div>
      )
    }
  }
  
