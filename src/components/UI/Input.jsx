import PropTypes from "prop-types";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import clsx from "clsx";

const Input = ({
	name,
	label,
	type,
	value,
	onChange,
	placeholder,
	className,
	isError = false,
}) => {
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);
	const [inputType, setInputType] = useState(type);

	useEffect(() => {
		if (type === "password") {
			setInputType("password");
		} else {
			setInputType(type);
		}
	}, [type]);

	useEffect(() => {
		if (isPasswordVisible) {
			setInputType("text");
		} else {
			setInputType(type);
		}
	}, [isPasswordVisible, type]);

	return (
		<div className={className}>
			<label htmlFor={name} className="text-[14px] mb-1">
				{label}
			</label>
			<div className="flex items-center w-full">
				<input
					className={clsx(
						"py-2 px-4 w-full rounded-2xl border-2 outline-none focus:outline-darkblue-05 transition-all duration-300 hover:border-gray-400",
						isError ? "border-red-600" : "border-neutral-02"
					)}
					placeholder={placeholder}
					type={inputType}
					value={value}
					onChange={onChange}
				/>
				{type === "password" && (
					<span
						className="-ml-8"
						onClick={() => setIsPasswordVisible(!isPasswordVisible)}
					>
						{isPasswordVisible ? (
							<EyeIcon className="w-5 h-5 text-gray-500" />
						) : (
							<EyeSlashIcon className="w-5 h-5 text-gray-500" />
						)}
					</span>
				)}
			</div>
		</div>
	);
};

Input.propTypes = {
	name: PropTypes.string,
	label: PropTypes.string,
	type: PropTypes.oneOf(["text", "email", "password", "number"]),
	value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	onChange: PropTypes.func,
	placeholder: PropTypes.string,
	className: PropTypes.string,
	isError: PropTypes.bool,
};

export default Input;
