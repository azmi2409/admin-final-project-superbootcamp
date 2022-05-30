import React from "react";
import { userReducer, login, defaultState } from "../lib/reducers";
import { loginRequest } from "../lib/server/server";

export const UserContext = React.createContext({});

export const UserProvider = ({ children }) => {
  const [user, dispatchUser] = React.useReducer(userReducer, defaultState);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")) || {};
    if (user.user && user.isAuthenticated) {
      dispatchUser(login(user.user));
    }
  }, []);

  const loginAction = async (user) => {
    setIsLoading(true);
    try {
      const response = await loginRequest(user);
      if (response.status === 200) {
        console.log(response);
        dispatchUser(login(response.data));
        return {
          status: true,
          message: "Login Successful",
        };
      } else {
        return {
          status: false,
          message: "Login Failed",
        };
      }
    } catch (error) {
      console.log(error);
      return {
        status: false,
        message: "Login Failed",
      };
    } finally {
      setIsLoading(false);
    }
  };

  const isLogin = user.isAuthenticated;

  const token = user.user.token;

  return (
    <UserContext.Provider
      value={{ user, dispatchUser, loginAction, isLogin, token }}
    >
      {children}
    </UserContext.Provider>
  );
};
