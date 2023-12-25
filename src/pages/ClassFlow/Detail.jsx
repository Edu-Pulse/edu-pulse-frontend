/* eslint-disable no-mixed-spaces-and-tabs */
// Internal Libraries
import { useCallback, useEffect, useState } from "react";
// External Libraries
import { StarIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";
import {
	RectangleStackIcon,
	ShieldCheckIcon,
	ClockIcon,
	ArrowLeftIcon,
	QueueListIcon,
} from "@heroicons/react/24/outline";
import { Link, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

// Utilities
import { BASE_URL } from "@/lib/baseUrl";

// Core components
import ContentClass from "@/components/ClassPage/ContentClass";
import Drawer from "@/components/CoursePage/Drawer";
import ChapterLists from "@/components/ClassPage/ChapterLists";
import Button from "@/components/UI/Button";
import ChapterDetails from "@/components/ClassPage/ChapterDetails";
import Modals from "@/components/CoursePage/Modals";
import Input from "@/components/UI/Input";

const ClassDetails = () => {
	const [currentTopic, setCurrentTopic] = useState(null);
	const [isChapterDrawerOpen, setIsChapterDrawerOpen] = useState(false);
	const [selectedChapterContent, setSelectedChapterContent] = useState(null);
	const [openRate, setOpenRate] = useState(false);
	const [details, setDetails] = useState();
	const [isRefetch, setIsReFetch] = useState(true);
	const [rateCourse, setRateCourse] = useState(0);
	const { code } = useParams();

	const handleCloseRateModal = () => {
		setOpenRate(false);
	};
	const getDetailClass = useCallback(async () => {
		try {
			const response = await axios.get(`${BASE_URL}/course/` + code);

			const data = response.data.data;
			if (response.status == 200 && response.data.error === false) {
				setDetails(data);
			} else {
				toast.error(response.data.message);
			}
		} catch (error) {
			toast.error("Something went wrong!");
		} finally {
			console.log(details);
			setIsReFetch(false);
		}
	}, [code, details]);

	useEffect(() => {
		if (isRefetch) {
			getDetailClass();
		} else {
			return;
		}
	}, [code, isRefetch, getDetailClass]);

	const handleDone = async (topic) => {
		try {
			const response = await axios.post(
				`${BASE_URL}user/detailchapter/setdone/${details.code}/${topic}`
			);
			if (response.status === 200) {
				toast.success(response.data);
				await getDetailClass();
			}
			return;
		} catch (error) {
			toast.error(error.response.data.message);
			return;
		}
	};

	const handleTopicClick = (topic) => {
		setCurrentTopic(topic);

		const clickedChapter = details.chapters.find((chapter) =>
			chapter.detailChapters.some(
				(detailChapter) => detailChapter.id === topic
			)
		);
		console.log(topic);

		if (clickedChapter) {
			const selectedDetail = clickedChapter.detailChapters.find(
				(detailChapter) => detailChapter.id === topic
			);
			setSelectedChapterContent([selectedDetail]);
		}
		handleDone(topic);
	};

	const handleRate = async (e) => {
		e.preventDefault();
		try {
			console.log(details.code);
			const response = await axios.post(
				`${BASE_URL}/course/rating/${details.code}?rating=${rateCourse}`
			);
			console.warn(rateCourse);
			console.log(response);
			if (response.status === 200 && response.data.error === false) {
				toast.success(response.data);
			} else {
				toast.error(response.data.message);
			}
		} catch (error) {
			toast.error("Something went wrong!");
		} finally {
			handleCloseRateModal();
		}
	};

	return (
		<>
			<section className="sm:mt-16 container">
				<div className="w-full mt-1">
					<div>
						<div className="font-semibold text-xl flex items-center py-10">
							<Link
								to="/"
								className="px-4 py-2 flex gap-4 items-center hover:bg-blue-100 w-fit rounded-full hover:cursor-pointer transition-all duration-300"
							>
								<ArrowLeftIcon className="w-5 h-5" />
								<p>Kelas Lainnya</p>
							</Link>
						</div>
					</div>
					<div className="gap-12 grid md:grid-cols-5 grid-cols-1">
						<div className="md:col-span-3">
							<div className="w-full">
								<div>
									<div className="h-full flex flex-col">
										<div className="flex justify-between">
											<h5 className="text-darkblue-05 font-bold pb-1 text-xl">
												{details?.category}
											</h5>
											<span className="flex">
												<button
													onClick={() =>
														setOpenRate(!openRate)
													}
												>
													<StarIcon className="h-5 w-5 text-yellow-500"></StarIcon>
													<p>
														{details?.rating
															? details?.rating?.toFixed(
																	1
															  )
															: 0}
													</p>
												</button>
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
													{details?.totalMaterial}{" "}
													Modul
												</p>
											</span>
											<span className="flex my-2 gap-1">
												<ClockIcon className="h-5 w-5 text-green-500"></ClockIcon>
												<p>120 Menit</p>
											</span>
										</div>
										<div className="flex gap-2">
											<Button
												icon={
													<ChatBubbleLeftRightIcon className="h-6 w-6" />
												}
												iconPosition="right"
												size="md"
												className="text-white my-5 w-full !bg-alert-success hover:!bg-darkblue-05 text-xs font-normal sm:text-lg sm:text-semibold sm:w-fit"
											>
												Join Grup Telegram
											</Button>
											<Button
												icon={
													<QueueListIcon className="h-6 w-6" />
												}
												iconPosition="right"
												size="md"
												onClick={() =>
													setIsChapterDrawerOpen(
														!isChapterDrawerOpen
													)
												}
												className="text-white my-5 w-full text-xs font-normal sm:text-lg sm:text-semibold sm:hidden"
											>
												Chapter
											</Button>
										</div>
									</div>
								</div>
							</div>
							{!currentTopic ? (
								<ContentClass details={details} />
							) : (
								<ChapterDetails
									selectedChapterContent={
										selectedChapterContent
									}
								/>
							)}
						</div>
						<div className="md:col-span-2 mb-8 w-full">
							<div className="hidden sm:block bg-white py-4 px-2 rounded-2xl shadow-2xl h-fit">
								<ChapterLists
									details={details}
									handleTopicClick={handleTopicClick}
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Drawer
				isOpen={isChapterDrawerOpen}
				onClose={() => setIsChapterDrawerOpen(!isChapterDrawerOpen)}
			>
				<ChapterLists
					details={details}
					handleTopicClick={handleTopicClick}
				/>
			</Drawer>

			{/* Rating modal */}
			<Modals isOpen={openRate} onClose={handleCloseRateModal}>
				<Input
					placeholder="Berikan rating..."
					type="number"
					label="Masukkan rating kelas"
					value={rateCourse}
					onChange={(e) => setRateCourse(e.target.value)}
				/>
				<button
					onClick={handleRate}
					className="text-white bg-darkblue-05 px-16 py-2 flex gap-4 items-center hover:bg-purple-900 rounded-full hover:cursor-pointer transition-all duration-300"
				>
					Simpan Rating
				</button>
			</Modals>
		</>
	);
};

export default ClassDetails;
