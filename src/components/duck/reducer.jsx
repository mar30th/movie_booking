import data from "./data.json";
import { CHAIR_BOOKING, PURCHASE, REMOVE } from "./type";

const initialState = {
  chairList: data,
  chairBooking: [],
};

export const movieBookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHAIR_BOOKING: {
      const cloneData = [...state.chairBooking];
      const index = cloneData.findIndex(
        (chair) => chair.seatNumber === action.payload.seatNumber
      );
      if (index !== -1) {
        cloneData.splice(index, 1);
      } else {
        cloneData.push(action.payload);
      }

      return { ...state, chairBooking: cloneData };
    }

    case PURCHASE: {
      const chairBookingList = state.chairBooking.map((e) => e.seatNumber);
      const data = state.chairList.map((item) => {
        const newChairList = item.chairList.map((chair) => {
          if (chairBookingList.includes(chair.seatNumber)) {
            chair.isBooked = true;
          }
          return chair;
        });
        return {
          ...item,
          chairList: newChairList,
        };
      });
      return { ...state, chairList: data, chairBooking: [] };
    }

    case REMOVE: {
      const cloneChairBooking = [...state.chairBooking];
      // const index = cloneChairBooking.findIndex((chair) => chair.seatNumber === action.payload);
      // if(index = -1){
      //   cloneChairBooking.splice(index, 1)
      // }
      // return { ...state, chairBooking: cloneChairBooking };
      for (let i in cloneChairBooking) {
        if (cloneChairBooking[i].seatNumber === action.payload) {
          console.log(action.payload);
          console.log(cloneChairBooking[i].seatNumber);
          cloneChairBooking.splice(i, 1)
        }}
        state.chairBooking = cloneChairBooking;
        return { ...state };
      
    }
    default:
      return state;
  }
};
