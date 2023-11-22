import Button from "../components/UI/Button";
import { HeartIcon } from "@heroicons/react/24/outline";
import Input from "../components/UI/Input";

const UIElements = () => {
	return (
		<div>
			<Button outline={true} icon={<HeartIcon className="h-4 w-4" />}>
				Terbitkan
			</Button>
			<Input
				type="password"
				label="Password"
				name="password"
				className="w-1/3"
				placeholder="Password"
			/>
			<Input
				type="email"
				label="Email"
				name="email"
				placeholder="Contoh: johndoe@user.com"
				className="w-1/3"
			/>
		</div>
	);
};

export default UIElements;
