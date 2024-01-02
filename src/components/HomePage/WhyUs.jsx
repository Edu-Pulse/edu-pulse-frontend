import videoIllustration from "@/assets/florian-olivo-video-unsplash.webp";
import timeIllustration from "@/assets/lukas-blazek-time-unsplash.webp";
import communityIllustration from "@/assets/hannah-busing-community-unsplash.webp";
import curriculumIllustration from "@/assets/john-schnobrich-curriculum-unsplash.webp";
const WhyUs = () => {
	return (
		<section className="container mx-auto my-12">
			<div className="flex flex-col sm:flex-row justify-between items-center gap-8 bg-indigo-950 px-8 py-6 rounded-xl">
				<div className="sm:w-2/5">
					<h2 className="text-2xl font-semibold text-darkblue-03 mb-8">
						Kenapa harus EduPulse?
					</h2>
					<p className="text-white">
						EduPulse adalah pilihan utama Anda untuk pembelajaran
						online. Dengan beragam kursus, instruktur ahli, dan
						materi pembelajaran interaktif, EduPulse memastikan
						pengalaman pendidikan yang luar biasa.
					</p>
				</div>
				<div className="text-slate-700 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full font-medium sm:w-3/5">
					<div className="min-h-32 group relative flex justify-between overflow-hidden items-center rounded-xl">
						<p className="w-full flex items-center justify-start pl-4 z-10 h-full bg-gradient-to-r from-white from-40% to-transparent">
							<span className="w-2/3">
								Kurikulum berstandar industri
							</span>
						</p>
						<img
							src={curriculumIllustration}
							className="w-full h-full object-cover absolute right-0 group-hover:scale-105 transition-all"
							alt="Curriculum"
							width={600}
							height={400}
						/>
					</div>
					<div className="min-h-32 group relative flex justify-between overflow-hidden items-center rounded-xl">
						<p className="w-full flex items-center justify-start pl-4 z-10 h-full bg-gradient-to-r from-white from-40% to-transparent">
							<span className="w-2/3">
								Jam belajar yang fleksibel
							</span>
						</p>
						<img
							src={timeIllustration}
							className="w-full h-full object-cover absolute right-0 group-hover:scale-105 transition-all"
							alt="Curriculum"
							width={600}
							height={398}
						/>
					</div>
					<div className="min-h-32 group relative flex justify-between overflow-hidden items-center rounded-xl">
						<p className="w-full flex items-center justify-start pl-4 z-10 h-full bg-gradient-to-r from-white from-40% to-transparent">
							<span className="w-2/3">
								Komunitas yang siap membantu
							</span>
						</p>
						<img
							src={communityIllustration}
							className="w-full h-full object-cover absolute right-0 group-hover:scale-105 transition-all"
							alt="Community"
							width={600}
							height={400}
						/>
					</div>
					<div className="min-h-32 group relative flex justify-between overflow-hidden items-center rounded-xl">
						<p className="w-full flex items-center justify-start pl-4 z-10 h-full bg-gradient-to-r from-white from-40% to-transparent">
							<span className="w-2/3">
								Konten belajar yang berkualitas
							</span>
						</p>
						<img
							src={videoIllustration}
							className="w-full h-full object-cover absolute right-0 group-hover:scale-105 transition-all"
							alt="Quality content"
							width={600}
							height={400}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhyUs;
