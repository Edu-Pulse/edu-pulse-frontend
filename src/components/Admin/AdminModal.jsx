/* eslint-disable react/prop-types */
import clsx from "clsx";
import Input from '../UI/Input';
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
// import app from "../../pages/AuthFlow/axiosConfig";

function AdminModal({handleCloseModal}) {
  const [courseCode, setCourseCode] = useState("");
  const [courseName, setCourseName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [intended, setIntended] = useState("");
  const [lecturer, setLecturer] = useState("");
  const [type, setType] = useState("");
  const [level, setLevel] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      let data = {
        courseCode,
        courseName,
        category,
        description,
        intended,
        lecturer,
        type,
        level,
        price,
        discount,
      };

      const response = await axios.post("course", data, {
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
        },
      });

      if (response.status === 200) {
        window.location.href = "/dashboard/kelolakelas";
      }

      handleCloseModal();

    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div
          className={clsx(
            'fixed z-10 inset-0 overflow-y-auto grid place-content-center',
            'bg-black bg-opacity-75'
          )}
        >
          <div
            className={clsx(
              'relative transform-transition',
              'bg-white px-7 pb-4 rounded-lg overflow-y-scroll',
              'h-[599px] w-[750px]'
            )}
          >
            <div className="flex justify-end font-bold text-2xl">
              <button
                type="button"
                className="text-gray-400 close hover:bg-gray-300 rounded-full w-10 h-10"
                onClick={handleCloseModal}
              >
                &times;
              </button>
            </div>
            <div className="modal-body py-1 text-center w-[465px] mx-auto">
            <h1 className="font-Montserrat text-[24px]  font-bold leading-[36px] text-darkblue-05">Tambah Kelas</h1>
            </div>
            <div className='h-[83%] w-[465px] mx-auto'>
              <Input 
                placeholder="courseCode" 
                type="text"  
                label="Nama Kelas"
                name="courseCode"
                onChange={(e) => setCourseCode(e.target.value)}
              />
              <Input 
                placeholder="courseName" 
                type="text"  
                label="Kategori"
                name="courseName"
                onChange={(e) => setCourseName(e.target.value)}
              />
              <Input 
                placeholder="category" 
                type="number"  
                label="Kode Kelas"
                name="category"
                onChange={(e) => setCategory(e.target.value)}
              />
              <Input 
                placeholder="description" 
                type="text"  
                label="Tipe Kelas"
                name="description"
                onChange={(e) => setDescription(e.target.value)}
              />
              <Input 
                placeholder="intended" 
                type="text"  
                label="Level"
                name="intended"
                onChange={(e) => setIntended(e.target.value)}
              />
              <Input 
                placeholder="lecturer" 
                type="text"  
                label="Harga"
                name="lecturer"
                onChange={(e) => setLecturer(e.target.value)}
              />
              <Input
                placeholder="type" 
                type="text"  
                label="Materi"
                name="type"
                onChange={(e) => setType(e.target.value)}
              />
              <Input
                placeholder="level" 
                type="text"  
                label="Materi"
                name="level"
                onChange={(e) => setLevel(e.target.value)}
              />
              <Input
                placeholder="price" 
                type="number"  
                label="Materi"
                name="price"
                onChange={(e) => setPrice(e.target.value)}
              />
              <Input
                placeholder="discount" 
                type="number"  
                label="Materi"
                name="discount"
                onChange={(e) => setDiscount(e.target.value)}
              />
            </div>
            <div className="flex justify-center w-[465px] mx-auto mt-48 gap-2">
              <button
                type="button"
                className="bg-alert-warning text-white font-bold py-2 px-4 rounded-full cursor-pointer"
                onClick={handleCloseModal}
              >
                Upload Video
              </button>
              <button
                type="button"
                className="bg-darkblue-05 text-white font-bold py-2 px-4 rounded-full cursor-pointer"
                onClick={handleSave}
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
  )
}

export default AdminModal