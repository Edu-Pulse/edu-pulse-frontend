import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";
import { FunnelIcon as FunnelIconSolid } from "@heroicons/react/24/solid";
import { FunnelIcon } from "@heroicons/react/24/outline";
import CourseCard from "@/components/UI/CourseCard";
import { twMerge } from "tailwind-merge";
import { useState, useEffect } from "react";

import noData from "@/assets/svg/nodata.svg";
import "react-loading-skeleton/dist/skeleton.css";
import toast from "react-hot-toast";
import CourseCardSkeleton from "@/components/UI/CourseCardSkeleton";
import Filters from "@/components/CoursePage/Filters";
import Drawer from "@/components/CoursePage/Drawer";
import app from "@/lib/axiosConfig";

const ClassTopic = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [classes, setClasses] = useState([]);
	const [filterByType, setFilterByType] = useState("all");
	const [filteredClass, setFilteredClass] = useState([]);
	const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");
	const [searchResult, setSearchResult] = useState(filteredClass);

	const [filterByCategory, setFilterByCategory] = useState({
		uiux_design: false,
		web_development: false,
		android_development: false,
		data_science: false,
		business_intelligence: false,
	});
	const [filterByLevel, setFilterByLevel] = useState({
		all_level: false,
		beginner_level: false,
		intermediate_level: false,
		advanced_level: false,
	});
	const [filterByDateAndPromo, setFilterByDateAndPromo] = useState({
		newest: false,
		most_popular: false,
		promo: false,
	});

	useEffect(() => {
		const filteredByDateAndPromo = classes.filter((classItem) => {
			if (filterByDateAndPromo.most_popular) {
				return classItem.rating > 4;
			} else if (filterByDateAndPromo.newest) {
				return classItem;
			} else if (filterByDateAndPromo.promo) {
				return classItem.discount > 0;
			} else {
				return classItem;
			}
		});
		const filteredByCategory = filteredByDateAndPromo.filter(
			(classItem) => {
				if (filterByCategory.uiux_design) {
					return classItem.category === "UI/UX Design";
				} else if (filterByCategory.android_development) {
					return classItem.category === "Android Development";
				} else if (filterByCategory.business_intelligence) {
					return classItem.category === "Business Intelligence";
				} else if (filterByCategory.data_science) {
					return classItem.category === "Data Science";
				} else if (filterByCategory.web_development) {
					return classItem.category === "Web Development";
				} else {
					return classItem;
				}
			}
		);

		const filteredByLevel = filteredByCategory.filter((classItem) => {
			if (filterByLevel.all_level) {
				return classItem;
			} else if (filterByLevel.beginner_level) {
				return classItem.level === "BEGINNER";
			} else if (filterByLevel.intermediate_level) {
				return classItem.level === "INTERMEDIATE";
			} else if (filterByLevel.advanced_level) {
				return classItem.level === "ADVANCED";
			} else {
				return classItem;
			}
		});

		// Set the filtered classes to the state
		setFilteredClass(filteredByLevel);
	}, [filterByCategory, filterByDateAndPromo, filterByLevel, classes]);

	useEffect(() => {
		if (searchQuery) {
			const filteredBySearchQuery = filteredClass.filter((classItem) => {
				return classItem.name
					.toLowerCase()
					.includes(searchQuery.toLowerCase());
			});
			setSearchResult(filteredBySearchQuery);
		} else {
			setSearchResult(filteredClass);
		}
	}, [searchQuery, filteredClass]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(true);
				let apiUrl = "course";
				if (filterByType === "all") {
					apiUrl = "course/all";
				} else {
					apiUrl = `course/type?type=${filterByType}`;
				}
				const response = await app.get(apiUrl);

				if (response.status === 200 && response.data.error !== true) {
					setClasses(response.data.data.content);
				} else {
					toast.error(
						`Something went wrong! Status: ${response.status}`
					);
				}
				setIsLoading(false);
				return;
			} catch {
				toast.error("Something went wrong");
				setIsLoading(false);
			}
		};

		return () => fetchData();
	}, [filterByType]);

	return (
		<>
			<main className="container">
				<section className="md:my-20">
					<div className="flex flex-col md:flex-row justify-between md:items-center gap-3 md:gap-0 py-5">
						<h2 className="text-xl font-bold">Topik Kelas</h2>
						<Input
							placeholder="Cari kelas..."
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
						/>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-12 gap-8 w-full">
						<div className="md:bg-white rounded-2xl md:px-4 md:col-span-3 h-fit hidden sm:block">
							<Filters
								filterByCategory={filterByCategory}
								setFilterByCategory={setFilterByCategory}
								filterByLevel={filterByLevel}
								setFilterByLevel={setFilterByLevel}
								filterByDateAndPromo={filterByDateAndPromo}
								setFilterByDateAndPromo={
									setFilterByDateAndPromo
								}
							/>
						</div>
						<div className="flex flex-col md:col-span-9">
							<div className="flex justify-around gap-2">
								<Button
									className={twMerge(
										"w-fit sm:hidden",
										isFilterDrawerOpen
											? "!bg-darkblue-05"
											: "!bg-darkblue-01 !text-darkblue-05"
									)}
									onClick={() =>
										setIsFilterDrawerOpen(
											!isFilterDrawerOpen
										)
									}
									size={
										window.innerWidth <= 768 ? "sm" : "lg"
									}
								>
									{isFilterDrawerOpen ? (
										<FunnelIconSolid className="h-5 w-5" />
									) : (
										<FunnelIcon className="h-5 w-5" />
									)}
								</Button>
								<Button
									className={twMerge(
										"w-full",
										filterByType === "all"
											? "!bg-darkblue-05"
											: "!bg-darkblue-01 !text-darkblue-05"
									)}
									onClick={() => setFilterByType("all")}
									size={
										window.innerWidth <= 768 ? "sm" : "lg"
									}
								>
									Semua
								</Button>
								<Button
									className={twMerge(
										"w-full",
										filterByType === "gratis"
											? "!bg-darkblue-05"
											: "!bg-darkblue-01 !text-darkblue-05"
									)}
									onClick={() => setFilterByType("gratis")}
									size={
										window.innerWidth <= 768 ? "sm" : "lg"
									}
								>
									Gratis
								</Button>
								<Button
									className={twMerge(
										"w-full",
										filterByType === "premium"
											? "!bg-darkblue-05"
											: "!bg-darkblue-01 !text-darkblue-05"
									)}
									onClick={() => setFilterByType("premium")}
									size={
										window.innerWidth <= 768 ? "sm" : "lg"
									}
								>
									Premium
								</Button>
							</div>
							{isLoading ? (
								<div className="grid sm:grid-cols-2 gap-6 my-10">
									{Array.from({ length: 2 }).map(
										(_, index) => {
											return (
												<CourseCardSkeleton
													key={index}
												/>
											);
										}
									)}
								</div>
							) : searchResult.length === 0 ? (
								<div className="w-full h-full grid place-content-center">
									<img
										src={noData}
										alt="No Data"
										className="w-full"
									/>
									<p className="text-gray-700">
										Yang kamu cari belum ditemukan, yuk cari
										yang lain
									</p>
								</div>
							) : (
								<div className="grid sm:grid-cols-2 gap-6 my-10">
									{searchResult.map((classItem, index) => (
										<CourseCard
											key={index}
											category={classItem.category}
											name={classItem.name}
											lecturer={classItem.lecturer}
											level={classItem.level}
											rating={classItem.rating}
											code={classItem.code}
											image={classItem.image}
										/>
									))}
								</div>
							)}
						</div>
					</div>
				</section>
				{/* Drawer component */}
			</main>
			<Drawer
				isOpen={isFilterDrawerOpen}
				onClose={() => setIsFilterDrawerOpen(!isFilterDrawerOpen)}
			>
				<Filters
					filterByCategory={filterByCategory}
					setFilterByCategory={setFilterByCategory}
					filterByLevel={filterByLevel}
					setFilterByLevel={setFilterByLevel}
					filterByDateAndPromo={filterByDateAndPromo}
					setFilterByDateAndPromo={setFilterByDateAndPromo}
					onCloseDrawer={() =>
						setIsFilterDrawerOpen(!isFilterDrawerOpen)
					}
				/>
			</Drawer>
		</>
	);
};

export default ClassTopic;
