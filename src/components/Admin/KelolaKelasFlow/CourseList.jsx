import Spinner from '../../UI/Spinner';
import CourseTable from './CourseTable';

const CourseList = ({
  isLoading,
  handleEdit,
  handleDeleteCode,
  filteredData,
  selectedType,
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
                <td
                  colSpan="7"
                  className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <Spinner />
                </td>
              </tr>
            ) : (
              <>
                {filteredData
                  .filter(
                    (courseItem) =>
                      selectedType === 'ALL' || courseItem.type === selectedType
                  )
                  .map((courseItem, index) => (
                    <CourseTable
                      key={index}
                      courseItem={courseItem}
                      handleEdit={handleEdit}
                      handleDeleteCode={handleDeleteCode}
                      isLoading={isLoading}
                    />
                  ))}
                {filteredData.length === 0 && (
                  <tr className="bg-white">
                    <td
                      colSpan="7"
                      className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      No course data available
                    </td>
                  </tr>
                )}
              </>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CourseList;
