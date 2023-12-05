import { createContext } from "react";

export const ValidationContext = createContext();

export const ValidationContextProvider = ({ children }) => {
	const handleEmailValidation = (email, setState) => {
		const isEmail = (type) => {
			return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(type);
		};
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
		const containsNumbers = (str) => {
			return /\d/.test(str);
		};

		if (containsNumbers(name)) {
			setState((current) => {
				return { ...current, isNameContainNumber: true };
			});
		} else {
			setState((current) => {
				return { ...current, isNameContainNumber: false };
			});
		}

		if (name.length === 0) {
			setState((current) => {
				return { ...current, isNameEmpty: true, isNameError: false };
			});
		} else if (name.length <= 2) {
			setState((current) => {
				return { ...current, isNameError: true, isNameEmpty: false };
			});
		} else {
			setState((current) => {
				return { ...current, isNameError: false, isNameEmpty: false };
			});
		}
	};

	const handlePhoneValidation = (phone, setState) => {
		if (phone.length === 0) {
			setState((current) => {
				return { ...current, isPhoneEmpty: true, isPhoneError: false };
			});
		} else if (
			(phone.length < 10 && phone.length > 0) ||
			phone.length > 14
		) {
			setState((current) => {
				return { ...current, isPhoneError: true, isPhoneEmpty: false };
			});
		} else {
			setState((current) => {
				return { ...current, isPhoneError: false, isPhoneEmpty: false };
			});
		}
	};

	const handleCityValidation = (city, setState) => {
		if (city.length === 0) {
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
		if (country.length === 0) {
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
		<ValidationContext.Provider
			value={{
				handleEmailValidation,
				handlePasswordValidation,
				handleNameValidation,
				handlePhoneValidation,
				handleCityValidation,
				handleCountryValidation,
			}}
		>
			{children}
		</ValidationContext.Provider>
	);
};
