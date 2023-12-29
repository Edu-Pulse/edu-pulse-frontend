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
    </>
  );
};

export default ContentClass;
