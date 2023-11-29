/* eslint-disable react/prop-types */
import clsx from "clsx";
import Input from '../UI/Input';

function AdminModal({handleCloseModal}) {
  return (
    <div
          className={clsx(
            'fixed z-10 inset-0 overflow-y-auto grid place-content-center',
            'bg-black bg-opacity-75'
          )}
        >
          <div
            className={clsx(
              'relative transform-transition',
              'bg-white px-7 pb-4 rounded-lg overflow-y-scroll',
              'h-[599px] w-[750px]'
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
            <div className="modal-body py-1 text-center w-[465px] mx-auto">
            <h1 className="font-Montserrat text-[24px]  font-bold leading-[36px] text-darkblue-05">Tambah Kelas</h1>
            </div>
            <div className='h-[83%] w-[465px] mx-auto'>
              <Input 
                placeholder="Text" 
                type="text"  
                label="Nama Kelas"
                name="text"
              />
              <Input 
                placeholder="Text" 
                type="text"  
                label="Kategori"
                name="text"
              />
              <Input 
                placeholder="Text" 
                type="text"  
                label="Kode Kelas"
                name="text"
              />
              <Input 
                placeholder="Text" 
                type="text"  
                label="Tipe Kelas"
                name="text"
              />
              <Input 
                placeholder="Text" 
                type="text"  
                label="Level"
                name="text"
              />
              <Input 
                placeholder="Text" 
                type="text"  
                label="Harga"
                name="text"
              />
              <Input
                placeholder="Paragraph" 
                type="text"  
                label="Materi"
              />
            </div>
            <div className="flex justify-center w-[465px] mx-auto mt-1 gap-2">
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
                onClick={handleCloseModal}
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
  )
}

export default AdminModal