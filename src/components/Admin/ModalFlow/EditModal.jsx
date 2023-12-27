import Input from '../../UI/Input';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';
import { BASE_URL } from '@/lib/baseUrl';
import Select from '../../UI/Select';
import Button from '../../UI/Button';

function EditModal({
  handleCloseModal,
  handleUploadVideo,
  courseItem,
  setIsReFetch,
}) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [intended, setIntended] = useState('');
  const [lecturer, setLecturer] = useState('');
  const [level, setLevel] = useState('');
  const [type, setType] = useState('');
  const [price, setPrice] = useState('');
  const [discount, setDiscount] = useState('');

  useEffect(() => {
    if (courseItem) {
      setName(courseItem.name || '');
      setDescription(courseItem.description || '');
      setIntended(courseItem.intended || '');
      setLecturer(courseItem.lecturer || '');
      setLevel(courseItem.level || '');
      setType(courseItem.type || '');
      setPrice(courseItem.price !== null ? courseItem.price : 0);
      setDiscount(courseItem.discount !== null ? courseItem.discount : 0);
    }
  }, [courseItem]);

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const data = {
        name,
        description,
        intended,
        lecturer,
        level,
        type,
        price,
        discount,
      };

      const response = await axios.put(
        `${BASE_URL}course/edit/${courseItem.code}`,
        data
      );

      if (response.status === 200) {
        toast.success(response.data.message);
        setIsReFetch(true);
      }
      handleCloseModal();
    } catch (error) {
      toast.error(error.response.data.message || 'An error occurred');
    }
  };

  const classType = [
    { value: 'GRATIS', label: 'GRATIS' },
    { value: 'PREMIUM', label: 'PREMIUM' },
  ];

  const classLevel = [
    { value: 'BEGINNER', label: 'BEGINNER' },
    { value: 'INTERMEDIATE', label: 'INTERMEDIATE' },
    { value: 'ADVANCED', label: 'ADVANCED' },
  ];

  return (
    <div className="bg-black bg-opacity-75 inset-0 fixed">
      <div className="bg-white z-10 h-5/6 mt-10 rounded-lg overflow-y-scroll md:w-2/4 w-[23rem] mx-auto p-5 md:px-20">
        <div className="grid">
          <button
            type="button"
            className="flex justify-end text-end text-gray-400 close h-30 font-bold text-2xl"
            onClick={handleCloseModal}>
            &times;
          </button>
          <h1 className="font-Montserrat text-[24px] font-bold leading-[36px] text-darkblue-05 text-center">
            Edit Kelas
          </h1>
          <div>
            <Input
              placeholder="Belajar Web Designer dengan Figma"
              type="text"
              label="Nama Kelas"
              value={name}
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
            <Select
              id="type"
              label="Tipe Kelas"
              value={type}
              onChange={(e) => setType(e.target.value)}
              options={classType}
            />
            <Select
              id="level"
              label="Level Kelas"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              options={classLevel}
            />
            <Input
              placeholder="199000"
              type="number"
              label="Harga Kelas"
              value={price}
              id="price"
              onChange={(e) => setPrice(e.target.value)}
            />
            <Input
              placeholder="10000"
              type="number"
              label="Potongan Harga"
              value={discount}
              id="discount"
              onChange={(e) => setDiscount(e.target.value)}
            />
            <Input
              placeholder="intended"
              type="text"
              label="intended"
              value={intended}
              id="intended"
              onChange={(e) => setIntended(e.target.value)}
            />
            <Input
              placeholder="Mr. Udin"
              type="text"
              label="Nama Pengajar"
              value={lecturer}
              id="lecturer"
              onChange={(e) => setLecturer(e.target.value)}
            />
            <Input
              placeholder="Design Merupakan..."
              type="text"
              label="Deskripsi Kelas"
              value={description}
              id="description"
              onChange={(e) => setDescription(e.target.value)}
            />
            <div className="flex justify-center gap-3 mt-3 mb-3">
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

export default EditModal;
