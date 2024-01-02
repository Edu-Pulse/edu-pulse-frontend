const ChapterDetails = ({ selectedChapterContent }) => {
  console.log(selectedChapterContent[0]);
  return (
    <div>
      <div key={selectedChapterContent[0].id}>
        <div className="aspect-video">
          <iframe
            className="w-full h-auto aspect-video"
            src={selectedChapterContent[0].video?.replace(
              "youtu.be",
              "youtube.com/embed"
            )}
            title={selectedChapterContent[0].name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <h2 className="font-bold text-lg mb-2 mt-4">
            {selectedChapterContent[0].name}
          </h2>
          <p className="indent-8 mb-2">{selectedChapterContent[0].material}</p>
        </div>
      </div>
    </div>
  );
};

export default ChapterDetails;
