import { Link } from "react-router-dom";

import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { BellIcon } from "@heroicons/react/24/solid";

const Notification = () => {
	return (
		<main className="container flex justify-center flex-col min-h-screen">
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
					<p className="text-center text-white font-semibold">
						Notifikasi
					</p>
				</div>
				<div className="my-2 space-y-2">
					<div className="px-4 py-2 flex items-center gap-4">
						<div className="p-1 rounded-full bg-darkblue-05 w-fit text-white">
							<BellIcon className="h-5 w-5" />
						</div>
						<div className="w-full">
							<div className="flex justify-between w-full">
								<p className="font-semibold text-darkblue-05">
									Promosi
								</p>
								<p className="flex gap-2 items-center text-sm">
									<span>2 Maret, 12.00</span>
									<div className="w-3 h-3 rounded-full bg-alert-success" />
								</p>
							</div>
							<div>
								<p className="text-sm font-semibold">
									Dapatkan Potongan 50% selama Bulan Maret!
								</p>
								<p className="text-sm text-gray-500">
									Syarat dan Ketentuan berlaku!
								</p>
							</div>
						</div>
					</div>
					<div className="px-4 py-2 flex items-center gap-4">
						<div className="p-1 rounded-full bg-darkblue-05 w-fit text-white">
							<BellIcon className="h-5 w-5" />
						</div>
						<div className="w-full">
							<div className="flex justify-between w-full">
								<p className="font-semibold text-darkblue-05">
									Notifikasi
								</p>
								<p className="flex gap-2 items-center text-sm">
									<span>1 Maret, 10.00</span>
									<div className="w-3 h-3 rounded-full bg-alert-warning" />
								</p>
							</div>
							<div>
								<p className="text-sm font-semibold">
									Password berhasil diubah
								</p>
							</div>
						</div>
					</div>
					<div className="px-4 py-2 flex items-center gap-4">
						<div className="p-1 rounded-full bg-darkblue-05 w-fit text-white">
							<BellIcon className="h-5 w-5" />
						</div>
						<div className="w-full">
							<div className="flex justify-between w-full">
								<p className="font-semibold text-darkblue-05">
									Promosi
								</p>
								<p className="flex gap-2 items-center text-sm">
									<span>1 Maret, 09.00</span>
									<div className="w-3 h-3 rounded-full bg-alert-success" />
								</p>
							</div>
							<div>
								<p className="text-sm font-semibold">
									Dapatkan Potongan 50% selama Bulan Maret!
								</p>
								<p className="text-sm text-gray-500">
									Syarat dan Ketentuan berlaku!
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Notification;
