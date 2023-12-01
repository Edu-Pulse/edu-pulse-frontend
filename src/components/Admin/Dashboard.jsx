import {
	FunnelIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

function Dashboard() {
  return (
    <section className="h-[68.5%] px-20 pt-[10px] ">
      <div className=" h-[98%]">
        <div className="flex">
          <div className=" h-[50px] w-[50%] font-Montserrat font-bold text-xl py-2">
            Status Pembayaran
          </div>
          <div className=" h-[50px] w-[50%] flex font-Montserrat text-darkblue-05 py-2 ps-[35%] gap-2">
            <div className="border-2 border-darkblue-05  rounded-full flex w-24 gap-2 ps-3 pt-1">
              <FunnelIcon className="h-5 w-5" />
              Filter
            </div>
            <MagnifyingGlassIcon className="h-6 w-6  mt-1" />
          </div>
        </div>
        <div className=" h-[87.5%] ">
          <table className=" w-full h-full table-auto">
            <thead className="bg-darkblue-06 ">
              <tr className="!text-start">
                <th className="font-medium !text-start">ID</th>
                <th className="font-medium !text-start">Kategori</th>
                <th className="font-medium !text-start">Kelas Premium</th>
                <th className="font-medium !text-start">Status</th>
                <th className="font-medium !text-start">Metode Pembayaran</th>
                <th className="font-medium !text-start">Tanggal Bayar</th>
              </tr>
            </thead>
            <tbody className="text-start text-xs ">
              <tr>
                <td>johndoe123</td>
                <td>UI/UX Design</td>
                <td className="font-bold">Belajar Web Designer dengan Figma</td>
                <td className="font-bold text-alert-success">SUDAH BAYAR</td>
                <td className="font-bold">Credit Card</td>
                <td>21 Sep, 2023 at 2:00 AM</td>
              </tr>
              <tr>
                <td>supermanxx</td>
                <td>UI/UX Design</td>
                <td className="font-bold">Belajar Web Designer dengan Figma</td>
                <td className="font-bold text-alert-warning">BELUM BAYAR</td>
                <td className="font-bold">-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>ironman99</td>
                <td>Web Development</td>
                <td className="font-bold">CSS dan HTML dalam seminggu</td>
                <td className="font-bold text-alert-success">SUDAH BAYAR</td>
                <td className="font-bold">Credit Card</td>
                <td>21 Sep, 2023 at 2:00 AM</td>
              </tr>
              <tr>
                <td>lokiMaster</td>
                <td>Data Science</td>
                <td className="font-bold">Data Cleaning untuk pemula</td>
                <td className="font-bold text-alert-success">SUDAH BAYAR</td>
                <td className="font-bold">Credit Card</td>
                <td>21 Sep, 2023 at 2:00 AM</td>
              </tr>
              <tr>
                <td>siapaAjaani</td>
                <td>Data Science</td>
                <td className="font-bold">Data Cleaning untuk pemula</td>
                <td className="font-bold text-alert-warning">BELUM BAYAR</td>
                <td className="font-bold">-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>lokiMaster</td>
                <td>Web Development</td>
                <td className="font-bold">Membuat wordpress mudah</td>
                <td className="font-bold text-alert-warning">BELUM BAYAR</td>
                <td className="font-bold">-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>visionOKE</td>
                <td>Data Science</td>
                <td className="font-bold">Data Cleaning untuk pemula</td>
                <td className="font-bold text-alert-success">SUDAH BAYAR</td>
                <td className="font-bold">Credit Card</td>
                <td>21 Sep, 2023 at 2:00 AM</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
