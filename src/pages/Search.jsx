import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "@/lib/baseUrl";
import CourseCard from "@/components/UI/CourseCard";
import toast from "react-hot-toast";
import Button from "@/components/UI/Button";
import { twMerge } from "tailwind-merge";

const Search = () => {
  const [course, setCourse] = useState();
  const [filter, setFilter] = useState("all");
  const { input } = useParams("");
  console.log(course);

  useEffect(() => {
    const getCourseByName = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/course/search?courseName=${input}`
        );

        const data = response.data.data;
        if (response.status === 200 && response.data.error !== true) {
          setCourse(data);
        } else {
          toast.error(`Something went wrong! Status: ${response.status}`);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    return () => getCourseByName();
  }, [input]);

  useEffect(() => {
    const getCourseById = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/category/${input}`);

        const data = response.data.data;
        if (response.status === 200 && response.data.error !== true) {
          setCourse(data);
        } else {
          toast.error(`Something went wrong! Status: ${response.status}`);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    return () => getCourseById();
  }, [input]);

  const filteredSearch =
    filter === "PREMIUM"
      ? course.filter((item) => item.type === "PREMIUM")
      : filter === "GRATIS"
      ? course.filter((item) => item.type === "GRATIS")
      : course;

  return (
    <main className="container min-h-screen">
      <section className="sm:my-20 mt-36">
        <div className="w-full">
          <div className="flex flex-col">
            <div className="flex justify-around gap-2">
              <Button
                className={twMerge(
                  "w-full",
                  filter === "all"
                    ? "!bg-darkblue-05"
                    : "!bg-darkblue-01 !text-darkblue-05"
                )}
                onClick={() => setFilter("all")}
                size={window.innerWidth <= 768 ? "sm" : "lg"}
              >
                All
              </Button>
              <Button
                className={twMerge(
                  "w-full",
                  filter === "PREMIUM"
                    ? "!bg-darkblue-05"
                    : "!bg-darkblue-01 !text-darkblue-05"
                )}
                onClick={() => setFilter("PREMIUM")}
                size={window.innerWidth <= 768 ? "sm" : "lg"}
              >
                Premium
              </Button>
              <Button
                className={twMerge(
                  "w-full",
                  filter === "GRATIS"
                    ? "!bg-darkblue-05"
                    : "!bg-darkblue-01 !text-darkblue-05"
                )}
                onClick={() => setFilter("GRATIS")}
                size={window.innerWidth <= 768 ? "sm" : "lg"}
              >
                Gratis
              </Button>
            </div>
            <div className="flex flex-col md:col-span-9">
              <div className="grid sm:grid-cols-2 gap-6 my-10">
                {filteredSearch &&
                  filteredSearch.map((searchItem, index) => (
                    <CourseCard
                      key={index}
                      category={searchItem.category}
                      name={searchItem.name}
                      lecturer={searchItem.lecturer}
                      level={searchItem.level}
                      rating={searchItem.rating}
                      code={searchItem.code}
                      image={searchItem.image}
                      amount={searchItem?.price}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Search;
