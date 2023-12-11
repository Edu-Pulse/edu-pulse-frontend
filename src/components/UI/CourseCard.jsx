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
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CourseCard = ({ category, name, lecturer, level, rating, code }) => {
  return (
    <Link to={`/detail/${code}`}>
      <div className="bg-white rounded-2xl shadow-xl">
        <img className="object-contain w-full" src={kursusImage} alt="" />
        <div className="p-4">
          <div className="flex justify-between items-center">
            <h5 className="text-darkblue-05 text-sm font-semibold">
              {category}
            </h5>
            <span className="flex">
              <StarIcon className="h-5 w-5 text-yellow-500" />
              <p className="text-sm">{rating}</p>
            </span>
          </div>
          <h5 className="font-semibold mt-1">{name}</h5>
          <p className="text-sm">by {lecturer}</p>
          <p>{code}</p>
          <div className="flex justify-between text-sm mb-2">
            <span className="flex my-2 gap-1">
              <ShieldCheckIcon className="h-5 w-5 text-green-500" />
              <p>{level} Level</p>
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
    </Link>
  );
};

CourseCard.propTypes = {
  category: PropTypes.string,
  name: PropTypes.string,
  lecturer: PropTypes.string,
  level: PropTypes.string,
  rating: PropTypes.number,
};
export default CourseCard;
