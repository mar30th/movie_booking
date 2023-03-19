import React, { Component } from "react";
import { connect } from "react-redux";
import { purchaseChair, removeChair, chairBookingAct } from "./duck/action";

export class Result extends Component {
  render() {
    const {chairBooking, purchaseChairBooking, onRemoveChair, bookingChair} = this.props
    return (
      <div className="mt-5">
        <h1 className="text-white">Booking List</h1>
        <div className="mt-3">
          <div className="d-flex">
            <button className="seatBooked"></button>
            <p className="text-white ms-3" style={{lineHeight: 2}}>Booked chair</p>
          </div>
          <div className="d-flex">
            <button className="seatBooking"></button>
            <p className="text-white ms-3" style={{lineHeight: 2}}>Booking chair</p>
          </div>
          <div className="d-flex">
            <button className="chair"></button>
            <p className="text-white ms-3" style={{lineHeight: 2}}>Available chair</p>
          </div>
        </div>
        <div className="mt-5">
            <table className="table text-white">
                <thead>
                    <tr>
                        <td>Seat Number</td>
                        <td>Price</td>
                        <td>Remove</td>
                    </tr>
                </thead>
                <tbody>
                    {chairBooking.map((chair) => {
                        return (
                            <tr key={chair.seatNumber} className='text-warning'>
                                <td>{chair.seatNumber}</td>
                                <td>{chair.price.toLocaleString()}$</td>
                                <td><button className="btn btn-danger" onClick={() => onRemoveChair(chair.seatNumber)}>X</button></td>
                            </tr>
                        )
                    })}
                </tbody>
                <tfoot>
                    <td>Total</td>
                    <td className="text-warning">
                    {chairBooking.reduce((sum, chair) => {
                        return (sum += chair.price)
                    }, 0).toLocaleString()}{''}$
                    </td>
                    <button className="btn btn-success" onClick={(purchaseChairBooking)}>Purchase</button>
                </tfoot>
            </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        chairBooking: state.movieBookingReducer.chairBooking,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        purchaseChairBooking: () => {
            dispatch(purchaseChair())
        },
        onRemoveChair: (seatNumber) => {
            console.log(seatNumber);
            dispatch(removeChair(seatNumber));
        },
        bookingChair: (payload) => {
            dispatch(chairBookingAct(payload))
        },
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (Result);
