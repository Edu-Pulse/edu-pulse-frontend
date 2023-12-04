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
        const token = localStorage.getItem("token");

        const response = await axios.get(
          `https://pragos-academy-api-production.up.railway.app/user`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
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

  const handleEmailValidation = (email, setState) => {
    const isEmail = (type) => {
      return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(type);
    };
    console.log(isEmail(email));
    if (isEmail(email)) {
      setState((current) => {
        return { ...current, isEmailError: false };
      });
    } else {
      setState((current) => {
        return { ...current, isEmailError: true };
      });
    }
  };

  const handlePasswordValidation = (password, setState) => {
    if (
      (password.length < 8 && password.length !== 0) ||
      password.length > 20
    ) {
      setState((current) => {
        return { ...current, isPasswordError: true };
      });
    } else {
      setState((current) => {
        return { ...current, isPasswordError: false };
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{ handleEmailValidation, handlePasswordValidation, user, token }}
    >
      {children}
    </AuthContext.Provider>
  );
};
