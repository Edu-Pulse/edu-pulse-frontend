import { Link } from "react-router-dom";

import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { BellIcon } from "@heroicons/react/24/solid";

const Notification2 = () => {
  return (
    <main className="container flex flex-col min-h-screen md:justify-center">
      <div className="max-w-[768px] w-full mx-auto my-4 text-darkblue-05 font-semibold">
        <Link
          to="/"
          className="flex items-center gap-4 px-4 py-2 transition-all duration-300 rounded-full hover:bg-blue-100 w-fit hover:cursor-pointer"
        >
          <ArrowLeftIcon className="w-5 h-5" />
          <p className="hidden md:block">Kembali ke Beranda</p>
          <p className="text-2xl font-bold !text-black md:hidden">Notifikasi</p>
        </Link>
      </div>
      <section className="max-w-[768px] w-full mx-auto rounded-xl overflow-hidden md:border-2 md:border-darkblue-05">
        <div className="hidden w-full py-4 md:block bg-darkblue-05">
          <p className="font-semibold text-center text-white">Notifikasi</p>
        </div>
        <div className="my-2 space-y-2 divide-y">
          <div className="flex gap-4 py-2 md:items-center md:px-4">
            <div className="p-1 text-white rounded-full h-fit bg-darkblue-05 w-fit">
              <BellIcon className="w-4 h-4" />
            </div>
            <div className="w-full space-y-1">
              <div className="flex justify-between w-full">
                <p className="font-semibold text-darkblue-05">Promosi</p>
                <p className="flex items-center gap-2 text-sm">
                  <span>2 Maret, 12.00</span>
                  <div className="w-3 h-3 rounded-full bg-alert-success" />
                </p>
              </div>
              <div>
                <p className="mb-1 text-sm font-semibold">
                  Dapatkan Potongan 50% selama Bulan Maret!
                </p>
                <p className="text-sm text-gray-500">
                  Syarat dan Ketentuan berlaku!
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-4 py-2 md:items-center md:px-4">
            <div className="p-1 text-white rounded-full h-fit bg-darkblue-05 w-fit">
              <BellIcon className="w-4 h-4" />
            </div>
            <div className="w-full space-y-1">
              <div className="flex justify-between w-full">
                <p className="font-semibold text-darkblue-05">Promosi</p>
                <p className="flex items-center gap-2 text-sm">
                  <span>2 Maret, 12.00</span>
                  <div className="w-3 h-3 rounded-full bg-alert-success" />
                </p>
              </div>
              <div>
                <p className="mb-1 text-sm font-semibold">
                  Dapatkan Potongan 50% selama Bulan Maret!
                </p>
                <p className="text-sm text-gray-500">
                  Syarat dan Ketentuan berlaku!
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-4 py-2 md:items-center md:px-4">
            <div className="p-1 text-white rounded-full h-fit bg-darkblue-05 w-fit">
              <BellIcon className="w-4 h-4" />
            </div>
            <div className="w-full space-y-1">
              <div className="flex justify-between w-full">
                <p className="font-semibold text-darkblue-05">Promosi</p>
                <p className="flex items-center gap-2 text-sm">
                  <span>2 Maret, 12.00</span>
                  <div className="w-3 h-3 rounded-full bg-alert-success" />
                </p>
              </div>
              <div>
                <p className="mb-1 text-sm font-semibold">
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

export default Notification2;
