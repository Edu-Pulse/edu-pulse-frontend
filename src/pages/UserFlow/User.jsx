import { useState, lazy } from "react";
import clsx from "clsx";
import { Link, useNavigate } from "react-router-dom";

import {
	ArrowLeftIcon,
	PencilIcon,
	Cog6ToothIcon,
	ShoppingCartIcon,
	PowerIcon,
} from "@heroicons/react/24/outline";
import { Suspense } from "react";

const PurchaseHistory = lazy(() =>
	import("../../components/UserPage/PurchaseHistory")
);
const ChangePassword = lazy(() =>
	import("../../components/UserPage/ChangePassword")
);
const UserProfile = lazy(() => import("../../components/UserPage/UserProfile"));

const User = () => {
	const [menuSelect, setMenuSelect] = useState("my-profile");
	const navigate = useNavigate();

	return (
		<main className="container flex flex-col min-h-screen mb-4 md:my-16 bg-darkblue-06 md:bg-white">
			<div className="max-w-[768px] w-full mx-auto my-4 text-darkblue-05 font-semibold">
				<Link
					to="/"
					className="flex items-center gap-4 px-4 py-2 transition-all duration-300 rounded-full hover:bg-blue-100 w-fit hover:cursor-pointer"
				>
					<ArrowLeftIcon className="w-5 h-5" />
					<p className="hidden md:block">Kembali ke Beranda</p>
					<p className="md:hidden font-bold !text-black text-2xl">
						Akun
					</p>
				</Link>
			</div>
			<section className="max-w-[768px] w-full mx-auto rounded-xl overflow-hidden md:border-2 md:border-darkblue-05">
				<div className="hidden w-full py-4 md:block bg-darkblue-05">
					<p className="font-semibold text-center text-white">Akun</p>
				</div>
				<div className="justify-between md:flex">
					<aside className="py-2 mb-12 bg-white divide-y rounded-lg md:mb-0 md:my-4 md:py-0 md:w-2/5 divide-solid md:rounded">
						<div
							className={clsx(
								"flex gap-4 py-3 px-4 hover:cursor-pointer hover:bg-gray-50",
								menuSelect === "my-profile" &&
									"font-bold text-darkblue-05"
							)}
							onClick={() => setMenuSelect("my-profile")}
						>
							<PencilIcon className="w-6 h-6 text-darkblue-05" />
							<p className="text-medium">Profil Saya</p>
						</div>
						<div
							className={clsx(
								"flex gap-4 py-3 px-4 hover:cursor-pointer hover:bg-gray-50",
								menuSelect === "change-password" &&
									"font-bold text-darkblue-05"
							)}
							onClick={() => setMenuSelect("change-password")}
						>
							<Cog6ToothIcon className="w-6 h-6 text-darkblue-05" />
							<p className="text-medium">Ubah Password</p>
						</div>
						<div
							className={clsx(
								"flex gap-4 py-3 px-4 hover:cursor-pointer hover:bg-gray-50",
								menuSelect === "purchase-history" &&
									"font-bold text-darkblue-05"
							)}
							onClick={() => setMenuSelect("purchase-history")}
						>
							<ShoppingCartIcon className="w-6 h-6 text-darkblue-05" />
							<p className="text-medium">Riwayat Pembayaran</p>
						</div>
						<div
							className={clsx(
								"flex gap-4 py-3 px-4 hover:cursor-pointer hover:bg-gray-50",
								menuSelect === "log-out" &&
									"font-bold text-darkblue-05"
							)}
							onClick={() => {
								localStorage.removeItem("token");
								return window.location.reload(navigate("/"));
							}}
						>
							<PowerIcon className="w-6 h-6 text-darkblue-05" />
							<p className="text-medium">Keluar</p>
						</div>
					</aside>
					<article className="md:w-3/5">
						<Suspense fallback={<p>Loading</p>}>
							{menuSelect === "my-profile" ? (
								<UserProfile />
							) : menuSelect === "change-password" ? (
								<ChangePassword />
							) : (
								menuSelect === "purchase-history" && (
									<PurchaseHistory />
								)
							)}
						</Suspense>
					</article>
				</div>
			</section>
		</main>
	);
};

export default User;
