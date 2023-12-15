import Modals from "./CoursePage/Modals";
import Button from "./UI/Button";
import {
  StarIcon,
  ArrowRightCircleIcon,
  CurrencyDollarIcon,
  PlayIcon,
} from "@heroicons/react/24/solid";
import {
  RectangleStackIcon,
  ShieldCheckIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link } from "react-router-dom";

const ContentClass = ({ details }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="container">
      <div className="relative bg-black w-full aspect-video rounded-2xl my-10 flex items-center justify-center">
        <button
          className="text-white my-5 bg-darkblue-05 h-10 px-6 py-10 flex gap-4 items-center hover:bg-purple-900 w-fit rounded-full hover:cursor-pointer transition-all duration-300"
          onClick={() => {
            setOpen(true);
          }}
        >
          <PlayIcon className="h-8 w-8" />
        </button>
        {/* <div className="absolute bottom-0 right-8">
                  <div className="h-16 flex gap-6">
                    <button className="text-darkblue-03 font-semibold bg-darkblue-06 h-8 px-6 py-1 flex gap-4 items-center hover:bg-gray-300 w-fit rounded-full hover:cursor-pointer transition-all duration-300">
                      Kelas Lainnya
                    </button>
                    <button className="text-white font-semibold bg-darkblue-05 h-8 px-14 py-1 flex gap-4 items-center hover:bg-purple-900 w-fit rounded-full hover:cursor-pointer transition-all duration-300">
                      Next
                    </button>
                  </div>
                </div> */}

        <Modals open={open} onClose={() => setOpen(false)}>
          <div className="text-center">
            <div className="mx-auto w-48">
              <div className="flex">
                <h3 className="text-lg font-bold mb-4">
                  Selangkah Lagi menuju
                  <br />
                  <span className="text-darkblue-05">Kelas Premium</span>
                </h3>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl">
              <img
                className="object-cover h-40 w-full"
                src={`${details?.image}`}
                alt=""
              />
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <h5 className="text-darkblue-05 text-sm font-semibold">
                    {details?.category}
                  </h5>
                  <span className="flex">
                    <StarIcon className="h-5 w-5 text-yellow-500" />
                    <p className="text-sm">{details?.rating}</p>
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <h5 className="font-semibold mt-1">{details?.name}</h5>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm">by {details?.lecturer}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p>Code: {details?.code}</p>
                </div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="flex my-2 gap-1">
                    <ShieldCheckIcon className="h-5 w-5 text-green-500" />
                    <p>{details?.level} Level</p>
                  </span>
                  <span className="flex my-2 gap-1">
                    <RectangleStackIcon className="h-5 w-5 text-green-500" />
                    <p>10 Modul</p>
                  </span>
                  <span className="flex my-2 gap-1">
                    <ClockIcon className="h-5 w-5 text-green-500" />
                    <p>120 Menit</p>
                  </span>
                </div>
                <Button
                  className="!bg-darkblue-03 whitespace-nowrap"
                  icon={<CurrencyDollarIcon className="h-5 w-5" />}
                  iconPosition="left"
                  size="sm"
                >
                  Beli Rp 249.000
                </Button>
              </div>
            </div>
            <div className="flex flex-row justify-center gap-4 mt-4">
              <Link to={"/payment-pending"}>
                {" "}
                <button className="text-white bg-darkblue-05 h-10 px-8 py-2 flex gap-4 items-center hover:bg-purple-900 w-fit rounded-full hover:cursor-pointer transition-all duration-300">
                  Beli Sekarang
                  <ArrowRightCircleIcon className="w-6 h-6" />
                </button>
              </Link>
            </div>
          </div>
        </Modals>
        {/* <Modals open={open} onClose={() => setOpen(false)}>
                  <div className="text-center">
                    <div className="mx-[120px] w-48">
                      <div className="flex">
                        <h3 className="text-2xl font-bold mb-4">Onboarding</h3>
                      </div>
                    </div>
                    <img
                      src={onboarding}
                      className="object-cover hover:scale-105 transition-all duration-300 mx-auto"
                    />
                    <div>
                      <p className="font-semibold my-5">
                        Persiapkan hal berikut untuk belajar yang maksimal:
                      </p>
                      <p>
                        Mempunyai akun Figma atau Install Adobe XD Menggunakan
                        internet minimal kecepatan 2Mbps Belajar di tempat yang
                        nyaman
                      </p>
                    </div>

                    <div className="flex flex-row justify-center gap-4 mt-5">
                      <button className="text-white bg-darkblue-05 h-10 px-16 py-2 flex gap-4 items-center hover:bg-purple-900 w-fit rounded-full hover:cursor-pointer transition-all duration-300">
                        Ikuti Kelas
                      </button>
                    </div>
                  </div>
                </Modals> */}
      </div>

      <div>
        <h1 className="font-bold text-xl mb-3">Tentang Kelas</h1>
        <p className="indent-8 mb-2">{details?.description}</p>
      </div>
      <div className="mb-5">
        <h1 className="font-bold text-xl mt-8 mb-3">
          Kelas Ini Ditujukan Untuk
        </h1>
        <ol className="list-decimal ml-5">
          {details?.ditunjukanUntuk.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default ContentClass;
