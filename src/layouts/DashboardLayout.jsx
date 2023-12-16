import { Outlet, useNavigate } from "react-router-dom";
import Icon from "@/assets/svg/Icon-Dashboard.svg";
import logo from "@/assets/svg/Logo-Belajar.svg";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Sidebar from "@/components/Admin/Sidebar";

const DashboardLayout = () => {
	const navigate = useNavigate();

	return (
		<main className="md:flex h-full w-full">
			<aside className="md:block hidden w-[15%] h-screen bg-darkblue-05">
				<div className="px-5 ">
					<img
						src={logo}
						alt="logo-belajar"
						className=" h-[150px]"
						onClick={() => navigate("/")}
					/>
				</div>
				<div className="text-white font-Montserrat text-[16px] font-bold leading-[36px]">
					<Sidebar
						href="/dashboard"
						path="/dashboard"
						name="Dashboard"
					/>
					<Sidebar
						href="/dashboard/kelolakelas"
						path="/dashboard/kelolakelas"
						name="Kelola Kelas"
					/>
					<Sidebar href="/admin" path="/admin" name="Keluar" />
				</div>
			</aside>
			<main className="md:w-[85%]">
				<section className="md:w-[100%] sm:w-[100%] w-[100%] flex sm:px-[65px] px-3 h-20 sm:gap-x-32 bg-darkblue-06">
					<div className="h-full md:w-[50%] w-full pt-6 font-Montserrat text-[24px] font-bold leading-[36px] text-darkblue-05">
						Hi, Admin!
					</div>
					<div className="flex items-center sm:w-[300px] w-full">
						<input
							type="text"
							className="py-3 px-4 rounded-2xl w-full outline-none"
							placeholder="Cari"
						/>
						<span className="p-2 -ml-11 text-white rounded-xl bg-darkblue-05 hover:cursor-pointer">
							<MagnifyingGlassIcon className="h-5 w-5" />
						</span>
					</div>
				</section>
				<section className="md:w-[100%] sm:w-[100%] w-[100%] md:h-[19%] h-[44%] sm:px-20 px-2 pt-[13px] md:flex justify-between gap-x-6">
					<div className="flex gap-5 md:w-2/4 mt-5 h-24 rounded-2xl bg-darkblue-03 ps-9 py-2">
						<img
							src={Icon}
							alt="icon-dashboard"
							width={60}
							height={60}
						/>
						<div className="py-3">
							<div className="font-inter font-normal text-white text-xl p-0 ms-0 ">
								450
							</div>
							<div className="font-inter font-bold text-white text-xl p-0 m-0">
								Total Users
							</div>
						</div>
					</div>
					<div className="flex gap-5 md:w-2/4 mt-5 h-24 rounded-2xl bg-alert-success ps-9 py-2">
						<img
							src={Icon}
							alt="icon-dashboard"
							width={60}
							height={60}
						/>
						<div className="py-3">
							<div className="font-inter font-normal text-white text-xl p-0 ms-0 ">
								25
							</div>
							<div className="font-inter font-bold text-white text-xl p-0 m-0">
								Free Class
							</div>
						</div>
					</div>
					<div className="flex gap-5 md:w-2/4 mt-5 h-24 rounded-2xl bg-darkblue-05 ps-9 py-2">
						<img
							src={Icon}
							alt="icon-dashboard"
							width={60}
							height={60}
						/>
						<div className="py-3">
							<div className="font-inter font-normal text-white text-xl p-0 ms-0 ">
								20
							</div>
							<div className="font-inter font-bold text-white text-xl p-0 m-0">
								Premium Class
							</div>
						</div>
					</div>
				</section>
				<Outlet />
			</main>
		</main>
	);
};

export default DashboardLayout;
