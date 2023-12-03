import {
	FunnelIcon,
  MagnifyingGlassIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

function Dashboard() {
  return (
    <>
    <section className="md:w-[100%] sm:w-[100%] w-[100%] md:h-[10%] md:mt-3 h-[8%] md:px-20 sm:px-5 px-3 pt-[10px] ">
        <div className="flex">
          <div className=" h-[50px] sm:w-[50%] w-[60%] font-Montserrat font-bold text-xl py-2">
            Status Pembayaran
          </div>
          <div className=" h-[50px] sm:w-[50%] w-[40%] flex font-Montserrat text-darkblue-05 py-2 md:ps-[35%] ps-[10%] gap-2">
            <div className="border-2 border-darkblue-05  rounded-full flex w-24 sm:gap-2 ps-3 pt-1">
              <FunnelIcon className="h-5 w-5" />
              Filter
            </div>
            <MagnifyingGlassIcon className="h-6 w-6  mt-1" />
          </div>
        </div>
        </section>
      
        <section className="px-5">
        <div className="overflow-y-scroll md:h-[300px] rounded-lg shadow hidden md:block p-5 bg-gray-100">
          <table className="w-full">
            <thead className="bg-gray-50 border-b-2 border-gray-200">
              <tr>
                <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">ID</th>
                <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">Kategori</th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">Kelas Premium</th>
                <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">Status</th>
                <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">Payment</th>
                <th className="w-24 p-3 text-sm font-semibold tracking-wide text-center">Tanggal Bayar</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="bg-white">
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <a href="#" className="font-bold text-blue-500 hover:underline">johndoe123</a>
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">UI/UX Design</td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">Belajar Web Designer dengan Figma</td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">SUDAH BAYAR</span>
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">Credit Card</td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">21 Sep, 2023 at 2:00 AM</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <a href="#" className="font-bold text-blue-500 hover:underline">supermanxx</a>
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">UI/UX Design</td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">Belajar Web Designer dengan Figma</td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-lg bg-opacity-50">BELUM BAYAR</span>
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">-</td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">-</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <a href="#" className="font-bold text-blue-500 hover:underline">ironman99</a>
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">Web Development</td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">CSS dan HTML dalam seminggu</td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">SUDAH BAYAR</span>
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">Credit Card</td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">20 Sep, 2023 at 2:00 AM</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <a href="#" className="font-bold text-blue-500 hover:underline">lokiMaster</a>
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">Data Science</td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">Data Cleaning untuk pemula</td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">SUDAH BAYAR</span>
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">Credit Card</td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">19 Sep, 2023 at 2:00 AM</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <a href="#" className="font-bold text-blue-500 hover:underline">siapaAjaani</a>
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">Data Science</td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">Data Cleaning untuk pemula</td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-lg bg-opacity-50">BELUM BAYAR</span>
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">-</td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">-</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <a href="#" className="font-bold text-blue-500 hover:underline">lokiMaster</a>
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">Web Development</td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">Membuat wordpress mudah</td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-lg bg-opacity-50">BELUM BAYAR</span>
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">-</td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">-</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <a href="#" className="font-bold text-blue-500 hover:underline">visionOKE</a>
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">Data Science</td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">Data Cleaning untuk pemula</td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">SUDAH BAYAR</span>
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">Credit Card</td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">10 Sep, 2023 at 2:00 AM</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden mt-4 mb-20 pb-5">
          <div className="bg-gray-100 space-y-3 p-4 rounded-lg shadow">
            <div className="flex items-center space-x-2 text-sm">
              <div>
                <a href="#" className="text-blue-500 font-bold hover:underline">johndoe123</a>
              </div>
              <div className="text-gray-500">10/10/2021</div>
              <div>
              <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">SUDAH BAYAR</span>
              </div>
            </div>
              <div className="text-sm text-gray-700">
              UI/UX Design
              </div>
              <div className="text-sm text-gray-700">
              Belajar Web Designer dengan Figma
              </div>
              <div className="text-sm font-medium text-black">
                $200.00
              </div>
              <div className="text-sm font-medium text-black">
                <span className="flex gap-3 justify-start pt-5">
                  <PencilSquareIcon className="h-5 w-5 rounded-md text-green-800 bg-green-200 cursor-pointer outline outline-offset-2 outline-2" />
                  <TrashIcon className="h-5 w-5 rounded-md text-red-800 bg-red-200 cursor-pointer outline outline-offset-2 outline-2" />
                </span>
              </div>
             
          </div>
          <div className="bg-gray-100 space-y-3 p-4 rounded-lg shadow">
            <div className="flex items-center space-x-2 text-sm">
              <div>
                <a href="#" className="text-blue-500 font-bold hover:underline">supermanxx</a>
              </div>
              <div className="text-gray-500">10/10/2021</div>
              <div>
              <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-lg bg-opacity-50">BELUM BAYAR</span>
              </div>
            </div>
              <div className="text-sm text-gray-700">
              UI/UX Design
              </div>
              <div className="text-sm text-gray-700">
              Belajar Web Designer dengan Figma
              </div>
              <div className="text-sm font-medium text-black">
                $200.00
              </div>
              <div className="text-sm font-medium text-black">
                <span className="flex gap-3 justify-start pt-5">
                  <PencilSquareIcon className="h-5 w-5 rounded-md text-green-800 bg-green-200 cursor-pointer outline outline-offset-2 outline-2" />
                  <TrashIcon className="h-5 w-5 rounded-md text-red-800 bg-red-200 cursor-pointer outline outline-offset-2 outline-2" />
                </span>
              </div>
          </div>
          <div className="bg-gray-100 space-y-3 p-4 rounded-lg shadow">
            <div className="flex items-center space-x-2 text-sm">
              <div>
                <a href="#" className="text-blue-500 font-bold hover:underline">ironman99</a>
              </div>
              <div className="text-gray-500">10/10/2021</div>
              <div>
                <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">SUDAH BAYAR</span>
              </div>
            </div>
              <div className="text-sm text-gray-700">
              Web Development	
              </div>
              <div className="text-sm text-gray-700">
              CSS dan HTML dalam seminggu
              </div>
              <div className="text-sm font-medium text-black">
                $200.00
              </div>
              <div className="text-sm font-medium text-black">
                <span className="flex gap-3 justify-start pt-5">
                  <PencilSquareIcon className="h-5 w-5 rounded-md text-green-800 bg-green-200 cursor-pointer outline outline-offset-2 outline-2" />
                  <TrashIcon className="h-5 w-5 rounded-md text-red-800 bg-red-200 cursor-pointer outline outline-offset-2 outline-2" />
                </span>
              </div>
          </div>
          <div className="bg-gray-100 space-y-3 p-4 rounded-lg shadow">
            <div className="flex items-center space-x-2 text-sm">
              <div>
                <a href="#" className="text-blue-500 font-bold hover:underline">lokiMaster</a>
              </div>
              <div className="text-gray-500">10/10/2021</div>
              <div>
                <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">SUDAH BAYAR</span>
              </div>
            </div>
              <div className="text-sm text-gray-700">
              Data Science
              </div>
              <div className="text-sm text-gray-700">
              Data Cleaning untuk pemula
              </div>
              <div className="text-sm font-medium text-black">
                $200.00
              </div>
              <div className="text-sm font-medium text-black">
                <span className="flex gap-3 justify-start pt-5">
                  <PencilSquareIcon className="h-5 w-5 rounded-md text-green-800 bg-green-200 cursor-pointer outline outline-offset-2 outline-2" />
                  <TrashIcon className="h-5 w-5 rounded-md text-red-800 bg-red-200 cursor-pointer outline outline-offset-2 outline-2" />
                </span>
              </div>
          </div>
          <div className="bg-gray-100 space-y-3 p-4 rounded-lg shadow">
            <div className="flex items-center space-x-2 text-sm">
              <div>
                <a href="#" className="text-blue-500 font-bold hover:underline">siapaAjaani</a>
              </div>
              <div className="text-gray-500">10/10/2021</div>
              <div>
                <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-lg bg-opacity-50">BELUM BAYAR</span>
              </div>
            </div>
              <div className="text-sm text-gray-700">
              Data Science
              </div>
              <div className="text-sm text-gray-700">
              Data Cleaning untuk pemula
              </div>
              <div className="text-sm font-medium text-black">
                $200.00
              </div>
              <div className="text-sm font-medium text-black">
                <span className="flex gap-3 justify-start pt-5">
                  <PencilSquareIcon className="h-5 w-5 rounded-md text-green-800 bg-green-200 cursor-pointer outline outline-offset-2 outline-2" />
                  <TrashIcon className="h-5 w-5 rounded-md text-red-800 bg-red-200 cursor-pointer outline outline-offset-2 outline-2" />
                </span>
              </div>
          </div>
          <div className="bg-gray-100 space-y-3 p-4 rounded-lg shadow">
            <div className="flex items-center space-x-2 text-sm">
              <div>
                <a href="#" className="text-blue-500 font-bold hover:underline">lokiMaster</a>
              </div>
              <div className="text-gray-500">10/10/2021</div>
              <div>
                <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-lg bg-opacity-50">BELUM BAYAR</span>
              </div>
            </div>
              <div className="text-sm text-gray-700">
              Web Development	
              </div>
              <div className="text-sm text-gray-700">
              Membuat wordpress mudah
              </div>
              <div className="text-sm font-medium text-black">
                $200.00
              </div>
              <div className="text-sm font-medium text-black">
                <span className="flex gap-3 justify-start pt-5">
                  <PencilSquareIcon className="h-5 w-5 rounded-md text-green-800 bg-green-200 cursor-pointer outline outline-offset-2 outline-2" />
                  <TrashIcon className="h-5 w-5 rounded-md text-red-800 bg-red-200 cursor-pointer outline outline-offset-2 outline-2" />
                </span>
              </div>
          </div>
          <div className="bg-gray-100 space-y-3 p-4 rounded-lg shadow">
            <div className="flex items-center space-x-2 text-sm">
              <div>
                <a href="#" className="text-blue-500 font-bold hover:underline">visionOKE</a>
              </div>
              <div className="text-gray-500">10/10/2021</div>
              <div>
                <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">SUDAH BAYAR</span>
              </div>
            </div>
              <div className="text-sm text-gray-700">
              Data Science	
              </div>
              <div className="text-sm text-gray-700">
              Data Cleaning untuk pemula
              </div>
              <div className="text-sm font-medium text-black">
                $200.00
              </div>
              <div className="text-sm font-medium text-black">
                <span className="flex gap-3 justify-start pt-5">
                  <PencilSquareIcon className="h-5 w-5 rounded-md text-green-800 bg-green-200 cursor-pointer outline outline-offset-2 outline-2" />
                  <TrashIcon className="h-5 w-5 rounded-md text-red-800 bg-red-200 cursor-pointer outline outline-offset-2 outline-2" />
                </span>
              </div>
          </div>
        </div>
        </section>
        </>
  );
}

export default Dashboard;
