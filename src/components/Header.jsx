import Button from "./UI/Button";
import {
	ArrowRightOnRectangleIcon,
	MagnifyingGlassIcon,
	QueueListIcon,
	BellIcon,
	UserIcon,
} from "@heroicons/react/24/outline";
import HeaderNavMenu from "./UI/HeaderNavMenu";
import { Link } from "react-router-dom";

const Header = () => {
	const isLoggedIn = true;
	return (
		<header className="fixed top-0 z-50 w-full py-3 bg-darkblue-05">
			<nav className="container flex items-center justify-between">
				<div className="md:w-1/3">
					<Link to="/" className="text-xl font-semibold text-white">
						Pragos Academy
					</Link>
				</div>
				<search className="items-center hidden md:flex md:w-1/3">
					<input
						type="search"
						className="w-full px-4 py-3 outline-none rounded-2xl"
					/>
					<span className="p-2 text-white -ml-11 rounded-xl bg-darkblue-05 hover:cursor-pointer">
						<MagnifyingGlassIcon className="w-5 h-5" />
					</span>
				</search>
				<div className="flex items-center justify-end md:w-1/3">
					{isLoggedIn ? (
						<div className="flex gap-2">
							<HeaderNavMenu
								href="/my-class"
								path={"/my-class"}
								icon={<QueueListIcon className="w-5 h-5" />}
								name="Kelas"
							/>
							<HeaderNavMenu
								href="/notifikasi"
								path={"/notifikasi"}
								icon={<BellIcon className="w-5 h-5" />}
								name="Notifikasi"
							/>
							<HeaderNavMenu
								href="/user"
								path={"/user"}
								icon={<UserIcon className="w-5 h-5" />}
								name="Akun"
							/>
						</div>
					) : (
						<Button
							icon={
								<ArrowRightOnRectangleIcon className="w-5 h-5" />
							}
							iconPosition="left"
							size="md"
						>
							Masuk
						</Button>
					)}
				</div>
			</nav>
		</header>
	);
};

export default Header;
