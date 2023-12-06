import Hero from "@/components/Hero";
import StudyCategories from "@/components/StudyCategories";
import KursusPopuler from "@/components/KursusPopuler";
import { useEffect } from "react";
import axios from "axios";

const Home = () => {
  useEffect(() => {
    const getMe = async () => {
      try {
        // const token = localStorage.getItem("token");

        const response = await axios.get(
          `https://pragos-academy-api-production.up.railway.app/user`
        );

        const data = response.data.data;

        console.log(data);
        // setUser(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getMe();
  }, []);
  // TODO: Tambah fitur sesuai dengan figma
  return (
    <main>
      <Hero />
      <StudyCategories />
      <KursusPopuler />
    </main>
  );
};

export default Home;
