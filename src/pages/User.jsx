import { useState, lazy } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

import {
	ArrowLeftIcon,
	PencilIcon,
	Cog6ToothIcon,
	ShoppingCartIcon,
	PowerIcon,
} from "@heroicons/react/24/outline";
import { Suspense } from "react";

const PurchaseHistory = lazy(() =>
	import("../components/UserPage/PurchaseHistory")
);
const ChangePassword = lazy(() =>
	import("../components/UserPage/ChangePassword")
);
const UserProfile = lazy(() => import("../components/UserPage/UserProfile"));

const User = () => {
	const [menuSelect, setMenuSelect] = useState("my-profile");

	return (
		<main className="container flex justify-center flex-col min-h-screen my-24">
			<div className="max-w-[768px] w-full mx-auto my-4 text-darkblue-05 font-semibold">
				<Link
					to="/"
					className="px-4 py-2 flex gap-4 items-center hover:bg-blue-100 w-fit rounded-full hover:cursor-pointer transition-all duration-300"
				>
					<ArrowLeftIcon className="w-5 h-5" />
					<p>Kembali ke Beranda</p>
				</Link>
			</div>
			<section className="max-w-[768px] w-full mx-auto rounded-xl overflow-hidden border-2 border-darkblue-05">
				<div className="w-full py-4 bg-darkblue-05">
					<p className="text-center text-white font-semibold">Akun</p>
				</div>
				<div className="flex justify-between">
					<aside className="my-4 divide-solid divide-y w-2/5">
						<div
							className={clsx(
								"flex gap-4 py-3 px-4 hover:cursor-pointer hover:bg-blue-50",
								menuSelect === "my-profile" &&
									"font-bold text-darkblue-05"
							)}
							onClick={() => setMenuSelect("my-profile")}
						>
							<PencilIcon className="h-6 w-6 text-darkblue-05" />
							<p className="text-medium">Profil Saya</p>
						</div>
						<div
							className={clsx(
								"flex gap-4 py-3 px-4 hover:cursor-pointer hover:bg-blue-50",
								menuSelect === "change-password" &&
									"font-bold text-darkblue-05"
							)}
							onClick={() => setMenuSelect("change-password")}
						>
							<Cog6ToothIcon className="h-6 w-6 text-darkblue-05" />
							<p className="text-medium">Ubah Password</p>
						</div>
						<div
							className={clsx(
								"flex gap-4 py-3 px-4 hover:cursor-pointer hover:bg-blue-50",
								menuSelect === "purchase-history" &&
									"font-bold text-darkblue-05"
							)}
							onClick={() => setMenuSelect("purchase-history")}
						>
							<ShoppingCartIcon className="h-6 w-6 text-darkblue-05" />
							<p className="text-medium">Riwayat Pembayaran</p>
						</div>
						<div
							className={clsx(
								"flex gap-4 py-3 px-4 hover:cursor-pointer hover:bg-blue-50",
								menuSelect === "log-out" &&
									"font-bold text-darkblue-05"
							)}
							onClick={() => setMenuSelect("log-out")}
						>
							<PowerIcon className="h-6 w-6 text-darkblue-05" />
							<p className="text-medium">Keluar</p>
						</div>
					</aside>
					<article className="w-3/5">
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
