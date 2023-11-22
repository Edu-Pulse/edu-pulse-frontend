import kursusImage from "../assets/image.png";
import Button from "./UI/Button";
import { StarIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
import {
  RectangleStackIcon,
  ShieldCheckIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

const KursusPopuler = () => {
  return (
    <section className="w-full ">
      <div className="flex justify-between my-8 mx-[10%]">
        <h2 className="font-semibold">Kursus Populer</h2>
        <Button
          className="text-darkblue-05 font-semibold"
          size="md"
          color="white"
        >
          Lihat Semua
        </Button>
      </div>
      <div className="flex justify-around w-full my-8 overflow-x-auto">
        <Button
          className="bg-gray-300 text-black-300 hover:bg-darkblue-05 "
          size="sm"
        >
          All
        </Button>
        <Button>Data Science</Button>
        <Button>UI/UX Design</Button>
        <Button>Android Development</Button>
        <Button>Web Development</Button>
        <Button>IOS Development</Button>
        <Button>Business Intelligence</Button>
      </div>
      <div className="flex justify-around w-full my-8">
        <div>
          <img className="object-contain w-full" src={kursusImage} alt="" />
          <div className="flex justify-between my-2">
            <h5 className="text-darkblue-05">UI/UX Design</h5>
            <span className="flex my-2">
              <StarIcon className="h-5 w-5 text-yellow-500"></StarIcon>
              <p>4.7</p>
            </span>
          </div>
          <h5 className="font-semibold my-2">
            Belajar Web Designer dengan Figma
          </h5>
          <p>by Angela Doe</p>
          <div className="flex justify-between">
            <span className="flex my-2">
              <ShieldCheckIcon className="h-5 w-5 text-green-500"></ShieldCheckIcon>
              <p>Intermediate Level</p>
            </span>
            <span className="flex my-2">
              <RectangleStackIcon className="h-5 w-5 text-green-500"></RectangleStackIcon>
              <p>10 Modul</p>
            </span>
            <span className="flex my-2">
              <ClockIcon className="h-5 w-5 text-green-500"></ClockIcon>
              <p>120 Menit</p>
            </span>
          </div>
          <Button className="bg-darkblue-03">Beli RP.249.000</Button>
        </div>

        <div>
          <img className="object-contain w-full" src={kursusImage} alt="" />
          <div className="flex justify-between my-2">
            <h5 className="text-darkblue-05">UI/UX Design</h5>
            <span className="flex my-2">
              <StarIcon className="h-5 w-5 text-yellow-500"></StarIcon>
              <p>4.7</p>
            </span>
          </div>
          <h5 className="font-semibold my-2">
            Belajar Web Designer dengan Figma
          </h5>
          <p>by Angela Doe</p>
          <div className="flex justify-between">
            <span className="flex my-2">
              <ShieldCheckIcon className="h-5 w-5 text-green-500"></ShieldCheckIcon>
              <p>Intermediate Level</p>
            </span>
            <span className="flex my-2">
              <RectangleStackIcon className="h-5 w-5 text-green-500"></RectangleStackIcon>
              <p>10 Modul</p>
            </span>
            <span className="flex my-2">
              <ClockIcon className="h-5 w-5 text-green-500"></ClockIcon>
              <p>120 Menit</p>
            </span>
          </div>
          <Button className="bg-darkblue-03">Beli RP.249.000</Button>
        </div>

        <div>
          <img className="object-contain w-full" src={kursusImage} alt="" />
          <div className="flex justify-between my-2">
            <h5 className="text-darkblue-05">UI/UX Design</h5>
            <span className="flex my-2">
              <StarIcon className="h-5 w-5 text-yellow-500"></StarIcon>
              <p>4.7</p>
            </span>
          </div>
          <h5 className="font-semibold my-2">
            Belajar Web Designer dengan Figma
          </h5>
          <p>by Angela Doe</p>
          <div className="flex justify-between">
            <span className="flex my-2">
              <ShieldCheckIcon className="h-5 w-5 text-green-500"></ShieldCheckIcon>
              <p>Intermediate Level</p>
            </span>
            <span className="flex my-2">
              <RectangleStackIcon className="h-5 w-5 text-green-500"></RectangleStackIcon>
              <p>10 Modul</p>
            </span>
            <span className="flex my-2">
              <ClockIcon className="h-5 w-5 text-green-500"></ClockIcon>
              <p>120 Menit</p>
            </span>
          </div>
          <Button className="bg-darkblue-03">Beli RP.249.000</Button>
        </div>

        <div>
          <img className="object-contain w-full" src={kursusImage} alt="" />
          <div className="flex justify-between my-2">
            <h5 className="text-darkblue-05">UI/UX Design</h5>
            <span className="flex my-2">
              <StarIcon className="h-5 w-5 text-yellow-500"></StarIcon>
              <p>4.7</p>
            </span>
          </div>
          <h5 className="font-semibold my-2">
            Belajar Web Designer dengan Figma
          </h5>
          <p>by Angela Doe</p>
          <div className="flex justify-between">
            <span className="flex my-2">
              <ShieldCheckIcon className="h-5 w-5 text-green-500"></ShieldCheckIcon>
              <p>Intermediate Level</p>
            </span>
            <span className="flex my-2">
              <RectangleStackIcon className="h-5 w-5 text-green-500"></RectangleStackIcon>
              <p>10 Modul</p>
            </span>
            <span className="flex my-2">
              <ClockIcon className="h-5 w-5 text-green-500"></ClockIcon>
              <p>120 Menit</p>
            </span>
          </div>
          <Button
            className="bg-darkblue-03"
            icon={<CurrencyDollarIcon />}
            iconPosition="left"
            size="sm"
          >
            Beli RP.249.000
          </Button>
        </div>
      </div>
    </section>
  );
};

export default KursusPopuler;
