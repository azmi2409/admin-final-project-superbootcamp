import { LOGIN, LOGOUT } from "./userAction";
export const defaultState = {
  id: null,
  name: null,
  type: null,
  token: null,
};

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      const data = {
        ...state,
        ...action.payload,
      };
      return data;
    case LOGOUT:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
