import {
  RectangleStackIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import {
  ClockIcon,
  CreditCardIcon,
  CurrencyDollarIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import Button from "./Button";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CourseCard = ({
  category,
  name,
  lecturer,
  level,
  rating,
  code,
  image,
  amount,
  paymentDate,
  paymentMethod,
}) => {
  return (
    <Link to={`/detail/${code}`}>
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <img className="object-cover h-40 w-full" src={`${image}`} alt="" />
        <div className="p-4">
          <div className="flex justify-between items-center">
            <h5 className="text-darkblue-05 text-sm font-semibold">
              {category}
            </h5>
            <span className="flex">
              {rating ? (
                <StarIcon className="h-5 w-5 text-yellow-500" />
              ) : (
                <CreditCardIcon className="h-5 w-5 text-green-500" />
              )}
              <p className="text-sm mx-2">
                {rating ? rating?.toFixed(1) : paymentMethod}
              </p>
            </span>
          </div>
          <h5 className="font-semibold mt-1">{name}</h5>
          <p className="text-sm text-slate-500">by {lecturer}</p>
          <p>Payment Date: {paymentDate?.slice(0, 3).join("-")}</p>
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
            {amount ? amount : "GRATIS"}
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
  code: PropTypes.string,
  image: PropTypes.string,
};
export default CourseCard;
