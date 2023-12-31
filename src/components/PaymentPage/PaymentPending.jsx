import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import { Link, useNavigate, useParams } from "react-router-dom";
import CourseCard from "@/components/UI/CourseCard";
import Button from "@/components/UI/Button";
import axios from "axios";
import { BASE_URL } from "@/lib/baseUrl";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import PaymentCard from "../UI/PaymentCard";

const PaymentPending = () => {
	const [classDetail, setClassDetail] = useState([]);
	const [cardNumber, setCardNumber] = useState();
	const [cardHolderName, setCardHolderName] = useState();
	const [cvv, setCvv] = useState();
	const [expiryDate, setExpiryDate] = useState();
	const { code } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		const getDetailCode = async () => {
			try {
				const response = await axios.get(`${BASE_URL}/course/` + code);

				const data = response.data.data;
				if (response.status == 200) {
					setClassDetail(data);
				}
			} catch (error) {
				toast.error("Something went wrong!");
			}
		};

		getDetailCode();
	}, [code]);

	const paidEnroll = async () => {
		try {
			let data = {
				cardNumber,
				cardHolderName,
				cvv,
				expiryDate,
			};

			const response = await axios.post(
				`${BASE_URL}/course/enroll-paid/${code}`,
				data,
				{
					headers: {
						"Content-Type": "application/json",
						Accept: "*/*",
					},
				}
			);
			if (response.status === 200) {
				toast.success(response.data.message);
				setTimeout(() => {
					navigate("/payment-success?code=" + code);
				}, 1500);
			}
			return;
		} catch (error) {
			toast.error(error.response.data.error);
			return;
		}
	};

	return (
		<section className="mt-16 w-full h-full">
			<div className="w-full mt-1">
				<div className="my-10">
					<div className="font-semibold text-xl flex md:items-center md:px-[20vh] py-10">
						<Link
							to="/my-class"
							className="px-4 py-2 flex gap-4 justify-items-start hover:bg-blue-100 w-fit rounded-full hover:cursor-pointer transition-all duration-300"
						>
							<ArrowLeftIcon className="w-5 h-5" />
							<p>Kembali</p>
						</Link>
					</div>
					<div className="flex justify-center container">
						<div className="flex justify-center self-center bg-red-500 h-12 md:w-3/5 w-full rounded-2xl">
							<p className="grid text-white content-center p-6 whitespace-nowrap md:text-base text-xs">
								Selesaikan Pembayaran sampai 10 Maret 2023 12:00
							</p>
						</div>
					</div>
				</div>
				<div className="container flex md:flex-row flex-col gap-4 my-10">
					<div className="w-full">
						<PaymentCard
							setCardNumber={setCardNumber}
							setCardHolderName={setCardHolderName}
							setCvv={setCvv}
							setExpiryDate={setExpiryDate}
							bgColor={`bg-slate-800`}
						>
							Bank Transfer
						</PaymentCard>
						<PaymentCard
							setCardNumber={setCardNumber}
							setCardHolderName={setCardHolderName}
							setCvv={setCvv}
							setExpiryDate={setExpiryDate}
							bgColor={`bg-blue-600`}
						>
							Credit Card
						</PaymentCard>
					</div>
					<div className="outline outline-offset-2 outline-darkblue-05 rounded-2xl p-4">
						<p className="font-bold text-lg my-4">
							Pembayaran Kelas
						</p>
						<CourseCard
							category={classDetail.category}
							name={classDetail.courseName}
							lecturer={classDetail.lecturer}
							level={classDetail.level}
							rating={classDetail.rating}
							image={classDetail.image}
							amount={classDetail.price}
						/>
						<Button
							className="my-4 w-full bg-red-500"
							icon={<ArrowRightCircleIcon className="w-6 h-6" />}
							onClick={paidEnroll}
						>
							Bayar dan Ikuti Kelas Selamanya
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PaymentPending;
