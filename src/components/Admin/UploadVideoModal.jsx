/* eslint-disable react/prop-types */
import clsx from "clsx";
import Input from '../UI/Input';
import { useState } from "react";
import toast from "react-hot-toast";
import Select from "../UI/Select";
import axios from "axios";
import { BASE_URL } from "@/lib/baseUrl";
import { useNavigate } from "react-router-dom";

function UploadVideoModal({ handleCloseModal, setModalUploadVideo, setShowModal, course }) {
  const [codeClass, setCodeClass] = useState("");
  const [chapterName, setChapterName] = useState("");
  const [title, setTitle] = useState("");
  const [videoKelas, setVideoKelas] = useState("https://youtu.be/DwTkyMJi890")
  const [material, setMaterial] = useState("")
  const navigate = useNavigate();

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      let data = {
        chapterName,
        title,
        video: videoKelas,
        material,
      };
  
      const response = await axios.post(
        `${BASE_URL}/course/${codeClass}`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "*/*",
          },
        }
      );
  
      if (response.status === 200 && response.data.error === false) {
        toast.success(response.data.message);
        setTimeout(() => {
          navigate(0);
        }, 2000);
      } else {
        toast.error(response.data.message || "An error occurred");
      }
  
      handleCloseModal();
    } catch (error) {
      console.log(error);
      toast.error(
        error.response?.data?.message || "An error occurred while saving."
      );
    }
  };
  

  const KodeKelas = course.content.map((kelas) => ({
    value: kelas.code,
    label: kelas.code,
  }));

  const handleCloseUpload = () => {
    setModalUploadVideo(false)
    setShowModal(true)
  }

  return (
    <div
          className={clsx(
            'fixed z-10 inset-0 grid place-content-center',
            'bg-black bg-opacity-75'
          )}
        >
          <div
            className={clsx(
              'relative transform-transition',
              'bg-white px-7 pb-4 rounded-lg',
              'h-[499px] w-[750px]'
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
            <h1 className="font-Montserrat text-[24px]  font-bold leading-[36px] text-darkblue-05">Upload Video</h1>
            </div>
            <div className=' w-[465px] mx-auto'>
            <Select 
                id="code"
                label="Pilih Kode Kelas"
                onChange={(e) => setCodeClass(e.target.value)}
                options={KodeKelas}
              />
              <Input 
                placeholder="Chapter 1 - Pendahuluan" 
                type="text"  
                id="chapterName"
                label="Masukkan Nama Chapter"
                onChange={(e) => setChapterName(e.target.value)}
              />
              <Input 
                placeholder="Tujuan Mengikuti Kelas Product Manajemen part 1" 
                type="text"  
                label="Masukkan Title Kelas"
                id="title"
                onChange={(e) => setTitle(e.target.value)}
              />
              <Input 
                placeholder="https://youtu.be/DwTkyMJi890" 
                type="text"  
                label="Masukkan Link Video Kelas"
                value={videoKelas}
                id="video"
                onChange={(e) => setVideoKelas(e.target.value)}
              />
              <Input 
                placeholder="Materi Belajar" 
                type="text"  
                label="Masukkan Material"
                id="material"
                onChange={(e) => setMaterial(e.target.value)}
              />
            </div>
            <div className="flex justify-center w-[465px] mx-auto mt-5 gap-2">
              <button
                type="button"
                className="bg-alert-success text-white font-bold py-2 px-4 rounded-full cursor-pointer"
                onClick={handleCloseUpload}
              >
                Tambah Kelas
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

export default UploadVideoModal