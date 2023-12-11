import "../Progress.css";
import {
  PlayCircleIcon,
  StarIcon,
  LockClosedIcon,
  ChatBubbleLeftRightIcon,
  ArrowRightCircleIcon,
  PlayIcon,
} from "@heroicons/react/24/solid";
import {
  RectangleStackIcon,
  ShieldCheckIcon,
  ClockIcon,
  ArrowLeftIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import Modals from "./CoursePage/Modals";
import card from "../assets/card 3.png";
import { useEffect } from "react";

// import onboarding from "../assets/Onboarding.png";

const ClassDetails = ({ details }) => {
  const [open, setOpen] = useState(false);
  console.log(details);
  return (
    <section className="mt-16 w-full h-full">
      <div className="w-full mt-1">
        <div>
          <div className="font-semibold text-xl flex items-center px-[20vh] py-10">
            <Link
              to="/"
              className="px-4 py-2 flex gap-4 items-center hover:bg-blue-100 w-fit rounded-full hover:cursor-pointer transition-all duration-300"
            >
              <ArrowLeftIcon className="w-5 h-5" />
              <p>Kelas Lainnya</p>
            </Link>
          </div>
        </div>
        <div className="container gap-20 grid md:grid-cols-5 grid-cols-1">
          <div className="col-span-3">
            <div className="w-full">
              <div className="container">
                <div className="h-full flex flex-col">
                  <div className="flex justify-between">
                    <h5 className="text-darkblue-05 font-bold pb-1 text-xl">
                      {details?.category}
                    </h5>
                    <span className="flex">
                      <StarIcon className="h-5 w-5 text-yellow-500"></StarIcon>
                      <p>{details?.rating}</p>
                    </span>
                  </div>
                  <h5 className="font-bold pb-1 text-xl">{details?.name}</h5>
                  <p>by {details?.lecturer}</p>
                  <div className="flex gap-6">
                    <span className="flex my-2 gap-1">
                      <ShieldCheckIcon className="h-5 w-5 text-green-500"></ShieldCheckIcon>
                      <p className="text-darkblue-05">{details?.level} Level</p>
                    </span>
                    <span className="flex my-2 gap-1">
                      <RectangleStackIcon className="h-5 w-5 text-green-500"></RectangleStackIcon>
                      <p>{details?.totalMaterial} Modul</p>
                    </span>
                    <span className="flex my-2 gap-1">
                      <ClockIcon className="h-5 w-5 text-green-500"></ClockIcon>
                      <p>120 Menit</p>
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <button className="text-white my-5 bg-alert-success h-10 px-7 py-2 flex gap-2 items-center hover:bg-green-700 w-fit rounded-full hover:cursor-pointer transition-all duration-300">
                      Join Grup Telegram
                      <ChatBubbleLeftRightIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
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
                          <span className="text-darkblue-05">
                            Kelas Premium
                          </span>
                        </h3>
                      </div>
                    </div>
                    <img
                      src={card}
                      className="w-full object-cover hover:scale-105 transition-all duration-300"
                    />
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
          </div>
          <div className="col-span-2 ml-12 mb-8">
            <div className="bg-white p-4 rounded-2xl shadow-2xl h-fit">
              <div className="flex items-center gap-2">
                <div className="flex justify-between w-1/2 items-center">
                  <h1 className="font-bold text-lg">Materi Belajar</h1>
                  <CheckBadgeIcon className="w-4 h-4 text-alert-success" />
                </div>
                <div className="relative">
                  <label
                    className="z-10 left-2 top-[2px] absolute text-white text-xs"
                    htmlFor="progress"
                  >
                    20% Progress
                  </label>
                  <progress
                    className="rounded-full"
                    id="progress"
                    value="20"
                    max="100"
                  ></progress>
                </div>
              </div>

              <div>
                <div className="flex justify-between w-full mt-5 mb-3">
                  <p className="text-darkblue-05 font-bold ">
                    Chapter 1 - Pendahuluan
                  </p>
                  <p className="text-darkblue-03 font-bold"> 40 Menit</p>
                </div>
                <ol>
                  <li className="my-2 flex justify-between items-center">
                    <p className="flex gap-3 items-center">
                      <span className="p-4 leading-none rounded-full bg-darkblue-06 w-6 h-6 grid place-content-center">
                        1
                      </span>
                      Anda yang ingin memahami poin penting design system
                    </p>
                    <PlayCircleIcon className="text-alert-success w-10 h-full" />
                  </li>
                  <li className="my-2 flex justify-between items-center">
                    <p className="flex gap-3 items-center">
                      <span className="p-4 leading-none rounded-full bg-darkblue-06 w-6 h-6 grid place-content-center">
                        2
                      </span>
                      Anda yang ingin memahami poin penting design system
                    </p>
                    <PlayCircleIcon className="text-alert-success w-10 h-full" />
                  </li>
                  <li className="my-2 flex justify-between items-center">
                    <p className="flex gap-3 items-center">
                      <span className="p-4 leading-none rounded-full bg-darkblue-06 w-6 h-6 grid place-content-center">
                        3
                      </span>
                      Anda yang ingin memahami poin penting design system
                    </p>
                    <PlayCircleIcon className="text-alert-success w-10 h-full" />
                  </li>
                  <li className="my-2 flex justify-between items-center">
                    <p className="flex gap-3 items-center">
                      <span className="p-4 leading-none rounded-full bg-darkblue-06 w-6 h-6 grid place-content-center">
                        4
                      </span>
                      Anda yang ingin memahami poin penting design system
                    </p>
                    <PlayCircleIcon className="text-darkblue-05 w-10 h-full" />
                  </li>
                </ol>
              </div>
              <div>
                <div className="flex justify-between w-full mt-5 mb-3">
                  <p className="text-darkblue-05 font-bold ">
                    Chapter 2 - Materi
                  </p>
                  <p className="text-darkblue-03 font-bold"> 120 Menit</p>
                </div>
                <ol>
                  <li className="my-2 flex justify-between items-center">
                    <p className="flex gap-3 items-center">
                      <span className="p-4 leading-none rounded-full bg-darkblue-06 w-6 h-6 grid place-content-center">
                        1
                      </span>
                      Anda yang ingin memahami poin penting design system
                    </p>
                    <LockClosedIcon className="text-gray-300 w-10 h-full" />
                  </li>
                  <li className="my-2 flex justify-between items-center">
                    <p className="flex gap-3 items-center">
                      <span className="p-4 leading-none rounded-full bg-darkblue-06 w-6 h-6 grid place-content-center">
                        2
                      </span>
                      Anda yang ingin memahami poin penting design system
                    </p>
                    <LockClosedIcon className="text-gray-300 w-10 h-full" />
                  </li>
                  <li className="my-2 flex justify-between items-center">
                    <p className="flex gap-3 items-center">
                      <span className="p-4 leading-none rounded-full bg-darkblue-06 w-6 h-6 grid place-content-center">
                        3
                      </span>
                      Anda yang ingin memahami poin penting design system
                    </p>
                    <LockClosedIcon className="text-gray-300 w-10 h-full" />
                  </li>
                  <li className="my-2 flex justify-between items-center">
                    <p className="flex gap-3 items-center">
                      <span className="p-4 leading-none rounded-full bg-darkblue-06 w-6 h-6 grid place-content-center">
                        4
                      </span>
                      Anda yang ingin memahami poin penting design system
                    </p>
                    <LockClosedIcon className="text-gray-300 w-10 h-full" />
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassDetails;
