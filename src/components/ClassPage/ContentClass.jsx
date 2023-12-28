import Modals from "@/components/CoursePage/Modals";
// import onboarding from "@/assets/Onboarding.png";

const ContentClass = ({ details }) => {
  return (
    <>
      <div>
        <div className="relative">
          <img
            src={details?.image}
            alt=""
            className="w-full aspect-video rounded-2xl my-10 flex items-center justify-center"
          />
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
      {/* <Modals isOpen={open} onClose={() => setOpen(!open)}>
        <div className="text-center">
          <div className="flex justify-center items-center">
            <h3 className="text-2xl font-bold mb-4">Onboarding</h3>
          </div>
          <img
            src={onboarding}
            className="object-cover hover:scale-105 transition-all duration-300 mx-auto"
          />
          <div>
            <p className="font-semibold my-5">Selamat Belajar</p>
            <p>
              Persiapkan semua tools yang disarankan agar bisa belajar dengan
              maksimal
            </p>
          </div>
          <div className="flex flex-row justify-center gap-4 mt-5">
            <button
              onClick={handleCloseModal}
              className="text-white bg-darkblue-05 h-10 px-16 py-2 flex gap-4 items-center hover:bg-purple-900 w-fit rounded-full hover:cursor-pointer transition-all duration-300"
            >
              Ikuti Kelas
            </button>
          </div>
        </div>
      </Modals> */}
    </>
  );
};

export default ContentClass;
