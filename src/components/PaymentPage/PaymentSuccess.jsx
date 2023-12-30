import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Link, useSearchParams } from "react-router-dom";
import Button from "@/components/UI/Button";
import illustration from "@/assets/illustration _Cart shopping list_.png";

const PaymentSuccess = () => {
	const [searchParams] = useSearchParams();
	const code = searchParams.get("code");
	console.log(code);

	return (
		<section className="mt-16 w-full h-full">
			<div className="w-full mt-1">
				<div className="my-10">
					<div className="font-semibold text-xl flex md:items-center md:px-[20vh] py-10">
						<Link
							to="/my-class"
							className="px-4 py-2 flex gap-4 items-center hover:bg-blue-100 w-fit rounded-full hover:cursor-pointer transition-all duration-300"
						>
							<ArrowLeftIcon className="w-5 h-5" />
							<p>Kembali</p>
						</Link>
					</div>
					<div className="flex justify-center container">
						<div className="flex justify-center self-center bg-green-500 h-12 w-3/5 rounded-2xl">
							<p className="grid text-white content-center md:font-semibold md:text-base text-xs">
								Terimakasih atas pembayaran transaksi
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="container flex flex-col justify-items-center">
				<div className="m-auto flex flex-col justify-items-center my-6">
					<p className="place-self-center text-3xl font-bold text-darkblue-05 my-4">
						Selamat!
					</p>
					<img src={illustration} alt="" className="my-4" />
					<div className="flex flex-col my-4">
						<p className="place-self-center font-semibold">
							Transaksi pembayaran kelas premium berhasil!
						</p>
						<p className="place-self-center">
							E-receipt telah dikirimkan ke email.
						</p>
					</div>
				</div>
				<div className="flex flex-col justify-items-center place-self-center my-6">
					<Link to={`/detail/${code}?onBoarding=true`}>
						<Button className="px-28 rounded-xl mb-4">
							Mulai Belajar
						</Button>
					</Link>
					<Link to={"/"}>
						<p className="place-self-center text-darkblue-03 font-semibold">
							Kembali ke Beranda
						</p>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default PaymentSuccess;
