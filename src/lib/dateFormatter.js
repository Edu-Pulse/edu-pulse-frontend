export const formatDateTime = (dt) => {
	const dateObject = new Date(dt);
	const timeString = dateObject.toLocaleTimeString("id-ID", {
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
	});

	const dateString = dateObject.toLocaleDateString("id-ID", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});

	return `${timeString.replace(/\./g, ":")} - ${dateString}`;
};
