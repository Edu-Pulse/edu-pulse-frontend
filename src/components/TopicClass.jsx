import Button from "./UI/Button";
import Input from "./UI/Input";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/solid";
import CourseCard from "./UI/CourseCard";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import Checkbox from "./UI/Checkbox";

const OngoingClass = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <section className="md:my-20">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-3 md:gap-0 py-5">
        <h2 className="text-xl font-bold">Kelas Berjalan</h2>
        <Input
          placeholder="Cari kelas..."
          icon={<MagnifyingGlassCircleIcon className="h-4 w-4" />}
        >
          <MagnifyingGlassCircleIcon className="h-4 w-4" />
        </Input>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 w-full">
        <div className="md:bg-white rounded-2xl md:px-4 md:col-span-3 h-fit">
          <button
            id="dropdownDefaultButton"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-white md:mt-4 justify-between md:hidden bg-darkblue-05 w-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
            type="button"
          >
            <span>Filter</span>
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <div
            id="dropdown"
            className={twMerge(isCollapsed ? "hidden" : "block", "z-10")}
          >
            <ul
              className="px-4 md:p-0 bg-white mt-4 md:m-0 md:rounded-none rounded-xl"
              aria-labelledby="dropdownDefaultButton"
            >
              {/* Basic Filter */}
              <div className="py-4 space-y-2">
                <h2 className="font-bold">Filter</h2>
                <Checkbox label="Paling Baru" id="palingbaru" value="" />
                <Checkbox label="Paling Populer" id="palingpopuler" value="" />
                <Checkbox label="Promo" id="promo" value="" />
              </div>
              {/* Category filter */}
              <div className="py-4 space-y-2">
                <h2 className="font-bold">Kategori</h2>
                <Checkbox label="UI/UX Design" id="uiuxdesign" value="" />
                <Checkbox
                  label="Web Development"
                  id="webdevelopment"
                  value=""
                />
                <Checkbox
                  label="Android Development"
                  id="androiddevelopment"
                  value=""
                />
                <Checkbox label="Data Science" id="datascience" value="" />
                <Checkbox
                  label="Business Intelligence"
                  id="businessintelligence"
                  value=""
                />
              </div>

              <div className="py-4 space-y-2">
                <h2 className="font-bold">Level Kesulitan</h2>
                <Checkbox label="Semua Level" id="semualevel" value="" />
                <Checkbox label="Beginner Level" id="beginnerlevel" value="" />
                <Checkbox
                  label="Intermediate Level"
                  id="intermediatelevel"
                  value=""
                />
                <Checkbox label="Advanced Level" id="advancedlevel" value="" />
              </div>
              <Button className="bg-white !text-red-500 hover:bg-gray-500 justify-self-center">
                Hapus Filter
              </Button>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:col-span-9">
          <div className="flex justify-around md:gap-2">
            <Button className="bg-white !text-black hover:bg-darkblue-05 w-1/3">
              All
            </Button>
            <Button className="bg-darkblue-01 !text-white hover:bg-darkblue-05 !px-10 whitespace-nowrap w-1/3">
              Kelas Premium
            </Button>
            <Button className="bg-white !text-black whitespace-nowrap w-1/3">
              Kelas Gratis
            </Button>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 my-10">
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OngoingClass;
