import { LOGIN, LOGOUT } from "./userAction";
export const defaultState = {
  user: {
    id: null,
    name: null,
    type: null,
    token: null,
  },
  isAuthenticated: false,
  isLoading: false,
};

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      const data = {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
      localStorage.setItem("user", JSON.stringify(data));
      return data;
    case LOGOUT:
      localStorage.removeItem("user");
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
