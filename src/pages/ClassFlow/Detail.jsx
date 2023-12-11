import ClassDetails from "@/components/ClassDetails";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { code } = useParams();
  const [courseDetail, setCourseDetail] = useState();

  useEffect(() => {
    const getCourseDetail = async () => {
      try {
        const response = await axios.get(
          `https://pragos-academy-api-production.up.railway.app/course/` + code
        );

        const data = response.data.data;

        setCourseDetail(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getCourseDetail();
  }, [code]);

  console.log(courseDetail);

  return (
    <main>
      <ClassDetails course={courseDetail} />
    </main>
  );
};

export default Detail;
