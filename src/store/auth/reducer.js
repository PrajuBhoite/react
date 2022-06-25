import * as actionTypes from "./actionTypes";

const initialState = {
    user: null,
    token: null,
    error: null,
    loading: false,
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.LOGIN_START: {
        const updatedState = { ...state, loading: true };
        return updatedState;
      }
      default:
        return state;
    }
}