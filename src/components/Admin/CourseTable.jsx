import {
	PencilSquareIcon,
	TrashIcon,
} from "@heroicons/react/24/outline";
import Spinner from "../UI/Spinner";
const CourseTable = ({ courseItem, handleEdit, handleDeleteCode, isLoading }) => {
  return isLoading ? (
    // Loading spinner or any other loading indicator
  <div><Spinner/></div>
  ) : (
    // Rest of the modal content
    <>
    <tr className="bg-white">
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

    <TrashIcon type="button" className="h-5 w-5 rounded-md text-red-800 bg-red-200 cursor-pointer outline outline-offset-2 outline-2"
    onClick={() => handleDeleteCode(courseItem.code)}
    />

    </span>
    </td>
    </tr>
    </>
  )
}

export default CourseTable