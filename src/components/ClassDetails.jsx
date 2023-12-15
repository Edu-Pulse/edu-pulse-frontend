/* eslint-disable react/no-unknown-property */
import "../Progress.css";
import {
	PlayCircleIcon,
	StarIcon,
	ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/solid";
import {
	RectangleStackIcon,
	ShieldCheckIcon,
	ClockIcon,
	ArrowLeftIcon,
	CheckBadgeIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import ContentClass from "./ContentClass";
import { useState } from "react";

const ClassDetails = ({ details }) => {
	const [currentTopic, setCurrentTopic] = useState(null);
	console.log(currentTopic);

	const handleTopicClick = (topic) => {
		setCurrentTopic(topic);
	};
	return (
		<section className="mt-16 w-full h-full">
			<div className="w-full mt-1">
				<div>
					<div className="font-semibold text-xl flex items-center px-[20vh] py-10">
						<Link
							to="/"
							className="px-4 py-2 flex gap-4 items-center hover:bg-blue-100 w-fit rounded-full hover:cursor-pointer transition-all duration-300"
						>
							<ArrowLeftIcon className="w-5 h-5" />
							<p>Kelas Lainnya</p>
						</Link>
					</div>
				</div>
				<div className="container gap-20 grid md:grid-cols-5 grid-cols-1">
					<div className="col-span-3">
						<div className="w-full">
							<div className="container">
								<div className="h-full flex flex-col">
									<div className="flex justify-between">
										<h5 className="text-darkblue-05 font-bold pb-1 text-xl">
											{details?.category}
										</h5>
										<span className="flex">
											<StarIcon className="h-5 w-5 text-yellow-500"></StarIcon>
											<p>{details?.rating}</p>
										</span>
									</div>
									<h5 className="font-bold pb-1 text-xl">
										{details?.name}
									</h5>
									<p>by {details?.lecturer}</p>
									<div className="flex gap-6">
										<span className="flex my-2 gap-1">
											<ShieldCheckIcon className="h-5 w-5 text-green-500"></ShieldCheckIcon>
											<p className="text-darkblue-05">
												{details?.level} Level
											</p>
										</span>
										<span className="flex my-2 gap-1">
											<RectangleStackIcon className="h-5 w-5 text-green-500"></RectangleStackIcon>
											<p>
												{details?.totalMaterial} Modul
											</p>
										</span>
										<span className="flex my-2 gap-1">
											<ClockIcon className="h-5 w-5 text-green-500"></ClockIcon>
											<p>120 Menit</p>
										</span>
									</div>
									<div className="flex justify-between">
										<button className="text-white my-5 bg-alert-success h-10 px-7 py-2 flex gap-2 items-center hover:bg-green-700 w-fit rounded-full hover:cursor-pointer transition-all duration-300">
											Join Grup Telegram
											<ChatBubbleLeftRightIcon className="h-5 w-5" />
										</button>
									</div>
								</div>
							</div>
						</div>
						<ContentClass details={details} />
					</div>
					<div className="col-span-2 ml-12 mb-8">
						<div className="bg-white p-4 rounded-2xl shadow-2xl h-fit">
							<div className="flex items-center gap-2">
								<div className="flex justify-between w-1/2 items-center">
									<h1 className="font-bold text-lg">
										Materi Belajar
									</h1>
									<CheckBadgeIcon className="w-4 h-4 text-alert-success" />
								</div>
								<div className="relative">
									<label
										className="z-10 left-2 top-[2px] absolute text-white text-xs"
										htmlFor="progress"
									>
										20% Progress
									</label>
									<progress
										className="rounded-full"
										id="progress"
										value="20"
										max="100"
									></progress>
								</div>
							</div>
							{details?.chapters.map(
								({ chapter, detailChapters }) => (
									<div key={chapter}>
										<div>
											<div className="flex justify-between w-full mt-5 mb-3">
												<p className="text-darkblue-05 font-bold ">
													{chapter}
												</p>
											</div>
											<ol>
												{detailChapters.map(
													(
														{ id, name, isDone },
														index
													) => (
														<li
															key={id}
															className="my-2 flex justify-between items-center hover:bg-gray-200 hover:cursor-pointer rounded-full"
															onClick={() =>
																handleTopicClick(
																	name
																)
															}
														>
															<div className="flex gap-3 items-center">
																<span className="p-4 leading-none rounded-full bg-darkblue-06 w-6 h-6 grid place-content-center">
																	{index + 1}
																</span>
																<div>
																	<p>
																		{name}
																	</p>
																</div>
															</div>
															<div>
																<PlayCircleIcon
																	className={`text-${
																		isDone
																			? "alert-success"
																			: "darkblue-05"
																	} w-10 h-full`}
																/>
															</div>
														</li>
													)
												)}
											</ol>
										</div>
									</div>
								)
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ClassDetails;
