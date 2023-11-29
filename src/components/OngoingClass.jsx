import Button from "./UI/Button";
import Input from "./UI/Input";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/solid";
import CourseCard from "./UI/CourseCard";
import { twMerge } from "tailwind-merge";
import { useState } from "react";

const OngoingClass = () => {
	const [isCollapsed, setIsCollapsed] = useState(false);
	return (
		<section className="md:my-20">
			<div className="flex flex-col md:flex-row justify-between md:items-center gap-3 md:gap-0 py-5">
				<h2 className="text-xl font-bold">Kelas Berjalan</h2>
				<Input
					placeholder="Cari kelas..."
					icon={<MagnifyingGlassCircleIcon className="h-4 w-4" />}
				>
					<MagnifyingGlassCircleIcon className="h-4 w-4" />
				</Input>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-12 gap-8 w-full">
				<div className="md:bg-white rounded-2xl md:px-4 md:col-span-3 h-fit">
					<button
						id="dropdownDefaultButton"
						onClick={() => setIsCollapsed(!isCollapsed)}
						className="text-white md:mt-4 justify-between md:hidden bg-darkblue-05 w-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
						type="button"
					>
						<span>Filter</span>
						<svg
							className="w-2.5 h-2.5 ms-3"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 10 6"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="m1 1 4 4 4-4"
							/>
						</svg>
					</button>
					<div
						id="dropdown"
						className={twMerge(
							isCollapsed ? "hidden" : "block",
							"z-10"
						)}
					>
						<ul
							className="px-4 md:p-0 bg-white mt-4 md:m-0 md:rounded-none rounded-xl"
							aria-labelledby="dropdownDefaultButton"
						>
							<div className="py-4 space-y-2">
								<h2 className="font-bold">Filter</h2>
								<div className="flex gap-2">
									<div className="w-5 h-5 grid place-content-center rounded-md border-2 overflow-hidden">
										<input
											className="w-5 h-5 border-none outline-none"
											type="checkbox"
											value=""
											id="palingbaru"
										/>
									</div>
									<label
										className="inline-block hover:cursor-pointer"
										htmlFor="palingbaru"
									>
										Paling Baru
									</label>
								</div>
								<div className="flex gap-2">
									<div className="w-5 h-5 grid place-content-center rounded-md border-2 overflow-hidden">
										<input
											className="w-5 h-5 border-none outline-none"
											type="checkbox"
											value=""
											id="palingpopuler"
										/>
									</div>
									<label
										className="inline-block hover:cursor-pointer"
										htmlFor="palingpopuler"
									>
										Paling Populer
									</label>
								</div>
								<div className="flex gap-2">
									<div className="w-5 h-5 grid place-content-center rounded-md border-2 overflow-hidden">
										<input
											className="w-5 h-5 border-none outline-none"
											type="checkbox"
											value=""
											id="promo"
										/>
									</div>
									<label
										className="inline-block hover:cursor-pointer"
										htmlFor="promo"
									>
										Promo
									</label>
								</div>
							</div>

							<div className="py-4 space-y-2">
								<h2 className="font-bold">Kategori</h2>
								<div className="flex gap-2">
									<div className="w-5 h-5 grid place-content-center rounded-md border-2 overflow-hidden">
										<input
											className="w-5 h-5 border-none outline-none"
											type="checkbox"
											value=""
											id="uiuxdesgin"
										/>
									</div>
									<label
										className="inline-block hover:cursor-pointer"
										htmlFor="uiuxdesgin"
									>
										UI/UX Desgin
									</label>
								</div>
								<div className="flex gap-2">
									<div className="w-5 h-5 grid place-content-center rounded-md border-2 overflow-hidden">
										<input
											className="w-5 h-5 border-none outline-none"
											type="checkbox"
											value=""
											id="webdevelopment"
										/>
									</div>
									<label
										className="inline-block hover:cursor-pointer"
										htmlFor="webdevelopment"
									>
										Web Development
									</label>
								</div>
								<div className="flex gap-2">
									<div className="w-5 h-5 grid place-content-center rounded-md border-2 overflow-hidden">
										<input
											className="w-5 h-5 border-none outline-none"
											type="checkbox"
											value=""
											id="android"
										/>
									</div>
									<label
										className="inline-block hover:cursor-pointer"
										htmlFor="android"
									>
										Android Development
									</label>
								</div>
								<div className="flex gap-2">
									<div className="w-5 h-5 grid place-content-center rounded-md border-2 overflow-hidden">
										<input
											className="w-5 h-5 border-none outline-none"
											type="checkbox"
											value=""
											id="android"
										/>
									</div>
									<label
										className="inline-block hover:cursor-pointer"
										htmlFor="android"
									>
										Data Science
									</label>
								</div>
								<div className="flex gap-2">
									<div className="w-5 h-5 grid place-content-center rounded-md border-2 overflow-hidden">
										<input
											className="w-5 h-5 border-none outline-none"
											type="checkbox"
											value=""
											id="android"
										/>
									</div>
									<label
										className="inline-block hover:cursor-pointer"
										htmlFor="android"
									>
										Business Intelligence
									</label>
								</div>
							</div>

							<div className="py-4 space-y-2">
								<h2 className="font-bold">Level Kesulitan</h2>
								<div className="flex gap-2">
									<div className="w-5 h-5 grid place-content-center rounded-md border-2 overflow-hidden">
										<input
											className="w-5 h-5 border-none outline-none"
											type="checkbox"
											value=""
											id="semualevel"
										/>
									</div>
									<label
										className="inline-block hover:cursor-pointer"
										htmlFor="semualevel"
									>
										Semua Level
									</label>
								</div>
								<div className="flex gap-2">
									<div className="w-5 h-5 grid place-content-center rounded-md border-2 overflow-hidden">
										<input
											className="w-5 h-5 border-none outline-none"
											type="checkbox"
											value=""
											id="beginner"
										/>
									</div>
									<label
										className="inline-block hover:cursor-pointer"
										htmlFor="beginner"
									>
										Beginner Level
									</label>
								</div>
								<div className="flex gap-2">
									<div className="w-5 h-5 grid place-content-center rounded-md border-2 overflow-hidden">
										<input
											className="w-5 h-5 border-none outline-none"
											type="checkbox"
											value=""
											id="intermediate"
										/>
									</div>
									<label
										className="inline-block hover:cursor-pointer"
										htmlFor="intermediate"
									>
										Intermediate Level
									</label>
								</div>
								<div className="flex gap-2">
									<div className="w-5 h-5 grid place-content-center rounded-md border-2 overflow-hidden">
										<input
											className="w-5 h-5 border-none outline-none"
											type="checkbox"
											value=""
											id="advance"
										/>
									</div>
									<label
										className="inline-block hover:cursor-pointer"
										htmlFor="advance"
									>
										Advance Level
									</label>
								</div>
								<Button className="bg-white !text-red-500 hover:bg-gray-500 justify-self-center">
									Hapus Filter
								</Button>
							</div>
						</ul>
					</div>
				</div>
				<div className="flex flex-col md:col-span-9">
					<div className="flex justify-around md:gap-2">
						<Button className="bg-white !text-black hover:bg-darkblue-05 w-1/3">
							All
						</Button>
						<Button className="bg-darkblue-01 !text-white hover:bg-darkblue-05 !px-10 whitespace-nowrap w-1/3">
							In Progess
						</Button>
						<Button className="bg-white !text-black whitespace-nowrap w-1/3">
							Selesai
						</Button>
					</div>
					<div className="grid sm:grid-cols-2 gap-6 my-10">
						<CourseCard />
						<CourseCard />
						<CourseCard />
					</div>
				</div>
			</div>
		</section>
	);
};

export default OngoingClass;
