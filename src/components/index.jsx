import React, { Component } from 'react'
import ChairList from './ChairList'
import './home.css'
import Result from './Result'

export class Home extends Component {
  render() {
    return (
        <div className="home pt-5">
      <div className='container'>
        <div className="row">
            <div className="col-8">
                <h1 className='text-warning'>Movie Booking</h1>
                <h4 className='text-warning'>SCREEN</h4>
                <div className='screen d-flex justify-content-center'></div>
                <ChairList />
            </div>
            <div className="col-4">
                <Result />
            </div>
        </div>
      </div>
      </div>
    )
  }
}

export default Home