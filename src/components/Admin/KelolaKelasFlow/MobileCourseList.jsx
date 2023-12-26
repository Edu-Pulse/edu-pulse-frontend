import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';
import Spinner from '../../UI/Spinner';

const MobileCourseList = ({
  isLoading,
  handleEdit,
  handleDeleteCode,
  filteredData,
  selectedType,
}) => {
  return (
    <>
      {isLoading ? (
        <div className="bg-gray-100 space-y-3 p-4 rounded-lg shadow">
          <div
            colSpan="7"
            className="p-3 text-sm text-gray-700 whitespace-nowrap">
            <Spinner />
          </div>
        </div>
      ) : (
        <>
          {filteredData
            .filter(
              (courseItem) =>
                selectedType === 'ALL' || courseItem.type === selectedType
            )
            .map((courseItem, index) => (
              <div
                key={index}
                className="bg-gray-100 space-y-3 p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2 text-sm">
                  <div>
                    <a
                      href="#"
                      className="text-blue-500 font-bold hover:underline">
                      {courseItem.code}
                    </a>
                  </div>
                  <div className="text-gray-500">{courseItem.level}</div>
                  <div>
                    {courseItem.type === 'GRATIS' ? (
                      <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                        {courseItem.type}
                      </span>
                    ) : (
                      <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-blue-800 bg-blue-500 rounded-lg bg-opacity-50">
                        {courseItem.type}
                      </span>
                    )}
                  </div>
                </div>
                <div className="text-sm text-gray-700">
                  {courseItem.category}
                </div>
                <div className="text-sm text-gray-700">{courseItem.name}</div>
                <div className="text-sm font-medium text-black">
                  {courseItem.price}
                </div>
                <div className="text-sm font-medium text-black">
                  <span className="flex gap-3 justify-start pt-5">
                    <PencilSquareIcon
                      className="h-5 w-5 rounded-md text-green-800 bg-green-200 cursor-pointer outline outline-offset-2 outline-2"
                      onClick={() => handleEdit(courseItem.code)}
                    />
                    <TrashIcon
                      type="button"
                      className="h-5 w-5 rounded-md text-red-800 bg-red-200 cursor-pointer outline outline-offset-2 outline-2"
                      onClick={() => handleDeleteCode(courseItem.code)}
                    />
                  </span>
                </div>
              </div>
            ))}
        </>
      )}
    </>
  );
};

export default MobileCourseList;
