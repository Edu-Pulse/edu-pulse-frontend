import ClassDetails from "@/components/ClassDetails";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
  const [classDetail, setClassDetail] = useState();
  const { code } = useParams();

  useEffect(() => {
    const getDetailClass = async () => {
      try {
        const response = await axios.get(
          `https://pragos-academy-api-production.up.railway.app/course/` + code
        );

        const data = response.data.data;

        setClassDetail(data);
        console.log(data);
      } catch (error) {
        console.error("Error", error);
      }
    };

    getDetailClass();
  }, [code]);
  console.log(classDetail);

  return (
    <main>
      <ClassDetails details={classDetail} />
    </main>
  );
};

export default Detail;
