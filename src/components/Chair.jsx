import clsx from 'clsx'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { chairBookingAct } from './duck/action'

export class Chair extends Component {
  render() {
    const {chair, chairBooking, bookingChair} = this.props
    return (
      <button className={clsx('chair', {
        seatBooked: chair.isBooked,
        seatBooking: !!chairBooking.find(item => item.seatNumber === chair.seatNumber)
      })}
      disabled={chair.isBooked}
      onClick={() => {bookingChair(chair)}}>
        {chair.seatNumber}
      </button>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        chairBooking: state.movieBookingReducer.chairBooking,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        bookingChair: (payload) => {
            dispatch(chairBookingAct(payload))
        },
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (Chair)