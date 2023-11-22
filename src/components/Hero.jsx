import illustration from "../assets/heroimage.png";
import Button from "./UI/Button";

const Hero = () => {
	return (
		<section className="mt-16 w-full h-[50vh] relative">
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
				/>
			</div>
		</section>
	);
};

export default Hero;
