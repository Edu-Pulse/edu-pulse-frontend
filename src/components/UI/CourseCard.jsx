import {
  RectangleStackIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import {
  ClockIcon,
  CurrencyDollarIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import Button from "./Button";
import kursusImage from "../../assets/image.png";

const CourseCard = () => {
  return (
    <div className="bg-white p-2 rounded-2xl shadow-xl">
      <img className="object-contain w-full" src={kursusImage} alt="" />
      <div className="flex justify-between my-2">
        <h5 className="text-darkblue-05">UI/UX Design</h5>
        <span className="flex my-2">
          <StarIcon className="h-5 w-5 text-yellow-500" />
          <p>4.7</p>
        </span>
      </div>
      <h5 className="font-semibold my-2">Belajar Web Designer dengan Figma</h5>
      <p>by Angela Doe</p>
      <div className="flex justify-between">
        <span className="flex my-2">
          <ShieldCheckIcon className="h-5 w-5 text-green-500" />
          <p>Intermediate Level</p>
        </span>
        <span className="flex my-2">
          <RectangleStackIcon className="h-5 w-5 text-green-500" />
          <p>10 Modul</p>
        </span>
        <span className="flex my-2">
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
  );
};

export default CourseCard;
