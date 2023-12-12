import { useEffect, useState } from "react";
import Button from "./UI/Button";
import CourseCard from "./UI/CourseCard";
import axios from "axios";

const KursusPopuler = () => {
  const [course, setCourse] = useState([]);
  const [selectedNumber, setSelectedNumber] = useState(null);

  useEffect(() => {
    const getAllCourse = async () => {
      try {
        const response = await axios.get(
          `https://pragos-academy-api-production.up.railway.app/course/all`
        );

        const data = response.data.data;

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
          Lihat Semua
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
            selectedNumber === 2
              ? "whitespace-nowrap"
              : "text-sm !bg-darkblue-01 !text-black hover:!bg-darkblue-05 whitespace-nowrap"
          }
          size="xs"
          onClick={() => setSelectedNumber(2)}
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
            selectedNumber === 3
              ? "whitespace-nowrap"
              : "text-sm !bg-darkblue-01 !text-black hover:!bg-darkblue-05 whitespace-nowrap"
          }
          size="xs"
          onClick={() => setSelectedNumber(3)}
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
          className="text-sm !bg-darkblue-01 !text-black hover:!bg-darkblue-05 whitespace-nowrap"
          size="xs"
        >
          IOS Development
        </Button>
        <Button
          className={
            selectedNumber === 1
              ? "whitespace-nowrap"
              : "text-sm !bg-darkblue-01 !text-black hover:!bg-darkblue-05 whitespace-nowrap"
          }
          size="xs"
          // onClick={filterForPM}
          onClick={() => setSelectedNumber(1)}
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
            />
            <CourseCard
              category={course[selectedNumber]?.category}
              name={course[selectedNumber]?.name}
              lecturer={course[selectedNumber]?.lecturer}
              level={course[selectedNumber]?.level}
              rating={course[selectedNumber]?.rating}
              code={course[selectedNumber]?.code}
              image={course[selectedNumber]?.image}
            />
            <CourseCard
              category={course[selectedNumber]?.category}
              name={course[selectedNumber]?.name}
              lecturer={course[selectedNumber]?.lecturer}
              level={course[selectedNumber]?.level}
              rating={course[selectedNumber]?.rating}
              code={course[selectedNumber]?.code}
              image={course[selectedNumber]?.image}
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
            />
            <CourseCard
              category={course[1]?.category}
              name={course[1]?.name}
              lecturer={course[1]?.lecturer}
              level={course[1]?.level}
              rating={course[1]?.rating}
              code={course[1]?.code}
              image={course[1]?.image}
            />
            <CourseCard
              category={course[2]?.category}
              name={course[2]?.name}
              lecturer={course[2]?.lecturer}
              level={course[2]?.level}
              rating={course[2]?.rating}
              code={course[2]?.code}
              image={course[2]?.image}
            />
          </>
        )}
      </div>
    </section>
  );
};

export default KursusPopuler;
