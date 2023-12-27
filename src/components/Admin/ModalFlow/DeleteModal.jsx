import axios from 'axios';
import { BASE_URL } from '@/lib/baseUrl';
import toast from 'react-hot-toast';
import Button from '../../UI/Button';
import CourseCard from '../../UI/CourseCard';

const DeleteModal = ({
  handleCloseModal,
  courseItem,
  isLoading,
  setIsLoading,
  setIsReFetch,
}) => {
  const handleDelete = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      if (courseItem && courseItem.code) {
        const response = await axios.delete(
          `${BASE_URL}course/delete/${courseItem.code}`
        );

        if (response.status === 200) {
          setIsLoading(false);
          toast.success(response.data.message);
          setIsReFetch(true);
        }
        handleCloseModal();
      } else {
        console.error(
          'Tidak dapat menghapus: courseItem atau courseItem.code tidak terdefinisi'
        );
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
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
            Hapus Kelas
          </h1>
          <h1 className="font-Montserrat font-normal text-center leading-[24px] mb-3">
            Apakah anda yakin ingin menghapus kelas ini ?
          </h1>
          <CourseCard
            code={courseItem.code}
            category={courseItem.category}
            name={courseItem.name}
            level={courseItem.level}
            amount={courseItem.price}
            image={courseItem.image}
            lecturer={courseItem.lecturer}
            rating={courseItem.rating}
          />
          <div className="flex justify-center gap-3 mt-5">
            <Button
              type="button"
              color="primary"
              onClick={handleCloseModal}>
              Batal
            </Button>
            <Button
              type="button"
              color="danger"
              onClick={handleDelete}>
              {isLoading ? 'Loading...' : 'Hapus'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
