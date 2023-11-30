import PropTypes from "prop-types";
import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";

const HeaderNavMenu = ({ path, icon, name, href }) => {
	const location = useLocation();
	return (
		<Link
			aria-describedby={`tooltip-${name}`}
			to={href}
			className={clsx(
				"relative flex items-center px-3 py-1 gap-2 hover:cursor-pointer  text-white transition-all duration-300 rounded-full w-fit over group hover:bg-darkblue-03",
				location.pathname === path && "bg-darkblue-03"
			)}
		>
			{icon}
			<span
				className={clsx(
					"hidden w-0 transition-all duration-100 opacity-0",
					location.pathname === path && "!block !w-fit !opacity-100"
				)}
			>
				{name}
			</span>
			<div
				role="tooltip"
				className="opacity-0 transition-all duration-100 delay-1000 group-hover:opacity-100  -bottom-8 absolute z-[100]"
				id={`tooltip-${name}`}
			>
				<span className="text-sm bg-black/50 rounded-sm border px-2">
					{name}
				</span>
			</div>
		</Link>
	);
};

HeaderNavMenu.propTypes = {
	path: PropTypes.string,
	icon: PropTypes.element,
	name: PropTypes.string,
	href: PropTypes.string,
};

export default HeaderNavMenu;
