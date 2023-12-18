import { useEffect, useState } from "react";
import {
	PlusCircleIcon,
	FunnelIcon,
	MagnifyingGlassIcon,
	PencilSquareIcon,
	TrashIcon,
} from "@heroicons/react/24/outline";
import AdminModal from "@/components/Admin/AdminModal";
import EditModal from "@/components/Admin/EditModal";
import axios from "axios";
import { BASE_URL } from "@/lib/baseUrl";
import toast from "react-hot-toast";
import Spinner from "../../src/components/UI/Spinner";
import ReactPaginate from "react-paginate";

function Test2() {
	const [showModal, setShowModal] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [course, setCourse] = useState([]);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(0);
  const [rows, setRows] = useState(0);
  const [isRefresh, setIsRefresh] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

	const handleOpenModal = () => {
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
    setModalEdit(false);
	};

  const getAllCourse = async (pageNumber) => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${BASE_URL}/course/all?page=${pageNumber}`);
      setPage(response.data.data.number);
      setPages(response.data.data.totalPages);
      setRows(response.data.data.totalElements);
      const data = response.data.data;
      if (response.status === 200) {
        setCourse(data);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    getAllCourse(page);
  }, [isRefresh, page]);

  // useEffect(() => {
  //   const getAllCourse = async () => {
  //     try {
  //       setIsLoading(true);
  //       const response = await axios.get(
  //         `${BASE_URL}/course/all?page=${page}`
  //       );
  //       setPage(response.data.data.number);
  //       setPages(response.data.data.totalPages);
  //       setRows(response.data.data.totalElements);
  //       // console.log(response.data.data.number)
  //       console.log(response.data.data)
  //       const data = response.data.data;
  //       if (response.status === 200) {
  //         setCourse(data);
  //         setIsLoading(false);
  //       }
  //     } catch (error) {
  //       console.log(error.message);
  //       setIsLoading(false);
  //       toast.error(error.response.data.message);
  //       return;
  //     }
  //   };
  //   setIsRefresh(false);
  //   return () => getAllCourse();
  // }, [isRefresh, page]);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}course/delete/${id}`);

      if (response.status === 200) {
				setIsRefresh(true);
				
			}
			return;
      
    } catch (error) {
      console.log(error);
    }
  }
  
  const handleEdit = (code) => {
    const selected = course.content.find((courseItem) => courseItem.code === code);
    setSelectedCourse(selected);
    setModalEdit(true);
  };

  const handleUpdate = async (updatedCourse) => {
    try {
      const response = await axios.put(
        `${BASE_URL}/course/update/${updatedCourse.code}`,
        updatedCourse
      );

      if (response.status === 200) {
        setModalEdit(false);
        setIsRefresh(true);
        toast.success("Course updated successfully");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to update course");
    }
  };

  const changePage = ({ selected }) => {
    setPage(selected);
  };

	return (
		<>
			<section className="md:w-[100%] sm:w-[100%] w-[100%] md:h-[10%] md:mt-3 h-[8%] md:px-20 sm:px-5 px-3 pt-[10px] ">
				<div className="flex">
					<div className=" h-[50px] sm:w-[50%] w-[60%] font-Montserrat font-bold text-xl py-2">
						Status Pembayaran
					</div>
					<div className="h-[50px] w-[50%] flex font-bold font-Montserrat text-darkblue-05 text-end py-2 ps-[20%] gap-2">
						<button
							className="bg-darkblue-05  rounded-full flex w-32 gap-2 ps-3 pt-1.5 text-white"
							onClick={handleOpenModal}
						>
							<PlusCircleIcon className="h-6 w-6" />
							Tambah
						</button>
						<div className="border-2 border-darkblue-05  rounded-full flex w-24 gap-2 ps-3 pt-1">
							<FunnelIcon className="h-5 w-5" />
							Filter
						</div>
						<MagnifyingGlassIcon className="h-6 w-6 mt-1" />
					</div>
				</div>
			</section>
    
			<section className="px-5">
				<div className="overflow-y-scroll md:h-[300px] rounded-lg shadow hidden md:block p-5 bg-gray-100">
					<table className="w-full">
						<thead className="bg-gray-50 border-b-2 border-gray-200">
							<tr>
								<th className="p-3 text-sm font-semibold tracking-wide text-left">
									Kode Kelas
								</th>
								<th className="p-3 text-sm font-semibold tracking-wide text-left">
									Kategori
								</th>
								<th className="p-3 text-sm font-semibold tracking-wide text-left">
									Nama Kelas
								</th>
								<th className="p-3 text-sm font-semibold tracking-wide text-left">
									Tipe Kelas
								</th>
								<th className="p-3 text-sm font-semibold tracking-wide text-left">
									Level
								</th>
								<th className="p-3 text-sm font-semibold tracking-wide text-left">
									Harga
								</th>
								<th className="p-3 text-sm font-semibold tracking-wide text-center">
									Action
								</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-gray-100">

            
          {/* Bagian Looping Tabel dan isi Tabel */}

          {isLoading ? (
          <tr className="bg-white">
          <td colSpan="7" className="p-3 text-sm text-gray-700 whitespace-nowrap">
            <Spinner />
          </td>
          </tr>
            ) : course.content && course.content.length > 0 ? (
                course.content.map((courseItem, index) => (
          <tr key={index} className="bg-white">
          <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
          <a href="#" className="font-bold text-blue-500 hover:underline">
            {courseItem.code}
          </a>
          </td>
          <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
            {courseItem.category}
          </td>
          <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
            {courseItem.name}
          </td>
          <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
            {courseItem.type === 'GRATIS' ? (
          <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
            {courseItem.type}
          </span>
            ) : (
          <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-blue-800 bg-blue-500 rounded-lg bg-opacity-50">
            {courseItem.type}
          </span>
            )}
          </td>
          <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
            {courseItem.level}
          </td>
          <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
            {courseItem.price}
          </td>
          <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
          <span className="flex gap-3 justify-center">

            <PencilSquareIcon className="h-5 w-5 rounded-md text-green-800 bg-green-200 cursor-pointer outline outline-offset-2 outline-2"
            onClick={() => handleEdit(courseItem.code)}
            />

            <TrashIcon className="h-5 w-5 rounded-md text-red-800 bg-red-200 cursor-pointer outline outline-offset-2 outline-2"
            onClick={() => handleDelete(courseItem.code)}
            />

            </span>
            </td>
            </tr>
            ))) : (
            <tr className="bg-white">
              <td colSpan="7" className="p-3 text-sm text-gray-700 whitespace-nowrap">
                No course data available
              </td>
            </tr>
            )}
          </tbody>
          </table>
          </div>
          <p>
            Total Rows: {rows} Page: {rows ? page + 1 : 0} of {pages}
          </p>
          <nav
            className="pagination is-centered"
            key={rows}
            role="navigation"
            aria-label="pagination"
          >
            <ReactPaginate
              previousLabel={"< Prev"}
              nextLabel={"Next >"}
              pageCount={Math.min(10, pages)}
              onPageChange={changePage}
              containerClassName={'flex items-center justify-center space-x-4'}
              previousLinkClassName={'text-center items-center rounded-md font-medium flex gap-2 justify-center items-center bg-darkblue-05 w-20 h-8 text-white hover:bg-purple-800 transition-all duration-200'}
              nextLinkClassName={'text-center items-center rounded-md font-medium flex gap-2 justify-center items-center bg-darkblue-05 w-20 h-8 text-white hover:bg-purple-800 transition-all duration-200'}
              activeClassName={'border rounded-md w-7 h-7 text-center bg-blue-500 text-white'}
              disabledClassName={'border rounded-md text-center bg-blue-500 text-black cursor-not-allowed'}
            />
          </nav>
          
  

          
<>
        {/* Untuk Responsive Tampilan Tablet dan Mobile */}
				
				{showModal && (
					<AdminModal handleCloseModal={handleCloseModal} />
				)}
        {modalEdit && (
            <EditModal
            handleCloseModal={handleCloseModal}
            courseItem={selectedCourse}
            handleUpdate={handleUpdate}
            />
        )}
        </>
			</section>
		</>
	);
}

export default Test2;