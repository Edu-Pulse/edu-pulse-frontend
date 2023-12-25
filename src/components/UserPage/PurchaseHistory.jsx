import { useEffect, useState } from "react";
import CourseCard from "../UI/CourseCard";
import app from "../../lib/axiosConfig";
import { Link } from "react-router-dom";

import noData from "@/assets/svg/nodata.svg";
import Button from "../UI/Button";
import {
	ChevronDoubleLeftIcon,
	ChevronDoubleRightIcon,
} from "@heroicons/react/24/solid";

const PurchaseHistory = () => {
	const [history, setHistory] = useState();
	const [currentPage, setCurrentPage] = useState(0);
	const [postPerPage, setPostPerPage] = useState(0);

	useEffect(() => {
		const getPaymentHistory = async () => {
			try {
				const response = await app.get(`payment/user?page=0`);

				const data = response.data.data.content;
				if (response.status === 200) {
					setHistory(data);
					setCurrentPage(1);
					setPostPerPage(2);
					console.log(data);
				}
			} catch (error) {
				console.error("Error", error);
			}
		};

		getPaymentHistory();
	}, []);

	const lastPostIndex = currentPage * postPerPage;
	const firstPostIndex = lastPostIndex - postPerPage;
	const currentPost = history && history.slice(firstPostIndex, lastPostIndex);

	return (
		<div className="flex flex-col items-center my-7 w-full space-y-4 px-4 md:px-12">
			{currentPost ? (
				currentPost.map((bebas, index) => (
					<CourseCard
						key={index}
						category={bebas.categoryName}
						name={bebas.courseName}
						lecturer={bebas.lecturer}
						level={bebas.level}
						rating={bebas.rating}
						image={bebas.image}
					/>
				))
			) : (
				<div className="w-full h-full grid place-content-center mb-12">
					<img src={noData} alt="No Data" className="w-full" />
					<p className="text-gray-700 text-center">
						Kamu belum membeli kelas,{" "}
						<Link
							to="/class-topic"
							className="text-blue-900 font-semibold hover:cursor-pointer hover:underline underline-offset-2"
						>
							yuk beli sekarang
						</Link>
					</p>
				</div>
			)}
			<div className="flex">
				<Button
					icon={<ChevronDoubleLeftIcon className="h-4 w-4" />}
					onClick={() => setCurrentPage(currentPage - 1)}
					disabled={currentPage == 1 ? true : false}
				/>
				<Button
					icon={<ChevronDoubleRightIcon className="h-4 w-4" />}
					onClick={() => setCurrentPage(currentPage + 1)}
					disabled={currentPage == 3 ? true : false}
				/>
			</div>
		</div>
	);
};

export default PurchaseHistory;
