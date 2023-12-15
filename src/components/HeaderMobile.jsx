import {
	HomeIcon,
	PlayIcon,
	QueueListIcon,
	BellIcon,
	UserIcon,
	ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";

import {
	HomeIcon as HomeIconSolid,
	PlayIcon as PlayIconSolid,
	QueueListIcon as QueueListIconSolid,
	BellIcon as BellIconSolid,
	UserIcon as UserIconSolid,
} from "@heroicons/react/24/solid";

import HeaderMobileNavMenu from "./UI/HeaderMobileNavMenu";

import axios from "axios";
import { useEffect, useState } from "react";

const HeaderMobile = () => {
	const [user, setUser] = useState("");

	useEffect(() => {
		const getMe = async () => {
			try {
				const response = await axios.get(
					`https://pragosacademy.et.r.appspot.com/user`
				);
				const data = response.data.data;
				setUser(data);
			} catch (error) {
				console.error(error);
			}
		};
		getMe();
	}, []);
	return (
		<nav className="fixed bottom-0 z-50 w-full bg-white shadow-md">
			<div className="flex justify-evenly mx-4">
				<HeaderMobileNavMenu
					name="Beranda"
					href="/"
					iconActive={<HomeIconSolid className="h-6 w-6" />}
					iconInactive={<HomeIcon className="h-6 w-6" />}
				/>
				{user && (
					<>
						<HeaderMobileNavMenu
							name="Notifikasi"
							href="/notifikasi"
							iconActive={<BellIconSolid className="h-6 w-6" />}
							iconInactive={<BellIcon className="h-6 w-6" />}
						/>
						<HeaderMobileNavMenu
							name="Video"
							href="/my-class"
							iconActive={<PlayIconSolid className="h-6 w-6" />}
							iconInactive={<PlayIcon className="h-6 w-6" />}
						/>
					</>
				)}
				<HeaderMobileNavMenu
					name="Kursus"
					href="/class-topic"
					iconActive={<QueueListIconSolid className="h-6 w-6" />}
					iconInactive={<QueueListIcon className="h-6 w-6" />}
				/>
				{user ? (
					<HeaderMobileNavMenu
						name="Akun"
						href="/user"
						iconActive={<UserIconSolid className="h-6 w-6" />}
						iconInactive={<UserIcon className="h-6 w-6" />}
					/>
				) : (
					<HeaderMobileNavMenu
						name="Masuk"
						href="/auth/login"
						iconActive={
							<ArrowRightOnRectangleIcon className="h-6 w-6" />
						}
						iconInactive={
							<ArrowRightOnRectangleIcon className="h-6 w-6" />
						}
					/>
				)}
			</div>
		</nav>
	);
};

export default HeaderMobile;
