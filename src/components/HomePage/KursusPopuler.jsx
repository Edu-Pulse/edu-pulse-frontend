import { useEffect, useState } from "react";
import Button from "../UI/Button";
import CourseCard from "../UI/CourseCard";
import axios from "axios";
import { BASE_URL } from "@/lib/baseUrl";
import { Link } from "react-router-dom";

const KursusPopuler = () => {
  const [course, setCourse] = useState([]);
  const [selectedNumber, setSelectedNumber] = useState(null);

  useEffect(() => {
    const getAllCourse = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/course/all`);
        console.log(response.data.data);
        const data = response.data.data.content;
        setCourse(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getAllCourse();
  }, []);

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
            selectedNumber === 1
              ? "whitespace-nowrap"
              : "text-sm !bg-darkblue-01 !text-black hover:!bg-darkblue-05 whitespace-nowrap"
          }
          size="xs"
          onClick={() => setSelectedNumber(1)}
        >
          Data Science
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
          UI/UX Design
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
          Android Development
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
          Web Development
        </Button>
        <Button
          className={
            selectedNumber === 6
              ? "whitespace-nowrap"
              : "text-sm !bg-darkblue-01 !text-black hover:!bg-darkblue-05 whitespace-nowrap"
          }
          size="xs"
          onClick={() => setSelectedNumber(6)}
        >
          IOS Development
        </Button>
        <Button
          className={
            selectedNumber === 7
              ? "whitespace-nowrap"
              : "text-sm !bg-darkblue-01 !text-black hover:!bg-darkblue-05 whitespace-nowrap"
          }
          size="xs"
          // onClick={filterForPM}
          onClick={() => setSelectedNumber(7)}
        >
          Business Intelligence
        </Button>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6 w-full my-8">
        {selectedNumber !== null ? (
          <>
            <CourseCard
              category={course[selectedNumber]?.category}
              name={course[selectedNumber]?.name}
              lecturer={course[selectedNumber]?.lecturer}
              level={course[selectedNumber]?.level}
              rating={course[selectedNumber]?.rating}
              code={course[selectedNumber]?.code}
              image={course[selectedNumber]?.image}
              amount={course[selectedNumber]?.price}
            />
            <CourseCard
              category={course[selectedNumber]?.category}
              name={course[selectedNumber]?.name}
              lecturer={course[selectedNumber]?.lecturer}
              level={course[selectedNumber]?.level}
              rating={course[selectedNumber]?.rating}
              code={course[selectedNumber]?.code}
              image={course[selectedNumber]?.image}
              amount={course[selectedNumber]?.price}
            />
            <CourseCard
              category={course[selectedNumber]?.category}
              name={course[selectedNumber]?.name}
              lecturer={course[selectedNumber]?.lecturer}
              level={course[selectedNumber]?.level}
              rating={course[selectedNumber]?.rating}
              code={course[selectedNumber]?.code}
              image={course[selectedNumber]?.image}
              amount={course[selectedNumber]?.price}
            />
          </>
        ) : (
          <>
            <CourseCard
              category={course[0]?.category}
              name={course[0]?.name}
              lecturer={course[0]?.lecturer}
              level={course[0]?.level}
              rating={course[0]?.rating}
              code={course[0]?.code}
              image={course[0]?.image}
              amount={course[0]?.price}
            />
            <CourseCard
              category={course[1]?.category}
              name={course[1]?.name}
              lecturer={course[1]?.lecturer}
              level={course[1]?.level}
              rating={course[1]?.rating}
              code={course[1]?.code}
              image={course[1]?.image}
              amount={course[1]?.price}
            />
            <CourseCard
              category={course[2]?.category}
              name={course[2]?.name}
              lecturer={course[2]?.lecturer}
              level={course[2]?.level}
              rating={course[2]?.rating}
              code={course[2]?.code}
              image={course[2]?.image}
              amount={course[2]?.price}
            />
          </>
        )}
      </div>
    </section>
  );
};

export default KursusPopuler;
