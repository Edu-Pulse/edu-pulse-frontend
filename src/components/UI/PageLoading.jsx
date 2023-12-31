import Spinner from "./Spinner";

const PageLoading = () => {
	return (
		<main className="min-h-screen grid place-content-center">
			<Spinner size="w-32 h-32" />
		</main>
	);
};

export default PageLoading;
