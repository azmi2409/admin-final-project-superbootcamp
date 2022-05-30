import React from "react";
import { userReducer, login, defaultState } from "../lib/reducers";
import { loginRequest } from "../lib/server/server";

export const UserContext = React.createContext({});

export const UserProvider = ({ children }) => {
  const [user, dispatchUser] = React.useReducer(userReducer, defaultState);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    const user = localStorage.getItem("user");
    if (user.token) {
      dispatchUser(login(JSON.parse(user)));
    }
  }, []);

  const loginAction = async (user) => {
    setIsLoading(true);
    try {
      const response = await loginRequest(user);
      console.log(response);
      dispatchUser(login(response));
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <UserContext.Provider value={{ user, dispatchUser, loginAction }}>
      {children}
    </UserContext.Provider>
  );
};
