import Input from '../../UI/Input';
import { useState } from 'react';
import toast from 'react-hot-toast';
import Select from '../../UI/Select';
import axios from 'axios';
import { BASE_URL } from '@/lib/baseUrl';
import { useNavigate } from 'react-router-dom';
import Button from '../../UI/Button';

function UploadVideoModal({
  handleCloseModal,
  setModalUploadVideo,
  setShowModal,
  course,
}) {
  const [codeClass, setCodeClass] = useState('');
  const [chapterName, setChapterName] = useState('');
  const [title, setTitle] = useState('');
  const [videoKelas, setVideoKelas] = useState('https://youtu.be/DwTkyMJi890');
  const [material, setMaterial] = useState('');
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
            'Content-Type': 'application/json',
            'Accept': '*/*',
          },
        }
      );

      if (response.status === 200 && response.data.error === false) {
        toast.success(response.data.message);
        setTimeout(() => {
          navigate(0);
        }, 2000);
      } else {
        toast.error(response.data.message || 'An error occurred');
      }

      handleCloseModal();
    } catch (error) {
      console.log(error);
      toast.error(
        error.response?.data?.message || 'An error occurred while saving.'
      );
    }
  };

  const KodeKelas = course.map((kelas) => ({
    value: kelas.code,
    label: kelas.code,
  }));

  console.log(KodeKelas);

  const handleCloseUpload = () => {
    setModalUploadVideo(false);
    setShowModal(true);
  };

  return (
    <div className="bg-black bg-opacity-75 inset-0 fixed">
      <div className="bg-white z-10 h-max mt-10 rounded-lg md:w-2/4 w-[23rem] mx-auto p-5 md:px-20">
        <div className="grid">
          <button
            type="button"
            className="flex justify-end text-end text-gray-400 close h-30 font-bold text-2xl"
            onClick={handleCloseModal}>
            &times;
          </button>
          <h1 className="font-Montserrat text-[24px] font-bold leading-[36px] text-darkblue-05 text-center">
            Upload Video
          </h1>
          <div>
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
            <div className="flex justify-center gap-3 mt-3 mb-3">
              <Button
                type="button"
                color="primary"
                onClick={handleCloseUpload}>
                Tambah Kelas
              </Button>
              <Button
                type="button"
                color="success"
                onClick={handleSave}>
                Simpan
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadVideoModal;
