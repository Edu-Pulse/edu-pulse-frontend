import { useEffect, useState } from 'react';
import AddModal from '@/components/Admin/ModalFlow/AddModal';
import EditModal from '@/components/Admin/ModalFlow/EditModal';
import axios from 'axios';
import { BASE_URL } from '@/lib/baseUrl';
import toast from 'react-hot-toast';
import DeleteModal from '@/components/Admin/ModalFlow/DeleteModal';
import KelolaKelasHeader from '@/components/Admin/KelolaKelasFlow/KelolaKelasHeader';
import CourseList from '@/components/Admin/KelolaKelasFlow/CourseList';
import MobileCourseList from '@/components/Admin/KelolaKelasFlow/MobileCourseList';
import UploadVideoModal from '@/components/Admin/ModalFlow/UploadVideoModal';

function KelolaKelas() {
  const [showModal, setShowModal] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [modalUploadVideo, setModalUploadVideo] = useState(false);
  const [course, setCourse] = useState([]);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('ALL');
  const [isRefetch, setIsReFetch] = useState(true);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleUploadVideo = () => {
    setShowModal(false);
    setModalEdit(false);
    setModalUploadVideo(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalEdit(false);
    setModalDelete(false);
    setModalUploadVideo(false);
  };

  useEffect(() => {
    const getAllCourse = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${BASE_URL}/course/all?page=${page}`);
        const data = response.data.data.content;
        setCourse(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
        setIsLoading(false);
      } finally {
        setIsReFetch(false);
      }
    };
    if (isRefetch) {
      getAllCourse();
    } else {
      return;
    }
  }, [page, isRefetch]);

  const MaxPage = course.length < 10;

  const filteredData = course.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const typeOptions = [...new Set(course.map((item) => item.type))];
  typeOptions.unshift('ALL');

  const handleEdit = (code) => {
    const selected = course.find((courseItem) => courseItem.code === code);
    setSelectedCourse(selected);
    setIsLoading(true);
    setModalEdit(true);
    setIsLoading(false);
  };

  const handleDeleteCode = (code) => {
    const selected = course.find((courseItem) => courseItem.code === code);
    if (selected === undefined) {
      toast.error('Course not found');
      return;
    }
    setSelectedCourse(selected);
    setModalDelete(true);
  };

  return (
    <>
      <KelolaKelasHeader
        handleOpenModal={handleOpenModal}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        typeOptions={typeOptions}
      />

      <section className="px-5">
        <CourseList
          isLoading={isLoading}
          handleEdit={handleEdit}
          handleDeleteCode={handleDeleteCode}
          filteredData={filteredData}
          selectedType={selectedType}
        />

        {/* start Responsive Tablet and Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden mt-4 pb-5">
          <MobileCourseList
            isLoading={isLoading}
            filteredData={filteredData}
            selectedType={selectedType}
            handleEdit={handleEdit}
            handleDeleteCode={handleDeleteCode}
          />
        </div>
        {/* end Responsive Tablet and Mobile */}

        <div className="md:mb-0 md:mt-2 mb-24 flex justify-center gap-3">
          <button
            onClick={() => {
              setPage(page - 1);
              setIsReFetch(true);
            }}
            disabled={page === 0}
            className={`${
              page === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-darkblue-05'
            } text-white px-2 py-2 rounded`}>
            {'<'} Previous
          </button>
          <button
            onClick={() => {
              setPage(page + 1);
              setIsReFetch(true);
            }}
            disabled={MaxPage}
            className={`${
              MaxPage ? 'bg-gray-300 cursor-not-allowed' : 'bg-darkblue-05'
            } text-white px-4 py-2 rounded`}>
            Next {'>'}
          </button>
        </div>

        {showModal && (
          <AddModal
            handleCloseModal={handleCloseModal}
            handleUploadVideo={handleUploadVideo}
            setIsReFetch={setIsReFetch}
          />
        )}

        {modalEdit && (
          <EditModal
            handleCloseModal={handleCloseModal}
            handleUploadVideo={handleUploadVideo}
            courseItem={selectedCourse}
            setIsReFetch={setIsReFetch}
          />
        )}

        {modalDelete && selectedCourse && (
          <DeleteModal
            handleCloseModal={handleCloseModal}
            courseItem={selectedCourse}
            setIsLoading={setIsLoading}
            isLoading={isLoading}
            setIsReFetch={setIsReFetch}
          />
        )}

        {modalUploadVideo && (
          <UploadVideoModal
            handleCloseModal={handleCloseModal}
            setModalUploadVideo={setModalUploadVideo}
            setShowModal={setShowModal}
            course={course}
          />
        )}
      </section>
    </>
  );
}

export default KelolaKelas;
