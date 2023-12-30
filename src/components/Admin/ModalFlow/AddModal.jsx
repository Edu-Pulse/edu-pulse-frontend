import Input from '../../UI/Input';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import app from '../../../lib/axiosConfig';
import { BASE_URL } from '@/lib/baseUrl';
import axios from 'axios';
import Select from '../../UI/Select';
import Button from '../../UI/Button';

function AdminModal({ handleCloseModal, handleUploadVideo, setIsReFetch }) {
  const [courseCode, setCourseCode] = useState('');
  const [courseName, setCourseName] = useState('');
  const [category, setCategory] = useState('');
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [description, setDescription] = useState('');
  const [intended, setIntended] = useState('');
  const [lecturer, setLecturer] = useState('');
  const [type, setType] = useState('');
  const [level, setLevel] = useState('');
  const [price, setPrice] = useState('');
  const [discount, setDiscount] = useState('');

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

      const response = await app.post('course', data, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': '*/*',
        },
      });

      if (response.status === 200) {
        toast.success(response.data.message);
        setIsReFetch(true);
      }

      handleCloseModal();
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || 'An error occurred');
    }
  };

  useEffect(() => {
    const getClassCategories = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/category/all`);

        const data = response.data.data;

        setCategoryOptions(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    getClassCategories();
  }, []);

  const formattedOptions = categoryOptions.map((kelas) => ({
    value: kelas.id,
    label: kelas.name,
  }));

  const classType = [
    { value: 'GRATIS', label: 'GRATIS' },
    { value: 'PREMIUM', label: 'PREMIUM' },
  ];

  const classLevel = [
    { value: 'BEGINNER', label: 'BEGINNER' },
    {
      value: 'INTERMEDIATE',
      label: 'INTERMEDIATE',
    },
    { value: 'ADVANCED', label: 'ADVANCED' },
  ];

  return (
    <div className="bg-black bg-opacity-75 inset-0 fixed">
      <div className="bg-white z-10 h-5/6 mt-10 rounded-lg overflow-y-scroll md:w-2/4 sm:w-5/6 w-[23rem] mx-auto p-5 md:px-20">
        <div className="grid">
          <button
            type="button"
            className="flex justify-end text-end text-gray-400 close h-30 font-bold text-2xl"
            onClick={handleCloseModal}>
            &times;
          </button>
          <h1 className="font-Montserrat text-[24px] font-bold leading-[36px] text-darkblue-05 text-center">
            Tambah Kelas
          </h1>
          <div>
            <Input
              placeholder="UIUX0123"
              type="text"
              id="courseCode"
              label="Masukkan Kode Kelas"
              onChange={(e) => setCourseCode(e.target.value)}
            />
            <Input
              placeholder="Belajar Web Designer dengan Figma"
              type="text"
              label="Masukkan Nama Kelas"
              id="courseName"
              onChange={(e) => setCourseName(e.target.value)}
            />
            <Select
              id="category"
              label="Pilih Kategori Kelas"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              options={formattedOptions}
            />
            <Input
              placeholder="Design Merupakan..."
              type="text"
              label="Masukkan Deskripsi Kelas"
              id="description"
              onChange={(e) => setDescription(e.target.value)}
            />
            <Input
              placeholder="1. Anda yang ingin Menjadi Sukses,..."
              type="text"
              label="Di Tunjukan Untuk"
              id="intended"
              onChange={(e) => setIntended(e.target.value)}
            />
            <Input
              placeholder="Mr. Udin"
              type="text"
              label="Nama Pengajar"
              id="lecturer"
              onChange={(e) => setLecturer(e.target.value)}
            />
            <Select
              id="type"
              label="Pilih Tipe Kelas"
              value={type}
              onChange={(e) => setType(e.target.value)}
              options={classType}
            />
            <Select
              id="level"
              label="Pilih Level Kelas"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              options={classLevel}
            />
            <Input
              placeholder="199000"
              type="number"
              label="Harga Kelas"
              id="price"
              onChange={(e) => setPrice(e.target.value)}
            />
            <Input
              placeholder="0 - 100"
              type="number"
              label="discount"
              id="discount"
              onChange={(e) => setDiscount(e.target.value)}
            />
            <div className="flex justify-center gap-3 mt-5 mb-3">
              <Button
                type="button"
                color="primary"
                onClick={handleUploadVideo}>
                Upload Video
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

export default AdminModal;
