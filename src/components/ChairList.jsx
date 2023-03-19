import React, { Component } from "react";
import { connect } from "react-redux";
import Chair from "./Chair";


export class ChairList extends Component {
  render() {
    const {chairList} = this.props
    return <div className="mt-4 d-flex flex-column align-items-center" style={{gap: 20}}>
        {chairList.map((item) => {
            return (
                <div>
                <div key={item.row} className='d-flex' style={{gap: 20}}>
                    <div className="rowNumber" style={{width: 40}}>{item.row}</div>
                    {item.chairList.map((chairItem) => {
                        return <Chair chair={chairItem} key={chairItem.seatNumber} />
                    })}
                </div>
                </div>
            )
        })}
    </div>;
  }
}

const mapStateToProps = (state) => {
    return {
        chairList: state.movieBookingReducer.chairList,
    }
}

export default connect (mapStateToProps, null) (ChairList)
