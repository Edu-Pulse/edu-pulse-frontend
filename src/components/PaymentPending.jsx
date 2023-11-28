import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import {
  ArrowRightCircleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import CourseCard from "./UI/CourseCard";
import Button from "./UI/Button";
import mastercard from "../assets/mastercardlogo.png";
import visa from "../assets/visalogo.png";
import amex from "../assets/amexlogo.png";
import paypal from "../assets/paypallogo.png";

const PaymentPending = () => {
  return (
    <section className="mt-16 w-full h-full">
      <div className="w-full mt-1">
        <div className="my-10">
          <div className="font-semibold text-xl flex items-center px-[20vh] py-10">
            <Link
              to="/my-class"
              className="px-4 py-2 flex gap-4 items-center hover:bg-blue-100 w-fit rounded-full hover:cursor-pointer transition-all duration-300"
            >
              <ArrowLeftIcon className="w-5 h-5" />
              <p>Kembali</p>
            </Link>
          </div>
          <div className="flex justify-center container">
            <div className="flex justify-center self-center bg-red-500 h-12 w-3/5 rounded-2xl">
              <p className="grid text-white content-center">
                Selesaikan Pembayaran sampai 10 Maret 2023 12:00
              </p>
            </div>
          </div>
        </div>
        <div className="container grid grid-cols-2 gap-4 my-10">
          <div>
            <div className="flex bg-slate-800 h-10 rounded-md my-2 justify-between p-2 content-center">
              <p className="text-white">Bank Transfer</p>
              <ChevronDownIcon className="text-white h-6 w-6" />
            </div>
            <div className="flex bg-darkblue-05 h-10 rounded-md my-2 justify-between p-2 content-center">
              <p className="text-white">Credit Card</p>
              <ChevronUpIcon className="text-white h-6 w-6" />
            </div>
            <div className="bg-white rounded-b-2xl shadow-lg h-2/3">
              <div className="container flex justify-center my-6 gap-4">
                <img src={mastercard} alt="" />
                <img src={visa} alt="" />
                <img src={amex} alt="" />
                <img src={paypal} alt="" />
              </div>
              <div className="px-32">
                <div className="my-4">
                  <p>Card Number</p>
                  <p className="text-gray-400">4480 0000 0000 0000</p>
                  <div className="bg-gray-400 h-[1px] w-full"></div>
                </div>
                <div className="my-4">
                  <p>Card Holder Name</p>
                  <p className="text-gray-400">John Doe</p>
                  <div className="bg-gray-400 h-[1px] w-full"></div>
                </div>
                <div className="flex justify-between my-4">
                  <div>
                    <p>CVV</p>
                    <p className="text-gray-400">000</p>
                    <div className="bg-gray-400 h-[1px] w-full"></div>
                  </div>
                  <div>
                    <p>Expiry Date</p>
                    <p className="text-gray-400">07/24</p>
                    <div className="bg-gray-400 h-[1px] w-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="outline outline-offset-2 outline-darkblue-05 rounded-2xl p-4">
            <p className="font-bold text-lg my-4">Pembayaran Kelas</p>
            <CourseCard />
            <Button
              className="my-4 w-full bg-red-500"
              icon={<ArrowRightCircleIcon className="w-6 h-6" />}
            >
              Bayar dan Ikuti Kelas Selamanya
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentPending;
