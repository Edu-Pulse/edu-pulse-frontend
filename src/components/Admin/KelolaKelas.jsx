import { useState } from 'react';
import {
  PlusCircleIcon,
	FunnelIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import AdminModal from './AdminModal';

function KelolaKelas() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <section className="h-[68.5%] px-20 pt-[10px] ">
      <div className=" h-[98%]">
          <div className='flex'>
            <div className=' h-[50px] w-[50%] font-Montserrat font-bold text-xl py-2'>Status Pembayaran</div>
            <div className='h-[50px] w-[50%] flex font-bold font-Montserrat text-darkblue-05 text-end py-2 ps-[20%] gap-2'>
              <button className='bg-darkblue-05  rounded-full flex w-32 gap-2 ps-3 pt-1.5 text-white' onClick={handleOpenModal}>
                <PlusCircleIcon className="h-6 w-6" />
                Tambah
              </button>
              <div className='border-2 border-darkblue-05  rounded-full flex w-24 gap-2 ps-3 pt-1'>
                <FunnelIcon className="h-5 w-5" />
                Filter
              </div>
                <MagnifyingGlassIcon className="h-6 w-6 mt-1" />
              
            </div>
          </div>
          <div className=' h-[87.5%] '>
            <table className=" w-full h-full">
              <thead className='bg-darkblue-06'>
                <tr>
                  <th className='font-medium text-start'>Kode Kelas</th>
                  <th className='font-medium text-start'>Kategori</th>
                  <th className='font-medium text-start'>Nama Kelas</th>
                  <th className='font-medium text-start'>Tipe Kelas</th>
                  <th className='font-medium text-start'>Level</th>
                  <th className='font-medium text-start'>Harga Kelas</th>
                  <th className='font-medium'>Aksi</th>
                </tr>
              </thead>
              <tbody className='text-start text-xs '>
                <tr>
                  <td>UIUX0123</td>
                  <td>UI/UX Design</td>
                  <td className='font-bold'>Belajar Web Designer dengan Figma</td>
                  <td className='font-bold text-alert-success'>GRATIS</td>
                  <td className='font-bold'>Beginner</td>
                  <td className='font-bold'>Rp 0</td>
                  <td>
                    <div className='flex gap-1 text-center'>
                      <div className='bg-darkblue-05 rounded-full w-14 h-6 pt-1 text-white font-bold'>ubah</div>
                      <div className='bg-alert-warning rounded-full w-14 h-6 pt-1 text-white font-bold'>Hapus</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>DS0223</td>
                  <td>Data Science</td>
                  <td className='font-bold'>Belajar Web Designer dengan Figma</td>
                  <td className='font-bold text-alert-success'>GRATIS</td>
                  <td className='font-bold'>Beginner</td>
                  <td className='font-bold'>Rp 0</td>
                  <td>
                  <div className='flex gap-1 text-center'>
                      <div className='bg-darkblue-05 rounded-full w-14 h-6 pt-1 text-white font-bold'>ubah</div>
                      <div className='bg-alert-warning rounded-full w-14 h-6 pt-1 text-white font-bold'>Hapus</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>DS0323</td>
                  <td>Data Science</td>
                  <td className='font-bold'>CSS dan HTML dalam seminggu</td>
                  <td className='font-bold text-darkblue-05'>PREMIUM</td>
                  <td className='font-bold'>Advanced</td>
                  <td className='font-bold'>Rp 199,000</td>
                  <td>
                  <div className='flex gap-1 text-center'>
                      <div className='bg-darkblue-05 rounded-full w-14 h-6 pt-1 text-white font-bold'>ubah</div>
                      <div className='bg-alert-warning rounded-full w-14 h-6 pt-1 text-white font-bold'>Hapus</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>PM0123</td>
                  <td>Product Management</td>
                  <td className='font-bold'>Data Cleaning untuk pemula</td>
                  <td className='font-bold text-darkblue-05'>PREMIUM</td>
                  <td className='font-bold'>Intermediate</td>
                  <td className='font-bold'>Rp 299,000</td>
                  <td>
                  <div className='flex gap-1 text-center'>
                      <div className='bg-darkblue-05 rounded-full w-14 h-6 pt-1 text-white font-bold'>ubah</div>
                      <div className='bg-alert-warning rounded-full w-14 h-6 pt-1 text-white font-bold'>Hapus</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>PM0223</td>
                  <td>Product Management</td>
                  <td className='font-bold'>Data Cleaning untuk pemula</td>
                  <td className='font-bold text-darkblue-05'>PREMIUM</td>
                  <td className='font-bold'>Advanced</td>
                  <td className='font-bold'>Rp 349,000</td>
                  <td>
                  <div className='flex gap-1 text-center'>
                      <div className='bg-darkblue-05 rounded-full w-14 h-6 pt-1 text-white font-bold'>ubah</div>
                      <div className='bg-alert-warning rounded-full w-14 h-6 pt-1 text-white font-bold'>Hapus</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>AD1023</td>
                  <td>Android Development</td>
                  <td className='font-bold'>Membuat wordpress mudah</td>
                  <td className='font-bold text-alert-success'>GRATIS</td>
                  <td className='font-bold'>Beginner</td>
                  <td className='font-bold'>Rp 0</td>
                  <td>
                  <div className='flex gap-1 text-center'>
                      <div className='bg-darkblue-05 rounded-full w-14 h-6 pt-1 text-white font-bold'>ubah</div>
                      <div className='bg-alert-warning rounded-full w-14 h-6 pt-1 text-white font-bold'>Hapus</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>WD1123</td>
                  <td>Web Development</td>
                  <td className='font-bold'>Data Cleaning untuk pemula</td>
                  <td className='font-bold text-alert-success'>GRATIS</td>
                  <td className='font-bold'>Beginner</td>
                  <td className='font-bold'>Rp 0</td>
                  <td>
                  <div className='flex gap-1 text-center'>
                      <div className='bg-darkblue-05 rounded-full w-14 h-6 pt-1 text-white font-bold'>ubah</div>
                      <div className='bg-alert-warning rounded-full w-14 h-6 pt-1 text-white font-bold'>Hapus</div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
          {showModal && (
            <AdminModal handleCloseModal={handleCloseModal}/>
          )}
      </section>
  )
}

export default KelolaKelas