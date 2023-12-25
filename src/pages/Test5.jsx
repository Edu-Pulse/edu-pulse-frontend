import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "@/lib/baseUrl";
import toast from "react-hot-toast";
import {
	MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

const Test5 = () => {
  const [course, setCourse] = useState([]);
  const [courseType, setCourseType] = useState([]);
  const [searchCourses, setSearchCourses] = useState([]);
  const [type, setType] = useState("ALL");
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(false);

  const getCourseByName = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${BASE_URL}/course/search?courseName=${keyword}`
      );

      const data = response.data.data;
      if (response.status === 200 && response.data.error !== true) {
        setSearchCourses(data);
      } else {
        toast.error(`Something went wrong! Status: ${response.status}`);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }, [keyword]);

  useEffect(() => {
    const getAllCourse = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/course/all`);
        const data = response.data.data.content;
        setCourse(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getAllCourse();
  }, []);

  useEffect(() => {
    const getFilterByType = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/course/type?type=${type}`
        );

        const data = response.data.data.content;
        if (response.status === 200 && response.data.error !== true) {
          setCourseType(data);
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
    getFilterByType();
  }, [type]);

  useEffect(() => {
    if (keyword.trim() !== "") {
      getCourseByName();
    }
  }, [getCourseByName, keyword]);

  const searchData = async (e) => {
    e.preventDefault();
    await getCourseByName();
  };

  const mappedCourses = type === "ALL" ? course : courseType;
  const coursesToDisplay = keyword.trim() !== "" ? searchCourses : mappedCourses;
  // const searchAndType = searchCourses.map((courseItem) => courseItem.type === type && courseItem.name === keyword);

  const filteredByName = course.filter(courseItem =>
    courseItem.name.toLowerCase().includes(keyword.toLowerCase()) && courseItem.type === type
  );

  console.log(filteredByName);

  return (
    <div>
      <section>
        {coursesToDisplay.map((courseItem, index) => (
          <section key={index} className="text-sm flex gap-5">
            <p>{courseItem.code}</p>
            <p>{courseItem.category}</p>
            <p>{courseItem.name}</p>
            <p>{courseItem.type}</p>
            <p>{courseItem.level}</p>
            <p>{courseItem.price}</p>
          </section>
        ))}
      </section>
      <section className="mt-5">
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="ALL">ALL</option>
          <option value="GRATIS">GRATIS</option>
          <option value="PREMIUM">PREMIUM</option>
        </select>
      </section>
      <section>
        <div className="flex items-center justify-center w-full me-1">
          <input
            type="text"
            className="py-3 px-4 rounded-2xl w-full !placeholder-darkblue-04 outline-none !bg-darkblue-01 h-11"
            placeholder="Cari"
            size="md"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <span
            className="p-2 -ml-11 text-white rounded-xl bg-darkblue-05 hover:cursor-pointer"
            onClick={searchData}
          >
            {loading ? (
              "Loading..."
            ) : (
              <MagnifyingGlassIcon className="h-5 w-5" />
            )}
          </span>
        </div>
      </section>
    </div>
  );
};

export default Test5;

