import { XMarkIcon } from "@heroicons/react/24/outline";
const Modals = ({ open, onClose, children }) => {
  return (
    // backdrop
    <div
      onClick={onClose}
      className={`
        fixed inset-0 flex justify-center items-center transition-colors
        ${open ? "visible bg-black/20" : "invisible"}
      `}
    >
      {/* modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
          bg-white rounded-2xl shadow p-8 transition-all h-[450px] w-[500px]
          ${open ? "scale-100 w-[25rem] opacity-100" : "scale-125 opacity-0"}
        `}
      >
        {/* <div
        onClick={(e) => e.stopPropagation()}
        className={`
          bg-white rounded-2xl shadow p-8 transition-all h-[500px] w-[450px]
          ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
        `}
      > */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 rounded-lg text-darkblue-05 bg-white hover:bg-gray-50 hover:text-gray-600"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modals;
