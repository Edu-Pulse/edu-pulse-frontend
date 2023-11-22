import uiux from "../assets/UIUX_Categories.png";
import pm from "../assets/PM_Categories.png";
import web from "../assets/WebDev_Categories.png";
import android from "../assets/Android_Categories.png";
import ios from "../assets/IOS_Categories.png";
import dataScience from "../assets/DataScience_Categories.png";

const StudyCategories = () => {
  return (
    <section className="bg-blue-100 w-full pb-10">
      <div className="flex justify-between">
        <div className="mx-[15%]">
          <h2 className="p-7 text-2xl font-bold">Kategori Belajar</h2>
        </div>
        <div className="mx-[15%]">
          <h2 className=" p-7 text-xl font-bold text-darkblue-05">
            Lihat Semua
          </h2>
        </div>
      </div>
      <div className="flex justify-around mx-[14%]">
        <div className="font-bold ">
          <img src={uiux} className="w-40 h-28 object-cover rounded-lg"></img>
          <p className="flex justify-center">UI/UX Design</p>
        </div>
        <div className="font-bold">
          <img
            src={pm}
            className="ml-2 w-40 h-28 object-cover rounded-lg"
          ></img>
          <p className="flex justify-center">Product Management</p>
        </div>
        <div className="font-bold">
          <img src={web} className="w-40 h-28 object-cover rounded-lg"></img>
          <p className="flex justify-center">Web Development</p>
        </div>
        <div className="font-bold ">
          <img
            src={android}
            className="ml-3 w-40 h-28 object-cover rounded-lg"
          ></img>
          <p className="flex justify-center">Android Development</p>
        </div>
        <div className="font-bold">
          <img src={ios} className="w-40 h-28 object-cover rounded-lg"></img>
          <p className="flex justify-center">IOS Development</p>
        </div>
        <div className="font-bold">
          <img
            src={dataScience}
            className="w-40 h-28 object-cover rounded-lg"
          ></img>
          <p className="flex justify-center">Data Science</p>
        </div>
      </div>
    </section>
  );
};
export default StudyCategories;
