import { useEffect, useState } from "react";
import CourseCard from "../UI/CourseCard";
import app from "../../pages/AuthFlow/axiosConfig";
import { BASE_URL } from "@/lib/baseUrl";

const PurchaseHistory = () => {
  const [history, setHistory] = useState();

  useEffect(() => {
    const getPaymentHistory = async () => {
      try {
        const response = await app.get(`${BASE_URL}/payment/user?page=0`);

        const data = response.data.data.content;

        setHistory(data);
        console.log(data);
      } catch (error) {
        console.error("Error", error);
      }
    };

    getPaymentHistory();
  }, []);

  //   console.log(history[0].courseName);

  return (
    <div className="flex flex-col items-center my-7 w-full space-y-4 px-4 md:px-12">
      {history &&
        history.map((bebas, index) => (
          <CourseCard
            key={index}
            name={bebas.courseName}
            category={bebas.categoryName}
            image={null}
            amount={bebas.amount}
          />
        ))}
      {/* <CourseCard /> */}
    </div>
  );
};

export default PurchaseHistory;
