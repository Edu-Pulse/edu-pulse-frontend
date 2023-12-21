import clsx from "clsx"
// import Select from "../UI/Select"

const FilterModal = ({ handleCloseModal,  }) => {
  return (
    <div
          className={clsx(
            'fixed z-10 inset-0 grid justify-items-end content-center',
            'bg-black bg-opacity-75',
          )}
        >
          <div
            className={clsx(
              '',
              'bg-white px-7 pb-4 rounded-lg ',
              'w-1/4 h-20'
            )}
          >
            <div className="flex justify-end font-bold text-2xl">
              <button
                type="button"
                className="text-gray-400 close hover:bg-gray-300 rounded-full w-10 h-10"
                onClick={handleCloseModal}
              >
                &times;
              </button>
            </div>
            {/* <div className="modal-body py-1 text-center  mx-auto">
            <h1 className="font-Montserrat text-[24px]  font-bold leading-[36px] text-darkblue-05">Filter Kelas</h1>
            </div>
            <div className='border border-black mx-auto'>
              <p>testing</p>
            </div>
            <div className="flex justify-center border border-black  mx-auto mt-1 gap-2">
              <button
                type="button"
                className="bg-alert-warning text-white font-bold py-2 px-4 rounded-full cursor-pointer"
                onClick={handleCloseModal}
              >
                Upload Video
              </button>
              <button
                type="button"
                className="bg-darkblue-05 text-white font-bold py-2 px-4 rounded-full cursor-pointer"
                // onClick={handleSave}
              >
                Simpan
              </button>
            </div> */}
          </div>
        </div>
  )
}

export default FilterModal