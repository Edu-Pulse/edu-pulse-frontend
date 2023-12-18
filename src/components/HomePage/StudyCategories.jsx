import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "@/lib/baseUrl";

const StudyCategories = () => {
	const [category, setCategory] = useState([]);

	useEffect(() => {
		const getClassCategories = async () => {
			try {
				const response = await axios.get(`${BASE_URL}/category/all`);

				const data = response.data.data;

				setCategory(data);
			} catch (error) {
				console.error("Error:", error);
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
				{category.map((kelas, index) => {
					return (
						// eslint-disable-next-line react/jsx-key
						<div
							className="font-semibold text-sm hover:cursor-pointer"
							key={index}
						>
							<div key={kelas.id}>
								<div className="rounded-3xl overflow-hidden">
									<img
										className="w-full h-[120px] object-cover hover:scale-105 transition-all duration-300"
										src={`${kelas.image}`}
									/>
								</div>
								<div className="text-center mt-3 hover:text-darkblue-05 transition-all">
									{kelas.name}
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};
export default StudyCategories;
