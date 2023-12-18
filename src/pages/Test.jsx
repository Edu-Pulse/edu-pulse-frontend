import { useState } from "react";
import ReactPaginate from 'react-paginate';

// Data JSON
const data = [
  { id: 1, name: 'John Doe', age: 25 },
  { id: 2, name: 'Jane Doe', age: 30 },
  { id: 3, name: 'Bob Smith', age: 28 },
  { id: 4, name: 'Alice Johnson', age: 22 },
  { id: 5, name: 'Charlie Brown', age: 35 },
  { id: 6, name: 'Eva Green', age: 27 },
  { id: 7, name: 'David Lee', age: 32 },
  { id: 8, name: 'Grace Taylor', age: 29 },
  { id: 9, name: 'Henry White', age: 31 },
  { id: 10, name: 'Ivy Anderson', age: 26 },
  { id: 11, name: 'Jack Black', age: 33 },
  { id: 12, name: 'Kelly Davis', age: 28 },
  { id: 13, name: 'Leo Rodriguez', age: 24 },
  { id: 14, name: 'Mia Wilson', age: 30 },
  { id: 15, name: 'Nick Carter', age: 29 },
  { id: 16, name: 'Olivia Brown', age: 27 },
  { id: 17, name: 'Paul Miller', age: 34 },
  { id: 18, name: 'Quinn Parker', age: 26 },
  { id: 19, name: 'Rachel Hall', age: 31 },
  { id: 20, name: 'Samuel Turner', age: 29 },
];

const itemsPerPage = 10;

const Test = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [count, setCount] = useState(0);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const displayedData = data.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleNextClick = () => {
    setCount(count + 1);
  };

  const handlePreviousClick = () => {
    setCount(count - 1);
  };
  
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4">React Paginate Table</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Age</th>
          </tr>
        </thead>
        <tbody>
          {displayedData.map((item) => (
            <tr key={item.id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">{item.id}</td>
              <td className="py-2 px-4 border-b">{item.name}</td>
              <td className="py-2 px-4 border-b">{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        breakLabel={'...'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'flex justify-center mt-4'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
        previousClassName={'bg-blue-500 w-20 text-white p-2 rounded mr-2 cursor-pointer'}
        nextClassName={'bg-blue-500 text-white p-2 rounded ml-2 cursor-pointer'}
      />

<div className="container mx-auto mt-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Counter App</h1>
      <div className="flex items-center justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-4 rounded"
          onClick={handlePreviousClick}
        >
          Previous
        </button>
        <p className="text-xl">Nilai: {count}</p>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 ml-4 rounded"
          onClick={handleNextClick}
        >
          Next
        </button>
      </div>
    </div>
    </div>
  )
}

export default Test