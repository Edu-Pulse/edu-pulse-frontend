import uiux from "../assets/UIUX_Categories.png";
import pm from "../assets/PM_Categories.png";
import web from "../assets/WebDev_Categories.png";
import android from "../assets/Android_Categories.png";
import ios from "../assets/IOS_Categories.png";
import dataScience from "../assets/DataScience_Categories.png";

const StudyCategories = () => {
	return (
		<section className="container my-4">
			<div className="flex justify-between items-center py-5">
				<h2 className="text-xl font-bold">Kategori Belajar</h2>
				<span className="font-bold text-darkblue-05 py-2 px-4 rounded-full hover:bg-blue-200 hover:cursor-pointer transition-all duration-200">
					Lihat Semua
				</span>
			</div>
			<div className="grid md:grid-cols-6 grid-cols-2 gap-4">
				<div className="font-semibold text-sm hover:cursor-pointer">
					<div className="rounded-[25px] overflow-hidden">
						<img
							src={uiux}
							className="w-full object-cover hover:scale-105 transition-all duration-300"
						/>
					</div>
					<p className="text-center hover:text-darkblue-05 transition-all">
						UI/UX Design
					</p>
				</div>
				<div className="font-semibold text-sm hover:cursor-pointer">
					<div className="rounded-[25px] overflow-hidden">
						<img
							src={pm}
							className="w-full object-cover hover:scale-105 transition-all duration-300"
						/>
					</div>
					<p className="text-center hover:text-darkblue-05 transition-all">
						Product Management
					</p>
				</div>
				<div className="font-semibold text-sm hover:cursor-pointer">
					<div className="rounded-[25px] overflow-hidden">
						<img
							src={web}
							className="w-full object-cover hover:scale-105 transition-all duration-300"
						/>
					</div>
					<p className="text-center hover:text-darkblue-05 transition-all">
						Web Development
					</p>
				</div>
				<div className="font-semibold text-sm ">
					<div className="rounded-[25px] overflow-hidden">
						<img
							src={android}
							className="w-full object-cover hover:scale-105 transition-all duration-300"
						/>
					</div>
					<p className="text-center hover:text-darkblue-05 transition-all">
						Android Development
					</p>
				</div>
				<div className="font-semibold text-sm hover:cursor-pointer">
					<div className="rounded-[25px] overflow-hidden">
						<img
							src={ios}
							className="w-full object-cover hover:scale-105 transition-all duration-300"
						/>
					</div>
					<p className="text-center hover:text-darkblue-05 transition-all">
						IOS Development
					</p>
				</div>
				<div className="font-semibold text-sm hover:cursor-pointer">
					<div className="rounded-[25px] overflow-hidden">
						<img
							src={dataScience}
							className="w-full object-cover hover:scale-105 transition-all duration-300"
						/>
					</div>
					<p className="text-center hover:text-darkblue-05 transition-all">
						Data Science
					</p>
				</div>
			</div>
		</section>
	);
};
export default StudyCategories;
