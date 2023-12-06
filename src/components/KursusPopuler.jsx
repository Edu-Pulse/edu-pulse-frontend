import { useEffect, useState } from "react";
import Button from "./UI/Button";
import CourseCard from "./UI/CourseCard";
import axios from "axios";

const KursusPopuler = () => {
  const [course, setCourse] = useState();

  //   console.log(course[0].description);

  useEffect(() => {
    const getAllCourse = async () => {
      try {
        // const token = localStorage.getItem("token");

        const response = await axios.get(
          `https://pragos-academy-api-production.up.railway.app/course/all`
        );

        const data = response.data.data;

        console.log(data);
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
          className="text-sm !bg-darkblue-01 !text-black hover:bg-darkblue-05"
          size="xs"
        >
          All
        </Button>
        <Button
          className="text-sm !bg-darkblue-01 !text-black hover:bg-darkblue-05 whitespace-nowrap"
          size="xs"
        >
          Data Science
        </Button>
        <Button className="whitespace-nowrap" size="xs">
          UI/UX Design
        </Button>
        <Button
          className="text-sm !bg-darkblue-01 !text-black hover:bg-darkblue-05 whitespace-nowrap"
          size="xs"
        >
          Android Development
        </Button>
        <Button
          className="text-sm !bg-darkblue-01 !text-black hover:bg-darkblue-05 whitespace-nowrap"
          size="xs"
        >
          Web Development
        </Button>
        <Button
          className="text-sm !bg-darkblue-01 !text-black hover:bg-darkblue-05 whitespace-nowrap"
          size="xs"
        >
          IOS Development
        </Button>
        <Button
          className="text-sm !bg-darkblue-01 !text-black hover:bg-darkblue-05 whitespace-nowrap"
          size="xs"
        >
          Business Intelligence
        </Button>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6 w-full my-8">
        <CourseCard
          category={course[0].category}
          name={course[0].name}
          lecturer={course[0].lecturer}
          level={course[0].level}
          rating={course[0].rating}
        />
        <CourseCard
          category={course[0].category}
          name={course[0].name}
          lecturer={course[0].lecturer}
          level={course[0].level}
          rating={course[0].rating}
        />
        <CourseCard
          category={course[0].category}
          name={course[0].name}
          lecturer={course[0].lecturer}
          level={course[0].level}
          rating={course[0].rating}
        />
      </div>
    </section>
  );
};

export default KursusPopuler;
