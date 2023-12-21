import { useCallback, useEffect, useState } from "react";
import AdminModal from "@/components/Admin/AdminModal";
import EditModal from "@/components/Admin/EditModal";
import axios from "axios";
import { BASE_URL } from "@/lib/baseUrl";
import toast from "react-hot-toast";
import DeleteModal from "../../components/Admin/DeleteModal";
import KelolaKelasHeader from "../../components/Admin/Temporary/CompMain/KelolaKelasHeader";
import CourseList from "../../components/Admin/Temporary/CompMain/CourseList";
import MobileCourseList from "../../components/Admin/Temporary/CompMain/MobileCourseList";
import UploadVideoModal from "../../components/Admin/UploadVideoModal";
// import CourseSelect from "../Test4";

function KelolaKelas() {
	const [showModal, setShowModal] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [modalUploadVideo, setModalUploadVideo] = useState(false);
  const [course, setCourse] = useState([]);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(0);
  const [rows, setRows] = useState(0);
  const [isRefresh] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [keyword, setKeyword] = useState("");
  const [query, setQuery] = useState("");
  const [searchCourse, setSearchCourse] = useState([]);
  const [type, setType] = useState("");
  
	const handleOpenModal = () => {
		setShowModal(true);
	};
  
  const handleUploadVideo = () => {
    setShowModal(false);
    setModalUploadVideo(true);
  }

	const handleCloseModal = () => {
		setShowModal(false);
    setModalEdit(false);
    setModalDelete(false);
    setModalUploadVideo(false);
	};

  const getAllData = async (url, onSuccess, onError) => {
    try {
      setIsLoading(true);
      const response = await axios.get(url);
      const data = response.data.data;
  
      if (response.status === 200) {
        onSuccess(data);
      }
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
      onError(error);
    }
  };
  
  const getAllCourse = useCallback(async (pageNumber) => {
    const onSuccess = (data) => {
      setPage(data.number);
      setPages(data.totalPages);
      setRows(data.totalElements);
      setCourse(data);
      setIsLoading(false);
    };
  
    const onError = (error) => {
      toast.error(error.response.data.message);
    };
  
    getAllData(`${BASE_URL}/course/all?page=${pageNumber}`, onSuccess, onError);
  }, []);
  

  useEffect(() => {
		const getCourseByName = async () => {
      setIsLoading(true);
			try {
				const response = await axios.get(
					`${BASE_URL}/course/search?courseName=${keyword}`
				);

				const data = response.data.data;
				if (response.status === 200 && response.data.error !== true) {
					setSearchCourse(data);
          setIsLoading(false);
          console.log(data);
				} else {
          setIsLoading(false);
					toast.error(
						`Something went wrong! Status: ${response.status}`
					);
				}
			} catch (error) {
				console.log(error.message);
			}
		};
		
    if (keyword.trim() !== "") {
      getCourseByName();
    }
	}, [keyword]);

  useEffect(() => {
		const getFilterByType = async () => {
      setIsLoading(true);
			try {
				const response = await axios.get(
					`${BASE_URL}/course/type?type=${type}`
				);

				const data = response.data.data;
				if (response.status === 200 && response.data.error !== true) {
          setCourse(data);
          setIsLoading(false);
          console.log(data);
				} 
			} catch (error) {
        setIsLoading(false);
        console.log(error.message);
        toast.error(error.response.data.message);
			}
		};
      getFilterByType();
	}, [type]);

  const searchData = (e) => {
    e.preventDefault();
    setPage(0);
    setKeyword(query);
  };

  useEffect(() => {
    getAllCourse(page);
  }, [isRefresh, page, getAllCourse]);

  const changePage = ({ selected }) => {
    setPage(selected);
  };
  
  const handleEdit = (code) => {
    const selected = course.content.find((courseItem) => courseItem.code === code);
    setSelectedCourse(selected);
    setIsLoading(true);
    setModalEdit(true);
    setIsLoading(false);
  };

  const handleDeleteCode = (code) => {
    const selected = course.content.find((courseItem) => courseItem.code === code);
    if (selected === undefined) {
      toast.error("Course not found");
      return;
    }
    setSelectedCourse(selected);
    setModalDelete(true);
  };

  

	return (
		<>
			<KelolaKelasHeader
        query={query}
        setQuery={setQuery}
        searchData={searchData}
        handleOpenModal={handleOpenModal}
        type={type}
        setType={setType}
        course={course}
      />
    
			<section className="px-5">
      <CourseList
        isLoading={isLoading}
        course={course}
        searchCourse={searchCourse}
        handleEdit={handleEdit}
        handleDeleteCode={handleDeleteCode}
        changePage={changePage}
        pages={pages}
        page={page}
        rows={rows}
        keyword={keyword}
        type={type}
      />

      {/* start Responsive Tablet and Mobile */}
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden mt-4 pb-5">
      <MobileCourseList
        isLoading={isLoading}
        course={course}
        searchCourse={searchCourse}
        handleEdit={handleEdit}
        handleDeleteCode={handleDeleteCode}
        keyword={keyword}
      />
			</div>
      {/* end Responsive Tablet and Mobile */}


			{showModal && (
        <AdminModal 
          handleCloseModal={handleCloseModal} 
          handleUploadVideo={handleUploadVideo} 
        />
			)}

      {modalEdit && (
        <EditModal
          handleCloseModal={handleCloseModal}
          handleUploadVideo={handleUploadVideo}
          courseItem={selectedCourse}
        />
      )}

      {modalDelete && selectedCourse && (
        <DeleteModal 
          handleCloseModal={handleCloseModal}
          courseItem={selectedCourse}
          setIsLoading={setIsLoading}
          isLoading={isLoading}
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

      {/* <CourseSelect course={course}   /> */}

			</section>
		</>
	);
}

export default KelolaKelas;
