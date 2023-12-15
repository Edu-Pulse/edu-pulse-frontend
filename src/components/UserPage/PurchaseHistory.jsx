import { useEffect, useState } from "react";
import CourseCard from "../UI/CourseCard";
import app from "../../pages/AuthFlow/axiosConfig";
import { Link } from "react-router-dom";

import noData from "@/assets/svg/nodata.svg";

const PurchaseHistory = () => {
	const [history, setHistory] = useState();

	useEffect(() => {
		const getPaymentHistory = async () => {
			try {
				const response = await app.get(`payment/user?page=0`);

				const data = response.data.data.content;

				setHistory(data);
				console.log(data);
			} catch (error) {
				console.error("Error", error);
			}
		};

		return () => getPaymentHistory();
	}, []);

	console.log(history);

	return (
		<div className="flex flex-col items-center my-7 w-full space-y-4 px-4 md:px-12">
			{history && history.length !== 0 ? (
				history.map((bebas, index) => (
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
			{/* <CourseCard /> */}
		</div>
	);
};

export default PurchaseHistory;
