import Button from "./UI/Button";
import {
	ArrowRightOnRectangleIcon,
	MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

const Header = () => {
	return (
		<header className="bg-darkblue-05 py-3 fixed top-0 w-full z-50">
			<nav className="container flex justify-between items-center">
				<div>
					<p className="text-xl font-semibold text-white">
						Pragos Academy
					</p>
				</div>
				<div className="flex items-center w-1/3">
					<input
						type="text"
						className="py-3 px-4 rounded-2xl w-full outline-none"
					/>
					<span className="p-2 -ml-11 text-white rounded-xl bg-darkblue-05 hover:cursor-pointer">
						<MagnifyingGlassIcon className="h-5 w-5" />
					</span>
				</div>
				<div>
					<Button
						icon={<ArrowRightOnRectangleIcon className="w-5 h-5" />}
						iconPosition="left"
						size="md"
					>
						Masuk
					</Button>
				</div>
			</nav>
		</header>
	);
};

export default Header;
