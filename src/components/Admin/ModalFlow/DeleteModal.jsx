import clsx from 'clsx';
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
    <div
      className={clsx(
        'fixed z-10 inset-0 grid place-content-center',
        'bg-black bg-opacity-75'
      )}>
      <div
        className={clsx(
          'relative transform-transition',
          'bg-white px-7 pb-4 rounded-lg',
          'h-[570px] w-[650px]'
        )}>
        <div className="flex justify-end font-bold text-2xl">
          <button
            type="button"
            className="text-gray-400 close hover:bg-gray-300 rounded-full w-10 h-10"
            onClick={handleCloseModal}>
            &times;
          </button>
        </div>
        <div className="py-1 text-center w-[465px] mx-auto">
          <h1 className="font-Montserrat text-[24px]  font-bold leading-[36px] text-darkblue-05">
            Hapus Kelas
          </h1>
        </div>
        <div className="w-[465px] grid place-content-center mx-auto">
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
        </div>
        <div className="flex justify-center w-[465px] mt-5 mx-auto gap-2">
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
  );
};

export default DeleteModal;
