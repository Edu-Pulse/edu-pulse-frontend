import { createContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
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
			value={{ handleEmailValidation, handlePasswordValidation }}
		>
			{children}
		</AuthContext.Provider>
	);
};
