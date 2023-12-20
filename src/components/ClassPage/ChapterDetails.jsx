const ChapterDetails = ({ selectedChapterContent }) => {
  return (
    <div>
      {selectedChapterContent?.map(({ id, material, name, video }) => (
        <div key={id}>
          <div className="aspect-video">
            <iframe
              className="w-full h-auto aspect-video"
              src={video?.replace("youtu.be", "youtube.com/embed")}
              title={name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-2">{name}</h2>
            <p className="indent-8 mb-2">{material}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChapterDetails;
