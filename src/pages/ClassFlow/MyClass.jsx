import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/solid";
import CourseCard from "@/components/UI/CourseCard";
import { twMerge } from "tailwind-merge";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CourseCardSkeleton from "../../components/UI/CourseCardSkeleton";
import noData from "@/assets/svg/nodata.svg";
import app from "@/lib/axiosConfig";
import toast from "react-hot-toast";

const MyClass = () => {
  const [classes, setClasses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await app.get(`course/user`);
        console.log(response.data);

        if (response.status === 200) {
          setClasses(response.data.data.content);
        } else {
          toast.error(`Something went wrong! Status: ${response.status}`);
        }
        setIsLoading(false);
        return;
      } catch {
        toast.error("Something went wrong");
        setIsLoading(false);
      }
    };

    return () => fetchData();
  }, [filter]);

  return (
    <main className="container min-h-screen">
      <section className="md:my-20">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-3 md:gap-0 py-5">
          <h2 className="text-xl font-bold">Kelas Berjalan</h2>
          <Input
            placeholder="Cari kelas..."
            icon={<MagnifyingGlassCircleIcon className="h-4 w-4" />}
          >
            <MagnifyingGlassCircleIcon className="h-4 w-4" />
          </Input>
        </div>
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
                  filter === "in_progress"
                    ? "!bg-darkblue-05"
                    : "!bg-darkblue-01 !text-darkblue-05"
                )}
                onClick={() => setFilter("in_progress")}
                size={window.innerWidth <= 768 ? "sm" : "lg"}
              >
                In Progess
              </Button>
              <Button
                className={twMerge(
                  "w-full",
                  filter === "selesai"
                    ? "!bg-darkblue-05"
                    : "!bg-darkblue-01 !text-darkblue-05"
                )}
                onClick={() => setFilter("selesai")}
                size={window.innerWidth <= 768 ? "sm" : "lg"}
              >
                Selesai
              </Button>
            </div>
            {isLoading ? (
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 my-10">
                {Array.from({ length: 3 }).map((_, index) => {
                  return <CourseCardSkeleton key={index} />;
                })}
              </div>
            ) : classes.length === 0 ? (
              <div className="w-full h-full grid place-content-center mt-32 sm:mt-12">
                <img src={noData} alt="No Data" className="w-full" />
                <p className="text-gray-700 text-center">
                  Kamu belum mengikuti kelas,{" "}
                  <Link
                    to="/class-topic"
                    className="text-blue-900 font-semibold hover:cursor-pointer hover:underline underline-offset-2"
                  >
                    yuk ikut sekarang
                  </Link>
                </p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 my-10">
                {classes.map((classItem, index) => (
                  <CourseCard
                    key={index}
                    category={classItem.category}
                    name={classItem.name}
                    lecturer={classItem.lecturer}
                    level={classItem.level}
                    rating={classItem.rating}
                    code={classItem.code}
                    image={classItem.image}
                    amount={classItem.price}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default MyClass;
