import { Link } from "react-router-dom";

import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { BellIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

import { db } from "@/lib/firebase";
import { ref, onValue } from "firebase/database";
import noData from "@/assets/svg/nodata.svg";
import { formatDateTime } from "@/lib/dateFormatter";

const Notification = () => {
	const [notifications, setNotifications] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const notificationsRef = ref(db, "NOTIFICATION");

				const onNotificationsChange = (snapshot) => {
					const data = snapshot.val();

					const notificationsArray = data ? Object.values(data) : [];

					setNotifications(notificationsArray);
				};

				onValue(notificationsRef, onNotificationsChange);
			} catch (error) {
				console.error("Error fetching notifications:", error.message);
			}
		};

		fetchData();
	}, []);

	return (
		<main className="container flex flex-col min-h-screen md:justify-center sm:my-24 mx-auto">
			<div className="max-w-[768px] w-full mx-auto my-4 text-darkblue-05 font-semibold">
				<Link
					to="/"
					className="flex items-center gap-4 px-4 py-2 transition-all duration-300 rounded-full hover:bg-blue-100 w-fit hover:cursor-pointer"
				>
					<ArrowLeftIcon className="w-5 h-5" />
					<p className="hidden md:block">Kembali ke Beranda</p>
					<p className="text-2xl font-bold !text-black md:hidden">
						Notifikasi
					</p>
				</Link>
			</div>
			<section className="max-w-[768px] max-h-screen w-full mx-auto relative rounded-xl overflow-y-scroll no-scrollbar md:border-2 md:border-darkblue-05">
				<div className="hidden w-full py-4 md:block bg-darkblue-05 sticky top-0 z-20">
					<p className="font-semibold text-center text-white">
						Notifikasi
					</p>
				</div>
				<div className="my-2 space-y-2 divide-y">
					{notifications.length !== 0 ? (
						notifications.map((notification, index) => {
							return (
								<div
									className="flex gap-4 py-2 md:items-center md:px-4"
									key={index}
								>
									<div className="p-1 text-white rounded-full h-fit bg-darkblue-05 w-fit">
										<BellIcon className="w-4 h-4" />
									</div>
									<div className="w-full space-y-1">
										<div className="sm:flex justify-between w-full">
											<p className="font-semibold text-darkblue-05">
												{notification.sender}
											</p>
											<p className="flex justify-between items-center gap-2 text-sm">
												<span>
													{formatDateTime(
														notification.dateTime
													)}
												</span>
												<span className="w-3 h-3 rounded-full bg-alert-success" />
											</p>
										</div>
										<div>
											<p className="mb-1 text-sm font-semibold">
												{notification.text}
											</p>
										</div>
									</div>
								</div>
							);
						})
					) : (
						<div className="w-full h-full grid place-content-center">
							<img
								src={noData}
								alt="No Data"
								className="w-full"
							/>
							<p className="text-gray-700 text-center">
								Tidak ada notifikasi
							</p>
						</div>
					)}
				</div>
			</section>
		</main>
	);
};

export default Notification;
