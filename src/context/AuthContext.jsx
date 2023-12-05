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

  const handleNameValidation = (name, setState) => {
		if (name.length <= 2) {
			setState((current) => {
				return { ...current, isNameError: true };
			});
		} else {
			setState((current) => {
				return { ...current, isNameError: false };
			});
		}
	};

  const handlePhoneValidation = (phone, setState) => {
		if (phone.length < 10 || phone.length > 14) {
			setState((current) => {
				return { ...current, isPhoneError: true };
			});
		} else {
			setState((current) => {
				return { ...current, isPhoneError: false };
			});
		}
	};

  const handleCityValidation = (city, setState) => {
    if (
      (city.length === 0)
    ) {
      setState((current) => {
        return { ...current, isCityError: true };
      });
    } else {
      setState((current) => {
        return { ...current, isCityError: false };
      });
    }
  };

  const handleCountryValidation = (country, setState) => {
    if (
      (country.length === 0)
    ) {
      setState((current) => {
        return { ...current, isCountryError: true };
      });
    } else {
      setState((current) => {
        return { ...current, isCountryError: false };
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{ handleEmailValidation, handlePasswordValidation, handleNameValidation, handlePhoneValidation, handleCityValidation, handleCountryValidation, user, token }}
    >
      {children}
    </AuthContext.Provider>
  );
};