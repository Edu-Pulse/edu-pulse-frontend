import { useState } from 'react';
import Icon from '../../assets/svg/Icon-Dashboard.svg'
import logo from '../../assets/svg/Logo-Belajar.svg';
import {
  PlusCircleIcon,
	FunnelIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import AdminModal from './AdminModal';
import { Link } from 'react-router-dom';

function KelolaKelas() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <body className=" flex h-[100vh] w-[100vw]">
    <aside className=" w-[20%] h-full bg-darkblue-05">
      <div className='px-5 '>
        <img
          src={logo}
          alt="logo-belajar"
          className=" h-[150px]"
        />
      </div>
      <div className='text-white font-Montserrat text-[16px] font-bold leading-[36px]'>
        <Link to="/dashboard">
          <div className=" h-12 ps-9 py-1 w-full">Dashboard</div>
        </Link>
        <div className=" h-12 ps-9 py-1 w-full bg-darkblue-03">Kelola Kelas</div>
        <Link to="/admin">
          <div className=" h-12 ps-9 py-1 w-full">Keluar</div>
        </Link>
      </div>
    </aside>
    <main className=" w-[100vw] ">
      <section className=" flex px-[65px] h-20 gap-x-32 bg-darkblue-06">
      <div className="h-full w-[50%] pt-6 grid place-content-start font-Montserrat text-[24px] font-bold leading-[36px] text-darkblue-05">Hi, Admin!</div>
        <div className="flex items-center w-[300px]">
            <input
              type="text"
              className="py-3 px-4 rounded-2xl w-full outline-none"
              placeholder='Cari'
            />
            <span className="p-2 -ml-11 text-white rounded-xl bg-darkblue-05 hover:cursor-pointer">
              <MagnifyingGlassIcon className="h-5 w-5" />
            </span>
          </div>
      </section>
      <section className=" h-[19%] px-20 pt-[13px]  flex justify-between gap-x-6">
        <div className="flex gap-5 w-2/4 h-24 rounded-2xl bg-darkblue-03 ps-9 py-2">
          <img
            src={Icon}
            alt="icon-dashboard"
            width={60}
            height={60}
          />
          <div className="py-3">
            <div className="font-inter font-normal text-white text-xl p-0 ms-0 ">450</div>
            <div className="font-inter font-bold text-white text-xl p-0 m-0">Active Users</div>
          </div>
        </div>
        <div className="flex gap-5 w-2/4 h-24 rounded-2xl bg-alert-success ps-9 py-2">
          <img
            src={Icon}
            alt="icon-dashboard"
            width={60}
            height={60} 
          />
          <div className="py-3">
            <div className="font-inter font-normal text-white text-xl p-0 ms-0 ">25</div>
            <div className="font-inter font-bold text-white text-xl p-0 m-0">Active Class</div>
          </div>
        </div>
        <div className="flex gap-5 w-2/4 h-24 rounded-2xl bg-darkblue-05 ps-9 py-2">
          <img
            src={Icon}
            alt="icon-dashboard"
            width={60}
            height={60} 
          />
          <div className="py-3">
            <div className="font-inter font-normal text-white text-xl p-0 ms-0 ">20</div>
            <div className="font-inter font-bold text-white text-xl p-0 m-0">Premium Class</div>
          </div>
        </div>
      </section>
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
                  <th className='font-medium'>Kode Kelas</th>
                  <th className='font-medium'>Kategori</th>
                  <th className='font-medium'>Nama Kelas</th>
                  <th className='font-medium'>Tipe Kelas</th>
                  <th className='font-medium'>Level</th>
                  <th className='font-medium'>Harga Kelas</th>
                  <th className='font-medium'>Aksi</th>
                </tr>
              </thead>
              <tbody className='text-center text-xs '>
                <tr>
                  <td>UIUX0123</td>
                  <td>UI/UX Design</td>
                  <td className='font-bold'>Belajar Web Designer dengan Figma</td>
                  <td className='font-bold text-alert-success'>GRATIS</td>
                  <td className='font-bold'>Beginner</td>
                  <td className='font-bold'>Rp 0</td>
                  <td>
                    <div className='flex gap-1'>
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
                  <div className='flex gap-1'>
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
                  <div className='flex gap-1'>
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
                  <div className='flex gap-1'>
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
                  <div className='flex gap-1'>
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
                  <div className='flex gap-1'>
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
                  <div className='flex gap-1'>
                      <div className='bg-darkblue-05 rounded-full w-14 h-6 pt-1 text-white font-bold'>ubah</div>
                      <div className='bg-alert-warning rounded-full w-14 h-6 pt-1 text-white font-bold'>Hapus</div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {showModal && (
        <AdminModal handleCloseModal={handleCloseModal}/>
      )}

    </main>
    </body>
  )
}

export default KelolaKelas