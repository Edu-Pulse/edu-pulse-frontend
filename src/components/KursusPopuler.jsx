import Button from "./UI/Button";
import CourseCard from "./UI/CourseCard";

const KursusPopuler = () => {
	return (
		<section className="container my-4">
			<div className="flex justify-between items-center py-5">
				<h2 className="text-xl font-bold">Kursus Popular</h2>
				<span className="font-bold text-darkblue-05 py-2 px-4 rounded-full hover:bg-blue-200 hover:cursor-pointer transition-all duration-200">
					Lihat Semua
				</span>
			</div>
			<div className="flex justify-around w-full my-8 overflow-x-auto">
				<Button
					className="text-sm !bg-darkblue-01 !text-black hover:bg-darkblue-05"
					size="xs"
				>
					All
				</Button>
				<Button
					className="text-sm !bg-darkblue-01 !text-black hover:bg-darkblue-05 whitespace-nowrap"
					size="xs"
				>
					Data Science
				</Button>
				<Button className="whitespace-nowrap" size="xs">
					UI/UX Design
				</Button>
				<Button
					className="text-sm !bg-darkblue-01 !text-black hover:bg-darkblue-05 whitespace-nowrap"
					size="xs"
				>
					Android Development
				</Button>
				<Button
					className="text-sm !bg-darkblue-01 !text-black hover:bg-darkblue-05 whitespace-nowrap"
					size="xs"
				>
					Web Development
				</Button>
				<Button
					className="text-sm !bg-darkblue-01 !text-black hover:bg-darkblue-05 whitespace-nowrap"
					size="xs"
				>
					IOS Development
				</Button>
				<Button
					className="text-sm !bg-darkblue-01 !text-black hover:bg-darkblue-05 whitespace-nowrap"
					size="xs"
				>
					Business Intelligence
				</Button>
			</div>
			<div className="grid md:grid-cols-3 grid-cols-1 gap-6 w-full my-8">
				<CourseCard />
				<CourseCard />
				<CourseCard />
			</div>
		</section>
	);
};

export default KursusPopuler;
