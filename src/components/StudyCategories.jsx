import uiux from "../assets/UIUX_Categories.png";
import pm from "../assets/PM_Categories.png";
import web from "../assets/WebDev_Categories.png";
import android from "../assets/Android_Categories.png";
import ios from "../assets/IOS_Categories.png";
import dataScience from "../assets/DataScience_Categories.png";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const StudyCategories = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const getClassCategories = async () => {
      try {
        const response = await axios.get(
          `https://pragos-academy-api-production.up.railway.app/categories`
        );

        const data = response.data.data;

        setCategory(data);
        console.log(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    getClassCategories();
  }, []);

  return (
    <section className="container my-4">
      <div className="flex justify-between items-center py-5">
        <h2 className="text-xl font-bold">Kategori Belajar</h2>
        <span className="font-bold text-darkblue-05 py-2 px-4 rounded-full hover:bg-blue-200 hover:cursor-pointer transition-all duration-200">
          Lihat Semua
        </span>
      </div>
      <div className="grid md:grid-cols-6 grid-cols-2 gap-5">
        {category.map((kelas) => {
          return (
            <div className="font-semibold text-sm hover:cursor-pointer">
              <div key={kelas.id}>
                <div className="rounded-[25px] overflow-hidden">
                  <img
                    className="w-full h-[120px] object-cover hover:scale-105 transition-all duration-300"
                    src={`${kelas.image}`}
                  />
                </div>
                <div className="text-center mt-3 hover:text-darkblue-05 transition-all">
                  {kelas.name}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default StudyCategories;
