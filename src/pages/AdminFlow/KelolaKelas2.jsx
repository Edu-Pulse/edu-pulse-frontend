import { useEffect, useState } from "react";
import {
	PlusCircleIcon,
	FunnelIcon,
	// MagnifyingGlassIcon,
	PencilSquareIcon,
	TrashIcon,
} from "@heroicons/react/24/outline";
import AdminModal from "@/components/Admin/AdminModal";
import EditModal from "@/components/Admin/EditModal";
import axios from "axios";
import { BASE_URL } from "@/lib/baseUrl";
import toast from "react-hot-toast";
import Spinner from "../../components/UI/Spinner";
import ReactPaginate from "react-paginate";
import DeleteModal from "../../components/Admin/DeleteModal";
import Button from "../../components/UI/Button";

function KelolaKelas2() {
	const [showModal, setShowModal] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [course, setCourse] = useState([]);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(0);
  const [rows, setRows] = useState(0);
  const [isRefresh] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

	// const handleOpenModal = () => {
	// 	setShowModal(true);
	// };

	const handleCloseModal = () => {
		setShowModal(false);
    setModalEdit(false);
    setModalDelete(false);
	};

  const getAllCourse = async (pageNumber) => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${BASE_URL}/course/all?page=${pageNumber}`);
      const data = response.data.data;
      setPage(response.data.data.number);
      setPages(response.data.data.totalPages);
      setRows(response.data.data.totalElements);
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

  const changePage = ({ selected }) => {
    setPage(selected);
  };
  
  const handleEdit = (code) => {
    const selected = course.content.find((courseItem) => courseItem.code === code);
    setSelectedCourse(selected);
    setModalEdit(true);
  };

  const handleDeleteCode = (code) => {
    const selected = course.content.find((courseItem) => courseItem.code === code);
    console.log(selected);
    setSelectedCourse(selected);
    setModalDelete(true);
  };

	return (
		<>

    <section className="container flex justify-between px-6 my-3">
      <div className="font-Montserrat font-bold text-xl pt-1">Kelola Kelas</div>
      <div className="flex space-x-2 ">
        <div>
        <Button 
            icon={<FunnelIcon className="h-5 w-5" />}
            iconPosition="left"
            color="success"
            size="md"
          >
            Filter
        </Button>
        </div>
        <div>
        <Button 
            icon={<PlusCircleIcon className="h-5 w-5" />}
            iconPosition="left"
            size="md"
          >
            Tambah
        </Button>
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
								<th className="w-40 p-3 text-sm font-semibold tracking-wide text-left">
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
            onClick={() => handleDeleteCode(courseItem.code)}
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
          
          <nav
            className="mt-4"
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

        {/* Untuk Responsive Tampilan Tablet dan Mobile */}

				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden mt-4 pb-5">
					<div className="bg-gray-100 space-y-3 p-4 rounded-lg shadow">
						<div className="flex items-center space-x-2 text-sm">
							<div>
								<a
									href="#"
									className="text-blue-500 font-bold hover:underline"
								>
									johndoe123
								</a>
							</div>
							<div className="text-gray-500">10/10/2021</div>
							<div>
								<span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
									Gratis
								</span>
							</div>
						</div>
						<div className="text-sm text-gray-700">
							UI/UX Design
						</div>
						<div className="text-sm text-gray-700">
							Belajar Web Designer dengan Figma
						</div>
						<div className="text-sm font-medium text-black">
							$200.00
						</div>
						<div className="text-sm font-medium text-black">
							<span className="flex gap-3 justify-start pt-5">
								<PencilSquareIcon className="h-5 w-5 rounded-md text-green-800 bg-green-200 cursor-pointer outline outline-offset-2 outline-2" />
								<TrashIcon className="h-5 w-5 rounded-md text-red-800 bg-red-200 cursor-pointer outline outline-offset-2 outline-2" />
							</span>
						</div>
					</div>
					<div className="bg-gray-100 space-y-3 p-4 rounded-lg shadow">
						<div className="flex items-center space-x-2 text-sm">
							<div>
								<a
									href="#"
									className="text-blue-500 font-bold hover:underline"
								>
									supermanxx
								</a>
							</div>
							<div className="text-gray-500">10/10/2021</div>
							<div>
								<span className="p-1.5 text-xs font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-lg bg-opacity-50">
									BELUM BAYAR
								</span>
							</div>
						</div>
						<div className="text-sm text-gray-700">
							UI/UX Design
						</div>
						<div className="text-sm text-gray-700">
							Belajar Web Designer dengan Figma
						</div>
						<div className="text-sm font-medium text-black">
							$200.00
						</div>
						<div className="text-sm font-medium text-black">
							<span className="flex gap-3 justify-start pt-5">
								<PencilSquareIcon className="h-5 w-5 rounded-md text-green-800 bg-green-200 cursor-pointer outline outline-offset-2 outline-2" />
								<TrashIcon className="h-5 w-5 rounded-md text-red-800 bg-red-200 cursor-pointer outline outline-offset-2 outline-2" />
							</span>
						</div>
					</div>
					<div className="bg-gray-100 space-y-3 p-4 rounded-lg shadow">
						<div className="flex items-center space-x-2 text-sm">
							<div>
								<a
									href="#"
									className="text-blue-500 font-bold hover:underline"
								>
									ironman99
								</a>
							</div>
							<div className="text-gray-500">10/10/2021</div>
							<div>
								<span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
									Gratis
								</span>
							</div>
						</div>
						<div className="text-sm text-gray-700">
							Web Development
						</div>
						<div className="text-sm text-gray-700">
							CSS dan HTML dalam seminggu
						</div>
						<div className="text-sm font-medium text-black">
							$200.00
						</div>
						<div className="text-sm font-medium text-black">
							<span className="flex gap-3 justify-start pt-5">
								<PencilSquareIcon className="h-5 w-5 rounded-md text-green-800 bg-green-200 cursor-pointer outline outline-offset-2 outline-2" />
								<TrashIcon className="h-5 w-5 rounded-md text-red-800 bg-red-200 cursor-pointer outline outline-offset-2 outline-2" />
							</span>
						</div>
					</div>
					<div className="bg-gray-100 space-y-3 p-4 rounded-lg shadow">
						<div className="flex items-center space-x-2 text-sm">
							<div>
								<a
									href="#"
									className="text-blue-500 font-bold hover:underline"
								>
									lokiMaster
								</a>
							</div>
							<div className="text-gray-500">10/10/2021</div>
							<div>
								<span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
									Gratis
								</span>
							</div>
						</div>
						<div className="text-sm text-gray-700">
							Data Science
						</div>
						<div className="text-sm text-gray-700">
							Data Cleaning untuk pemula
						</div>
						<div className="text-sm font-medium text-black">
							$200.00
						</div>
						<div className="text-sm font-medium text-black">
							<span className="flex gap-3 justify-start pt-5">
								<PencilSquareIcon className="h-5 w-5 rounded-md text-green-800 bg-green-200 cursor-pointer outline outline-offset-2 outline-2" />
								<TrashIcon className="h-5 w-5 rounded-md text-red-800 bg-red-200 cursor-pointer outline outline-offset-2 outline-2" />
							</span>
						</div>
					</div>
					<div className="bg-gray-100 space-y-3 p-4 rounded-lg shadow">
						<div className="flex items-center space-x-2 text-sm">
							<div>
								<a
									href="#"
									className="text-blue-500 font-bold hover:underline"
								>
									siapaAjaani
								</a>
							</div>
							<div className="text-gray-500">10/10/2021</div>
							<div>
								<span className="p-1.5 text-xs font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-lg bg-opacity-50">
									BELUM BAYAR
								</span>
							</div>
						</div>
						<div className="text-sm text-gray-700">
							Data Science
						</div>
						<div className="text-sm text-gray-700">
							Data Cleaning untuk pemula
						</div>
						<div className="text-sm font-medium text-black">
							$200.00
						</div>
						<div className="text-sm font-medium text-black">
							<span className="flex gap-3 justify-start pt-5">
								<PencilSquareIcon className="h-5 w-5 rounded-md text-green-800 bg-green-200 cursor-pointer outline outline-offset-2 outline-2" />
								<TrashIcon className="h-5 w-5 rounded-md text-red-800 bg-red-200 cursor-pointer outline outline-offset-2 outline-2" />
							</span>
						</div>
					</div>
					<div className="bg-gray-100 space-y-3 p-4 rounded-lg shadow">
						<div className="flex items-center space-x-2 text-sm">
							<div>
								<a
									href="#"
									className="text-blue-500 font-bold hover:underline"
								>
									lokiMaster
								</a>
							</div>
							<div className="text-gray-500">10/10/2021</div>
							<div>
								<span className="p-1.5 text-xs font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-lg bg-opacity-50">
									BELUM BAYAR
								</span>
							</div>
						</div>
						<div className="text-sm text-gray-700">
							Web Development
						</div>
						<div className="text-sm text-gray-700">
							Membuat wordpress mudah
						</div>
						<div className="text-sm font-medium text-black">
							$200.00
						</div>
						<div className="text-sm font-medium text-black">
							<span className="flex gap-3 justify-start pt-5">
								<PencilSquareIcon className="h-5 w-5 rounded-md text-green-800 bg-green-200 cursor-pointer outline outline-offset-2 outline-2" />
								<TrashIcon className="h-5 w-5 rounded-md text-red-800 bg-red-200 cursor-pointer outline outline-offset-2 outline-2" />
							</span>
						</div>
					</div>
					<div className="bg-gray-100 space-y-3 p-4 rounded-lg shadow">
						<div className="flex items-center space-x-2 text-sm">
							<div>
								<a
									href="#"
									className="text-blue-500 font-bold hover:underline"
								>
									visionOKE
								</a>
							</div>
							<div className="text-gray-500">10/10/2021</div>
							<div>
								<span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
									Gratis
								</span>
							</div>
						</div>
						<div className="text-sm text-gray-700">
							Data Science
						</div>
						<div className="text-sm text-gray-700">
							Data Cleaning untuk pemula
						</div>
						<div className="text-sm font-medium text-black">
							$200.00
						</div>
						<div className="text-sm font-medium text-black">
							<span className="flex gap-3 justify-start pt-5">
								<PencilSquareIcon className="h-5 w-5 rounded-md text-green-800 bg-green-200 cursor-pointer outline outline-offset-2 outline-2" />
								<TrashIcon className="h-5 w-5 rounded-md text-red-800 bg-red-200 cursor-pointer outline outline-offset-2 outline-2" />
							</span>
						</div>
					</div>
				</div>
				{showModal && (
					<AdminModal handleCloseModal={handleCloseModal} />
				)}
        {modalEdit && (
            <EditModal
            handleCloseModal={handleCloseModal}
            courseItem={selectedCourse}
            />
        )}
        {modalDelete && (
          <DeleteModal 
          handleCloseModal={handleCloseModal}
          courseItem={selectedCourse}
          />
        )}
			</section>
		</>
	);
}

export default KelolaKelas2;
