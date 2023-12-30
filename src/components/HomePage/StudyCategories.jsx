/* eslint-disable no-mixed-spaces-and-tabs */
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "@/lib/baseUrl";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import Skeleton from "react-loading-skeleton";
const StudyCategories = () => {
	const [category, setCategory] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const getClassCategories = async () => {
			try {
				setIsLoading(true);
				const response = await axios.get(`${BASE_URL}/category/all`);

				const data = response.data.data;

				if (response.status === 200) {
					setCategory(data);
				} else {
					toast.error("Something went wrong!");
				}

				setIsLoading(false);
			} catch (error) {
				toast.error("Something went wrong!");
				setIsLoading(false);
			}
		};

		getClassCategories();
	}, []);

	return (
		<section className="container my-4">
			<div className="flex justify-between items-center py-5">
				<h2 className="text-xl font-bold">Kategori Belajar</h2>
				<span className="font-bold text-darkblue-05 py-2 px-4 rounded-full hover:bg-blue-200 hover:cursor-pointer transition-all duration-200">
					Lihat Semua
				</span>
			</div>

			<div className="grid md:grid-cols-6 grid-cols-2 gap-5">
				{isLoading
					? Array.from({ length: 6 }).map((_, index) => (
							<Skeleton
								key={index}
								className="rounded-3xl w-full h-[120px]"
							/>
					  ))
					: category.map((kelas, index) => {
							return (
								// eslint-disable-next-line react/jsx-key
								<Link to={`/search/${kelas.id}`} key={index}>
									<div
										className="font-semibold text-sm hover:cursor-pointer"
										key={index}
									>
										<div key={kelas.id}>
											<div className="rounded-3xl overflow-hidden">
												<img
													className="w-full h-[120px] object-cover hover:scale-105 transition-all duration-300"
													src={`${kelas.image}`}
													width={294}
													height={120}
													alt="Study category"
												/>
											</div>
											<div className="text-center mt-3 hover:text-darkblue-05 transition-all">
												{kelas.name}
											</div>
										</div>
									</div>
								</Link>
							);
					  })}
			</div>
		</section>
	);
};
export default StudyCategories;
