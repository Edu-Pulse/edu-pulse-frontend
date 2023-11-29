import { Link } from 'react-router-dom';
import Icon from '../../assets/svg/Icon-Dashboard.svg'
import logo from '../../assets/svg/Logo-Belajar.svg';
import {
	FunnelIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

function Dashboard() {
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
        <div className=" h-12 ps-9 py-1 w-full bg-darkblue-03">Dashboard</div>
        <Link to="/kelolakelas">
          <div className=" h-12 ps-9 py-1 w-full">Kelola Kelas</div>
        </Link>
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
            <div className=' h-[50px] w-[50%] flex font-Montserrat text-darkblue-05 py-2 ps-[35%] gap-2'>
              <div className='border-2 border-darkblue-05  rounded-full flex w-24 gap-2 ps-3 pt-1'>
                <FunnelIcon className="h-5 w-5" />
                Filter
              </div>
                <MagnifyingGlassIcon className="h-6 w-6  mt-1" />
              
            </div>
          </div>
          <div className=' h-[87.5%] '>
            <table className=" w-full h-full">
              <thead className='bg-darkblue-06'>
                <tr>
                  <th className='font-medium'>ID</th>
                  <th className='font-medium'>Kategori</th>
                  <th className='font-medium'>Kelas Premium</th>
                  <th className='font-medium'>Status</th>
                  <th className='font-medium'>Metode Pembayaran</th>
                  <th className='font-medium'>Tanggal Bayar</th>
                </tr>
              </thead>
              <tbody className='text-center text-xs '>
                <tr>
                  <td>johndoe123</td>
                  <td>UI/UX Design</td>
                  <td className='font-bold'>Belajar Web Designer dengan Figma</td>
                  <td className='font-bold text-alert-success'>SUDAH BAYAR</td>
                  <td className='font-bold'>Credit Card</td>
                  <td>21 Sep, 2023 at 2:00 AM</td>
                </tr>
                <tr>
                  <td>supermanxx</td>
                  <td>UI/UX Design</td>
                  <td className='font-bold'>Belajar Web Designer dengan Figma</td>
                  <td className='font-bold text-alert-warning'>BELUM BAYAR</td>
                  <td className='font-bold'>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>ironman99</td>
                  <td>Web Development</td>
                  <td className='font-bold'>CSS dan HTML dalam seminggu</td>
                  <td className='font-bold text-alert-success'>SUDAH BAYAR</td>
                  <td className='font-bold'>Credit Card</td>
                  <td>21 Sep, 2023 at 2:00 AM</td>
                </tr>
                <tr>
                  <td>lokiMaster</td>
                  <td>Data Science</td>
                  <td className='font-bold'>Data Cleaning untuk pemula</td>
                  <td className='font-bold text-alert-success'>SUDAH BAYAR</td>
                  <td className='font-bold'>Credit Card</td>
                  <td>21 Sep, 2023 at 2:00 AM</td>
                </tr>
                <tr>
                  <td>siapaAjaani</td>
                  <td>Data Science</td>
                  <td className='font-bold'>Data Cleaning untuk pemula</td>
                  <td className='font-bold text-alert-warning'>BELUM BAYAR</td>
                  <td className='font-bold'>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>lokiMaster</td>
                  <td>Web Development</td>
                  <td className='font-bold'>Membuat wordpress mudah</td>
                  <td className='font-bold text-alert-warning'>BELUM BAYAR</td>
                  <td className='font-bold'>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>visionOKE</td>
                  <td>Data Science</td>
                  <td className='font-bold'>Data Cleaning untuk pemula</td>
                  <td className='font-bold text-alert-success'>SUDAH BAYAR</td>
                  <td className='font-bold'>Credit Card</td>
                  <td>21 Sep, 2023 at 2:00 AM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
    </body>
  )
}

export default Dashboard