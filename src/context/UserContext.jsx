import React from "react";
import { userReducer, login, logout, defaultState } from "../lib/reducers";
import { loginRequest } from "../lib/server/server";
import { showReducer, showState } from "../lib/reducers/showReducer";

export const UserContext = React.createContext({});

export const UserProvider = ({ children }) => {
  const [user, dispatchUser] = React.useReducer(userReducer, defaultState);
  const [show, dispatchShow] = React.useReducer(showReducer, showState);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);
    const user = JSON.parse(localStorage.getItem("user")) || {};
    if (user) {
      dispatchUser(login(user));
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const loginAction = async (user) => {
    setIsLoading(true);
    try {
      const response = await loginRequest(user);
      if (response.status === 200) {
        localStorage.setItem("user", JSON.stringify(response.data));
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

  const logoutAction = () => {
    localStorage.removeItem("user");
    dispatchUser(logout);
  };

  const token = user.token;

  return (
    <UserContext.Provider
      value={{
        user,
        dispatchUser,
        loginAction,
        token,
        show,
        dispatchShow,
        isLoading,
        logoutAction,
        setIsLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export function useUserContext() {
  const {
    user,
    dispatchUser,
    loginAction,
    token,
    show,
    dispatchShow,
    isLoading,
    logoutAction,
    setIsLoading,
  } = React.useContext(UserContext);

  return {
    user,
    dispatchUser,
    loginAction,
    token,
    show,
    dispatchShow,
    isLoading,
    logoutAction,
    setIsLoading,
  };
}
