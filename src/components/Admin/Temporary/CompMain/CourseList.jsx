import Spinner from "../../../UI/Spinner"
import CourseTable from "../../CourseTable"
import ReactPaginate from "react-paginate";

const CourseList = ({ 
  isLoading,
  course,
  searchCourse,
  handleEdit,
  handleDeleteCode, 
  changePage,
  pages,
  rows,
  keyword,
  }) => {
  return (
    <>
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
        ) : (
          <>
            {((keyword.trim() === "" && course.content && course.content.length > 0) ||
              (keyword.trim() !== "" && searchCourse && searchCourse.length > 0)) ? (
              (keyword.trim() === "" ? course.content : searchCourse).map((courseItem, index) => (
                <CourseTable
                  key={index}
                  courseItem={courseItem}
                  handleEdit={handleEdit}
                  handleDeleteCode={handleDeleteCode}
                  isLoading={isLoading}
                />
              ))
            ) : (
              <tr className="bg-white">
                <td colSpan="7" className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  No course data available
                </td>
              </tr>
            )}
          </>
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
          </>
  )
}

export default CourseList