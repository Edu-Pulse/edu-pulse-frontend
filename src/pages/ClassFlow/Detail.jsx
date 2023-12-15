import ClassDetails from "@/components/ClassDetails";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "@/lib/baseUrl";
import ContentClass from "../../components/ContentClass";

const Detail = () => {
  const [classDetail, setClassDetail] = useState();
  const { code } = useParams();

  useEffect(() => {
    const getDetailClass = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/course/` + code);

        const data = response.data.data;

        setClassDetail(data);
        console.log(data);
      } catch (error) {
        console.error("Error", error);
      }
    };

    getDetailClass();
  }, [code]);

  return (
    <main>
      <ClassDetails details={classDetail} />
      <ContentClass details={classDetail} />
    </main>
  );
};

export default Detail;
