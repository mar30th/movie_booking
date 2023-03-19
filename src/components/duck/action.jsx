import { CHAIR_BOOKING, PURCHASE, REMOVE } from "./type";

export const chairBookingAct = (payload) => {
  return {
    type: CHAIR_BOOKING,
    payload,
  };
};

export const purchaseChair = () => {
  return {
    type: PURCHASE,
  };
};

export const removeChair = (seatNumber) => {
  return {
    type: REMOVE,
    payload: seatNumber,
  };
};
