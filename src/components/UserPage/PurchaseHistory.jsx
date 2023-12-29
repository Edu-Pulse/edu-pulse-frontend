import { useEffect, useState } from "react";
import CourseCard from "../UI/CourseCard";
import app from "../../lib/axiosConfig";
import { Link } from "react-router-dom";

import noData from "@/assets/svg/nodata.svg";
import Button from "../UI/Button";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/solid";

const PurchaseHistory = () => {
  const [history, setHistory] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  // const [paginate, setPaginate] = useState([]);
  useEffect(() => {
    const getPaymentHistory = async () => {
      try {
        const response = await app.get(`payment/user?page=${currentPage}`);
        const data = response.data.data;
        if (response.status === 200) {
          setHistory(data);
          // setPaginate(response.data.data);
        }
      } catch (error) {
        console.error("Error", error);
      }
    };

    getPaymentHistory();
  }, [currentPage]);

  return (
    <div className="flex flex-col items-center my-7 w-full space-y-4 px-4 md:px-12">
      {history.content ? (
        history.content.map((item, index) => (
          <CourseCard
            key={index}
            category={item.categoryName}
            name={item.courseName}
            lecturer={item.lecturer}
            level={item.level}
            rating={item.rating}
            image={item.image}
            amount={item.amount}
            paymentDate={item.paymentDate}
            paymentMethod={item.paymentMethod}
          />
        ))
      ) : (
        <div className="w-full h-full grid place-content-center mb-12">
          <img src={noData} alt="No Data" className="w-full" />
          <p className="text-gray-700 text-center">
            Kamu belum membeli kelas,{" "}
            <Link
              to="/class-topic"
              className="text-blue-900 font-semibold hover:cursor-pointer hover:underline underline-offset-2"
            >
              yuk beli sekarang
            </Link>
          </p>
        </div>
      )}
      <div className="flex gap-4">
        <Button
          icon={<ChevronDoubleLeftIcon className="h-4 w-4" />}
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={history.first}
          iconPosition="left"
          className={`${
            history.first
              ? "!bg-gray-300 !cursor-not-allowed"
              : "!bg-darkblue-05"
          } !text-white px-2 py-2 rounded`}
        >
          Previous
        </Button>
        <Button
          icon={<ChevronDoubleRightIcon className="h-4 w-4" />}
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={history.last}
          className={`${
            history.last
              ? "!bg-gray-300 !cursor-not-allowed"
              : "!bg-darkblue-05"
          } !text-white px-2 py-2 rounded`}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default PurchaseHistory;
