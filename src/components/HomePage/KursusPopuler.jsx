import { useEffect, useState } from "react";
import Button from "../UI/Button";
import CourseCard from "../UI/CourseCard";
import axios from "axios";
import { BASE_URL } from "@/lib/baseUrl";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import CourseCardSkeleton from "../UI/CourseCardSkeleton";

const KursusPopuler = () => {
  const [course, setCourse] = useState([]);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getAllCourse = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`${BASE_URL}/course/all`);
        const data = response.data.data.content;
        if (response.status === 200) {
          setCourse(data);
        } else {
          toast.error("Something went wrong!");
        }
        setIsLoading(false);
        return;
      } catch (error) {
        console.log(error.message);
        setIsLoading(false);
      }
    };
    getAllCourse();
  }, []);

  const filteredCourse =
    selectedNumber === null
      ? course.filter((item) => item.rating >= 3)
      : selectedNumber === 0
      ? course.filter((item) => item.category === "Data Science")
      : selectedNumber === 1
      ? course.filter((item) => item.category === "UI/UX Design")
      : selectedNumber === 2
      ? course.filter((item) => item.category === "Android Development")
      : selectedNumber === 3
      ? course.filter((item) => item.category === "Web Development")
      : selectedNumber === 4
      ? course.filter((item) => item.category === "IOS Development")
      : course;

  const slice = filteredCourse.slice(0, 3);

  return (
    <section className="container my-4">
      <div className="flex justify-between items-center py-5">
        <h2 className="text-xl font-bold">Kursus Popular</h2>
        <span className="font-bold text-darkblue-05 py-2 px-4 rounded-full hover:bg-blue-200 hover:cursor-pointer transition-all duration-200">
          <Link to={"/class-topic"}>Lihat Semua</Link>
        </span>
      </div>
      <div className="flex justify-around w-full my-8 overflow-x-auto">
        <Button
          className={
            selectedNumber === null
              ? "whitespace-nowrap"
              : "text-sm !bg-darkblue-01 !text-black hover:!bg-darkblue-05 whitespace-nowrap"
          }
          size="xs"
          onClick={() => setSelectedNumber(null)}
        >
          All
        </Button>
        <Button
          className={
            selectedNumber === 0
              ? "whitespace-nowrap"
              : "text-sm !bg-darkblue-01 !text-black hover:!bg-darkblue-05 whitespace-nowrap"
          }
          size="xs"
          onClick={() => setSelectedNumber(0)}
        >
          Data Science
        </Button>
        <Button
          className={
            selectedNumber === 1
              ? "whitespace-nowrap"
              : "text-sm !bg-darkblue-01 !text-black hover:!bg-darkblue-05 whitespace-nowrap"
          }
          size="xs"
          onClick={() => setSelectedNumber(1)}
        >
          UI/UX Design
        </Button>
        <Button
          className={
            selectedNumber === 2
              ? "whitespace-nowrap"
              : "text-sm !bg-darkblue-01 !text-black hover:!bg-darkblue-05 whitespace-nowrap"
          }
          size="xs"
          onClick={() => setSelectedNumber(2)}
        >
          Android Development
        </Button>
        <Button
          className={
            selectedNumber === 3
              ? "whitespace-nowrap"
              : "text-sm !bg-darkblue-01 !text-black hover:!bg-darkblue-05 whitespace-nowrap"
          }
          size="xs"
          onClick={() => setSelectedNumber(3)}
        >
          Web Development
        </Button>
        <Button
          className={
            selectedNumber === 4
              ? "whitespace-nowrap"
              : "text-sm !bg-darkblue-01 !text-black hover:!bg-darkblue-05 whitespace-nowrap"
          }
          size="xs"
          onClick={() => setSelectedNumber(4)}
        >
          IOS Development
        </Button>
        <Button
          className={
            selectedNumber === 5
              ? "whitespace-nowrap"
              : "text-sm !bg-darkblue-01 !text-black hover:!bg-darkblue-05 whitespace-nowrap"
          }
          size="xs"
          onClick={() => setSelectedNumber(5)}
        >
          Business Intelligence
        </Button>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6 w-full my-8">
        {isLoading ? (
          <div className="flex gap-20">
            {Array.from({ length: 3 }).map((_, index) => {
              return <CourseCardSkeleton key={index} />;
            })}
          </div>
        ) : (
          slice &&
          slice.map((ClassItem, index) => (
            <CourseCard
              key={index}
              category={ClassItem.category}
              name={ClassItem.name}
              lecturer={ClassItem.lecturer}
              level={ClassItem.level}
              rating={ClassItem.rating}
              code={ClassItem.code}
              image={ClassItem.image}
              amount={ClassItem.amount}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default KursusPopuler;
