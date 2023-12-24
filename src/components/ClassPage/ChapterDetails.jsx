const ChapterDetails = ({ selectedChapterContent }) => {
	console.log(selectedChapterContent);
	return (
		<div>
			<div key={selectedChapterContent.id}>
				<div className="aspect-video">
					<iframe
						className="w-full h-auto aspect-video"
						src={selectedChapterContent.video?.replace(
							"youtu.be",
							"youtube.com/embed"
						)}
						title={selectedChapterContent.name}
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
				</div>
				<div>
					<h2 className="font-bold text-lg mb-2">
						{selectedChapterContent.name}
					</h2>
					<p className="indent-8 mb-2">
						{selectedChapterContent.material}
					</p>
				</div>
			</div>
		</div>
	);
};

export default ChapterDetails;
