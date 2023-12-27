import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '@/lib/baseUrl';
import clsx from 'clsx';
import Spinner from '../../components/UI/Spinner';

function Dashboard() {
  const [course, setCourse] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getAllCourse = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${BASE_URL}/payment?page=${page}`);
        const data = response.data.data.content;
        setCourse(data);
        const totalPage = response.data.data.totalPages;
        setTotalPages(totalPage);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
        setIsLoading(false);
      }
    };
    getAllCourse();
  }, [page]);

  const filteredData = course.filter((item) =>
    item.courseName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const MaxPage = totalPages - 1 === page;

  return (
    <>
      <section className="container md:flex justify-between px-6 my-3">
        <div className="font-Montserrat font-bold text-start mb-3 text-xl pt-3">
          Dashboard
        </div>
        <div className="flex gap-2 justify-end">
          <div className="flex items-center justify-center w-full me-1">
            <input
              type="text"
              className="py-3 px-4 rounded-2xl w-full !placeholder-darkblue-04 outline-none !bg-darkblue-01 h-11"
              placeholder="Cari"
              size="md"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span className="p-2 -ml-11 text-white rounded-xl bg-darkblue-05 hover:cursor-pointer">
              <MagnifyingGlassIcon className="h-5 w-5" />
            </span>
          </div>
          <div className="flex items-center w-3/5">
            <select
              className={clsx(
                'py-2 px-2 w-full rounded-xl border outline-none focus:outline-darkblue-05 transition-all duration-300 hover:border-gray-400',
                'appearance-none bg-gray-200 cursor-pointer'
              )}>
              <option>SUDAH BAYAR</option>
            </select>
          </div>
        </div>
      </section>

      <section className="px-5">
        <div className="overflow-y-scroll md:h-[300px] rounded-lg shadow hidden md:block p-5 bg-gray-100">
          <table className="w-full">
            <thead className="bg-gray-50 border-b-2 border-gray-200">
              <tr>
                <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">
                  ID
                </th>
                <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">
                  Kategori
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Kelas Premium
                </th>
                <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                  Status
                </th>
                <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                  Payment
                </th>
                <th className="w-30 p-3 text-sm font-semibold tracking-wide text-center">
                  Tanggal Bayar
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
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
                  {filteredData.map((courseItem, index) => (
                    <tr
                      key={index}
                      className="bg-white">
                      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                        <a
                          href="#"
                          className="font-bold text-blue-500 hover:underline">
                          {courseItem.userId}
                        </a>
                      </td>
                      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                        {courseItem.categoryName}
                      </td>
                      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                        {courseItem.courseName}
                      </td>
                      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                        {courseItem.status ? (
                          <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                            SUDAH BAYAR
                          </span>
                        ) : (
                          <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-lg bg-opacity-50">
                            BELUM BAYAR
                          </span>
                        )}
                      </td>
                      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                        {courseItem.paymentMethod === 'CREDIT_CARD'
                          ? 'CREDIT CARD'
                          : 'Kartu Debit'}
                      </td>
                      <td className="p-3 text-center text-sm text-gray-700 whitespace-nowrap">
                        {courseItem.paymentDate[2]}-{courseItem.paymentDate[1]}-
                        {courseItem.paymentDate[0]}{' '}
                        {courseItem.paymentDate[3] !== 0 &&
                        courseItem.paymentDate[4] !== 0
                          ? courseItem.paymentDate[3]
                          : ''}
                        {courseItem.paymentDate[4] !== 0
                          ? courseItem.paymentDate[4]
                          : ''}
                      </td>
                    </tr>
                  ))}
                  {filteredData.length === 0 && (
                    <tr className="bg-white">
                      <td
                        colSpan="6"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden pb-5">
          {isLoading ? (
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <Spinner />
            </div>
          ) : (
            <>
              {filteredData.map((courseItem, index) => (
                <div
                  key={index}
                  className="bg-gray-100 space-y-3 p-4 rounded-lg shadow">
                  <div className="flex items-center space-x-2 text-sm">
                    <div>
                      <a
                        href="#"
                        className="text-blue-500 font-bold hover:underline">
                        {courseItem.userId}
                      </a>
                    </div>
                    <div className="text-gray-500">
                      {courseItem.paymentDate[0]}-{courseItem.paymentDate[1]}-
                      {courseItem.paymentDate[2]}{' '}
                      {courseItem.paymentDate[3] !== 0 &&
                      courseItem.paymentDate[4] !== 0
                        ? courseItem.paymentDate[3]
                        : ''}
                      {courseItem.paymentDate[4] !== 0
                        ? courseItem.paymentDate[4]
                        : ''}
                    </div>
                    <div>
                      {courseItem.status ? (
                        <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                          SUDAH BAYAR
                        </span>
                      ) : (
                        <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-red-800 bg-green-200 rounded-lg bg-opacity-50">
                          BELUM BAYAR
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="text-sm text-gray-700">
                    {courseItem.categoryName}
                  </div>
                  <div className="text-sm text-gray-700">
                    {courseItem.courseName}
                  </div>
                  <div className="text-sm font-medium text-black">
                    {courseItem.paymentMethod === 'CREDIT_CARD'
                      ? 'CREDIT CARD'
                      : 'Kartu Debit'}
                  </div>
                </div>
              ))}
              {filteredData.length === 0 && (
                <div className="bg-gray-100 p-4 rounded-lg shadow">
                  No course data available
                </div>
              )}
            </>
          )}
        </div>
        <div className="md:mb-0 md:mt-2 mb-24 flex justify-center gap-3">
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 0}
            className={`${
              page === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-darkblue-05'
            } text-white px-2 py-2 rounded`}>
            {'<'} Previous
          </button>
          <button
            onClick={() => setPage(page + 1)}
            disabled={MaxPage}
            className={`${
              MaxPage ? 'bg-gray-300 cursor-not-allowed' : 'bg-darkblue-05'
            } text-white px-4 py-2 rounded`}>
            Next {'>'}
          </button>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
