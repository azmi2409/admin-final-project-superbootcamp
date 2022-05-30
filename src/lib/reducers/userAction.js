export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const LOAD_USER = "LOAD_USER";

export const login = (user) => {
  return {
    type: LOGIN,
    payload: user,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const loadUser = (user) => {
  return {
    type: LOAD_USER,
    payload: user,
  };
};
