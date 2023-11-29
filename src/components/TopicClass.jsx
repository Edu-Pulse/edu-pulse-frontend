import Button from "./UI/Button";
import Input from "./UI/Input";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/solid";
import CourseCard from "./UI/CourseCard";

const TopicClass = () => {
  return (
    <section className="container my-20">
      <div className="flex justify-between items-center py-5">
        <h2 className="text-xl font-bold">Kelas Berjalan</h2>
        <Input
          placeholder="Cari kelas..."
          icon={<MagnifyingGlassCircleIcon className="h-4 w-4" />}
        >
          <MagnifyingGlassCircleIcon className="h-4 w-4" />
        </Input>
      </div>
      <div className="grid sm:grid-cols-4 grid-cols-2 gap-4">
        <div className="bg-white rounded-lg p-4">
          <div className="py-4">
            <h2 className="font-bold">Filter</h2>
            <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
              <input className="" type="checkbox" value="" id="palingbaru" />
              <label
                className="inline-block pl-[0.15rem] hover:cursor-pointer"
                htmlFor="palingbaru"
              >
                Paling Baru
              </label>
            </div>
            <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
              <input className="" type="checkbox" value="" id="palingpopuler" />
              <label
                className="inline-block pl-[0.15rem] hover:cursor-pointer"
                htmlFor="palingpopuler"
              >
                Paling Populer
              </label>
            </div>
            <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
              <input className="" type="checkbox" value="" id="promo" />
              <label
                className="inline-block pl-[0.15rem] hover:cursor-pointer"
                htmlFor="promo"
              >
                Promo
              </label>
            </div>
          </div>

          <div className="py-4">
            <h2 className="font-bold">Kategori</h2>
            <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
              <input className="" type="checkbox" value="" id="uiuxdesgin" />
              <label
                className="inline-block pl-[0.15rem] hover:cursor-pointer"
                htmlFor="uiuxdesgin"
              >
                UI/UX Desgin
              </label>
            </div>
            <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
              <input
                className=""
                type="checkbox"
                value=""
                id="webdevelopment"
              />
              <label
                className="inline-block pl-[0.15rem] hover:cursor-pointer"
                htmlFor="webdevelopment"
              >
                Web Development
              </label>
            </div>
            <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
              <input className="" type="checkbox" value="" id="android" />
              <label
                className="inline-block pl-[0.15rem] hover:cursor-pointer"
                htmlFor="android"
              >
                Android Development
              </label>
            </div>
            <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
              <input className="" type="checkbox" value="" id="android" />
              <label
                className="inline-block pl-[0.15rem] hover:cursor-pointer"
                htmlFor="android"
              >
                Data Science
              </label>
            </div>
            <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
              <input className="" type="checkbox" value="" id="android" />
              <label
                className="inline-block pl-[0.15rem] hover:cursor-pointer"
                htmlFor="android"
              >
                Business Intelligence
              </label>
            </div>
          </div>

          <div className="py-4">
            <h2 className="font-bold">Level Kesulitan</h2>
            <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
              <input className="" type="checkbox" value="" id="semualevel" />
              <label
                className="inline-block pl-[0.15rem] hover:cursor-pointer"
                htmlFor="semualevel"
              >
                Semua Level
              </label>
            </div>
            <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
              <input className="" type="checkbox" value="" id="beginner" />
              <label
                className="inline-block pl-[0.15rem] hover:cursor-pointer"
                htmlFor="beginner"
              >
                Beginner Level
              </label>
            </div>
            <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
              <input className="" type="checkbox" value="" id="intermediate" />
              <label
                className="inline-block pl-[0.15rem] hover:cursor-pointer"
                htmlFor="intermediate"
              >
                Intermediate Level
              </label>
            </div>
            <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
              <input className="" type="checkbox" value="" id="advance" />
              <label
                className="inline-block pl-[0.15rem] hover:cursor-pointer"
                htmlFor="advance"
              >
                Advance Level
              </label>
            </div>
            <Button className="bg-white !text-red-500 hover:bg-gray-500 justify-self-center">
              Hapus Filter
            </Button>
          </div>
        </div>
        <div className="flex flex-col md:col-span-3">
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
          <div className="grid sm:grid-cols-2 gap-4 my-10">
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopicClass;
