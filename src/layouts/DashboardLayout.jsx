import { Outlet, useNavigate } from 'react-router-dom';
import Icon from '@/assets/svg/Icon-Dashboard.svg';
import logo from '@/assets/svg/Logo-Belajar.svg';
import Sidebar from '@/components/Admin/Sidebar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '@/lib/baseUrl';
import toast from 'react-hot-toast';
import { getMe } from '../lib/getMe';
import app from '../lib/axiosConfig';
import HeaderMobileNavMenu from '../components/UI/HeaderMobileNavMenu';
import {
  HomeIcon,
  TableCellsIcon,
  FolderOpenIcon,
  ArrowRightStartOnRectangleIcon,
} from '@heroicons/react/24/outline';

import {
  HomeIcon as HomeIconSolid,
  TableCellsIcon as TableCellsIconSolid,
  FolderOpenIcon as FolderOpenIconSolid,
  ArrowRightStartOnRectangleIcon as ArrowRightStartOnRectangleIconSolid,
} from '@heroicons/react/24/solid';

const DashboardLayout = () => {
  const [user, setUser] = useState('');
  const [course, setCourse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      await getMe(setUser);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const getAllCourse = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${BASE_URL}/admin/administration-data`
        );
        const data = response.data.data;
        if (response.status === 200) {
          setCourse(data);
        }
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
        toast.error(error.response.data.message);
        setIsLoading(false);
      }
    };
    getAllCourse();
  }, []);

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const response = await app.post(`user/logout`);
      if (response.status === 200) {
        window.location.href = '/';
      } else {
        toast.error('Something went wrong!');
      }
    } catch (error) {
      toast.error('Something went wrong!');
    }
  };

  return (
    <>
      <main className="md:flex h-full w-full">
        <aside className="md:block hidden w-[15%] h-screen bg-darkblue-05">
          <div className="px-5 ">
            <img
              src={logo}
              alt="logo-belajar"
              className="h-[150px] cursor-pointer"
              onClick={() => navigate('/')}
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
            <Sidebar
              name="Keluar"
              onClick={handleLogout}
            />
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
                  {isLoading ? 'Loading...' : course.totalUser}
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
                  {isLoading ? 'Loading...' : course.totalCourse}
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
                  {isLoading ? 'Loading...' : course.totalCoursePremium}
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
      <nav className="md:hidden fixed bottom-0 z-50 w-full bg-white shadow-md">
        <div className="flex justify-evenly mx-4">
          <HeaderMobileNavMenu
            name="Beranda"
            href="/"
            iconActive={<HomeIconSolid className="h-6 w-6" />}
            iconInactive={<HomeIcon className="h-6 w-6" />}
          />
          <HeaderMobileNavMenu
            name="Dashboard"
            href="/dashboard"
            iconActive={<TableCellsIconSolid className="h-6 w-6" />}
            iconInactive={<TableCellsIcon className="h-6 w-6" />}
          />
          <HeaderMobileNavMenu
            name="Kelola"
            href="/dashboard/kelolakelas"
            iconActive={<FolderOpenIconSolid className="h-6 w-6" />}
            iconInactive={<FolderOpenIcon className="h-6 w-6" />}
          />
          <HeaderMobileNavMenu
            name="Keluar"
            onClick={handleLogout}
            iconActive={
              <ArrowRightStartOnRectangleIconSolid className="h-6 w-6" />
            }
            iconInactive={
              <ArrowRightStartOnRectangleIcon className="h-6 w-6" />
            }
          />
        </div>
      </nav>
    </>
  );
};

export default DashboardLayout;
