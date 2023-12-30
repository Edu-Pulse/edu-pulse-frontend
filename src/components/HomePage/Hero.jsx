import illustration from "@/assets/heroimage.webp";
import Button from "@/components/UI/Button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
	const navigate = useNavigate();
	return (
		<section className="md:mt-16 w-full h-[50vh] relative">
			<div className="bg-gradient-to-l from-darkblue-05 from-30% to-transparent w-full h-full absolute top-0">
				<div className="container flex items-center justify-end h-full">
					<div className="space-y-4">
						<h1 className="text-2xl font-bold text-white">
							Belajar
							<br />
							dari Praktisi Terbaik
						</h1>
						<Button
							className="w-full text-darkblue-05 font-semibold"
							size="md"
							color="white"
							onClick={() => navigate("/auth/login")}
						>
							IKUT KELAS
						</Button>
					</div>
				</div>
			</div>
			<div className="w-full h-full overflow-hidden">
				<img
					src={illustration}
					alt="Hero Image"
					className="h-full object-cover"
					height={300}
				/>
			</div>
		</section>
	);
};

export default Hero;
