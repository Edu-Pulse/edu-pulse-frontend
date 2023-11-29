import {
	HomeIcon,
	PlayIcon,
	QueueListIcon,
	BellIcon,
	UserIcon,
} from "@heroicons/react/24/outline";

import {
	HomeIcon as HomeIconSolid,
	PlayIcon as PlayIconSolid,
	QueueListIcon as QueueListIconSolid,
	BellIcon as BellIconSolid,
	UserIcon as UserIconSolid,
} from "@heroicons/react/24/solid";

import HeaderMobileNavMenu from "./UI/HeaderMobileNavMenu";

const HeaderMobile = () => {
	return (
		<nav className="fixed bottom-0 z-50 w-full bg-white shadow-md">
			<div className="flex justify-evenly mx-4">
				<HeaderMobileNavMenu
					name="Beranda"
					href="/"
					iconActive={<HomeIconSolid className="h-6 w-6" />}
					iconInactive={<HomeIcon className="h-6 w-6" />}
				/>
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
				<HeaderMobileNavMenu
					name="Kursus"
					href="/class-topic"
					iconActive={<QueueListIconSolid className="h-6 w-6" />}
					iconInactive={<QueueListIcon className="h-6 w-6" />}
				/>
				<HeaderMobileNavMenu
					name="Akun"
					href="/user"
					iconActive={<UserIconSolid className="h-6 w-6" />}
					iconInactive={<UserIcon className="h-6 w-6" />}
				/>
			</div>
		</nav>
	);
};

export default HeaderMobile;
