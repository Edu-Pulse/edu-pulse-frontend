import { PlayIcon } from "@heroicons/react/24/solid";

const ContentClass = ({ details }) => {
  console.log(details);
  return (
    <div>
      <div className="relative">
        <img
          src={details?.image}
          alt=""
          className="w-full aspect-video rounded-2xl my-10 flex items-center justify-center"
        />
        {/* <button className="text-white my-5 bg-darkblue-05 h-10 px-6 py-10 flex gap-4 items-center hover:bg-purple-900 w-fit rounded-full hover:cursor-pointer transition-all duration-300">
          <PlayIcon className="h-8 w-8" />
        </button> */}
        {/* <Modals isOpen={open} onClose={() => setOpen(!open)}>
          <div className="text-center">
            <div className="mx-[120px] w-48">
              <div className="flex">
                <h3 className="text-2xl font-bold mb-4">Onboarding</h3>
              </div>
            </div>
            <img
              src={onboarding}
              className="object-cover hover:scale-105 transition-all duration-300 mx-auto"
            />
            <div>
              <p className="font-semibold my-5">
                Persiapkan hal berikut untuk belajar yang maksimal:
              </p>
              <p>
                Mempunyai akun Figma atau Install Adobe XD Menggunakan internet
                minimal kecepatan 2Mbps Belajar di tempat yang nyaman
              </p>
            </div>

            <div className="flex flex-row justify-center gap-4 mt-5">
              <button className="text-white bg-darkblue-05 h-10 px-16 py-2 flex gap-4 items-center hover:bg-purple-900 w-fit rounded-full hover:cursor-pointer transition-all duration-300">
                Ikuti Kelas
              </button>
            </div>
          </div>
        </Modals> */}
      </div>

      <div>
        <h1 className="font-bold text-xl mb-3">Tentang Kelas</h1>
        <p className="indent-8 mb-2">{details?.description}</p>
      </div>
      <div className="mb-5">
        <h1 className="font-bold text-xl mt-8 mb-3">
          Kelas Ini Ditujukan Untuk
        </h1>
        <ol className="list-decimal ml-5">
          {details?.ditunjukanUntuk.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default ContentClass;
