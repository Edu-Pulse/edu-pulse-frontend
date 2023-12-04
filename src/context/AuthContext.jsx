import { createContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const handleEmailValidation = (email, setState) => {
		const isEmail = (type) => {
			return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(type);
		};
		console.log(isEmail(email));
		if (!isEmail(email)) {
			setState((current) => {
				return { ...current, isEmailError: true };
			});
		} else {
			setState((current) => {
				return { ...current, isEmailError: false };
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

	return (
		<AuthContext.Provider
			value={{
				handleEmailValidation,
				handlePasswordValidation,
				handleNameValidation,
				handlePhoneValidation,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
