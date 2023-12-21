import { Outlet, useNavigate } from "react-router-dom";
import Icon from "@/assets/svg/Icon-Dashboard.svg";
import logo from "@/assets/svg/Logo-Belajar.svg";
import Sidebar from "@/components/Admin/Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "@/lib/baseUrl";
import toast from "react-hot-toast";
import { getMe } from "@/lib/getMe";

const DashboardLayout = () => {
  const [user, setUser] = useState("");
  const [course, setCourse] = useState([]);
  const [isRefresh, setIsRefresh] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      await getMe(setUser);
    };
    return () => fetchData();
  }, []);

  useEffect(() => {
    const getAllCourse = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `${BASE_URL}/admin/administration-data`
        );
        const data = response.data.data;
        if (response.status === 200) {
          setCourse(data);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error.message);
        setIsLoading(false);
        toast.error(error.response.data.message);
        return;
      }
    };
    setIsRefresh(false);
    return () => getAllCourse();
  }, [isRefresh]);

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
				<section className="w-full px-6 h-20 bg-darkblue-06">
					<div className="w-full pt-6 font-Montserrat text-[24px] font-bold leading-[36px] text-darkblue-05">
						Hi, {user.name}!
					</div>
				</section>
				<section className="w-full md:h-[19%] h-[44%] sm:px-20 px-2 md:flex gap-x-6">
					<div className="flex gap-5 md:w-2/4 mt-5 h-24 rounded-2xl bg-darkblue-03 ps-9 py-2">
						<img
							src={Icon}
							alt="icon-dashboard"
							width={60}
							height={60}
						/>
						<div className="py-3">
							<div className="font-inter font-normal text-white text-xl p-0 ms-0 ">
								{isLoading ? "Loading..." :course.totalUser}
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
								{isLoading ? "Loading..." : course.totalCourse}
							</div>
							<div className="font-inter font-bold text-white text-xl p-0 m-0">
								All Class
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
								{isLoading ? "Loading..." :course.totalCoursePremium}
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
