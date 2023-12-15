/* eslint-disable no-mixed-spaces-and-tabs */
import { twMerge } from "tailwind-merge";
import PropTypes from "prop-types";
import Spinner from "./Spinner";
const Button = ({
	children,
	className = "",
	icon = null,
	iconPosition = "right",
	onClick,
	color = "primary",
	disabled = false,
	outline = false,
	size = "lg",
	type = "",
	loading = false,
	loadingText = "Memproses",
}) => {
	const buttonClasses = twMerge(
		className,
		"text-center items-center rounded-2xl font-medium flex gap-2 justify-center items-center",
		size === "sm"
			? "px-3 py-1"
			: size === "md"
			? "px-4 py-2"
			: size === "lg"
			? "px-6 py-3"
			: size === "xs" && "px-4 h-8",
		!outline
			? {
					primary:
						"bg-darkblue-05 text-white hover:bg-purple-800 transition-all duration-200",
					danger: "bg-red-600 text-white hover:bg-red-700 transition-all duration-200",
					warning:
						"bg-yellow-600 text-white hover:bg-yellow-700 transition-all duration-200",
					success:
						"bg-green-600 text-white hover:bg-green-700 transition-all duration-200",
					white: "bg-white text-black hover:bg-gray-200 transition-all duration-200",
			  }[color]
			: {
					primary:
						"border-2 border-darkblue-05 text-black hover:bg-darkblue-05 hover:text-white transition-all duration-200",
					danger: "border-2 border-red-600 text-black hover:bg-red-600 hover:text-white transition-all duration-200",
					warning:
						"border-2 border-yellow-600 text-black hover:bg-yellow-600 hover:text-white transition-all duration-200",
					success:
						"border-2 border-green-600 text-black hover:bg-green-600 hover:text-white transition-all duration-200",
					white: "bg-white text-black hover:bg-gray-200 transition-all duration-200",
			  }[color]
	);

	return (
		<button
			onClick={onClick}
			className={buttonClasses}
			disabled={disabled}
			type={type.length !== 0 && type}
		>
			{icon && iconPosition === "left" && icon}
			<span>
				{loading ? (
					<span className="flex gap-2">
						<Spinner
							color="fill-white text-neutral-300/50"
							size="w-6 h-6"
						/>{" "}
						{loadingText}
					</span>
				) : (
					children
				)}
			</span>
			{icon && iconPosition === "right" && icon}
		</button>
	);
};

Button.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	icon: PropTypes.any,
	iconPosition: PropTypes.oneOf(["left", "right"]),
	onClick: PropTypes.func,
	color: PropTypes.oneOf([
		"primary",
		"danger",
		"success",
		"warning",
		"white",
	]),
	outline: PropTypes.bool,
	disabled: PropTypes.bool,
	size: PropTypes.oneOf(["sm", "md", "lg"]),
	type: PropTypes.string,
	loading: PropTypes.bool,
	loadingText: PropTypes.string,
};

export default Button;
