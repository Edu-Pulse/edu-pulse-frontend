import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [token, setToken] = useState();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setToken(token);
    }
  }, []);

  useEffect(() => {
    const getMe = async () => {
      try {
        // const token = localStorage.getItem("token");

        const response = await axios.get(
          `https://pragos-academy-api-production.up.railway.app/user`
        );

        const data = response.data.data;

        console.log(data);
        setUser(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getMe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
