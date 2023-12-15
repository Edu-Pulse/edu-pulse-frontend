import { useState, useEffect, useRef } from "react";

const Drawer = ({ isOpen, onClose, children }) => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(isOpen);
	const drawerRef = useRef();

	const handleCloseModal = () => {
		if (onClose) {
			onClose();
		}
		setIsDrawerOpen(false);
	};

	const handleKeyDown = (event) => {
		if (event.key === "Escape") {
			handleCloseModal();
			onClose();
		}
	};

	const handleCloseDrawerOnBackdropClick = (event) => {
		const rect = drawerRef.current.getBoundingClientRect();
		const isInDialog =
			rect.top <= event.clientY &&
			event.clientY <= rect.top + rect.height &&
			rect.left <= event.clientX &&
			event.clientX <= rect.left + rect.width;
		if (!isInDialog) {
			setIsDrawerOpen(false);
			onClose();
			drawerRef.current.close();
		}
	};

	useEffect(() => {
		setIsDrawerOpen(isOpen);
	}, [isOpen]);

	useEffect(() => {
		if (drawerRef.current) {
			if (isDrawerOpen) {
				drawerRef.current.showModal();
			} else {
				drawerRef.current.close();
			}
		}
	}, [isDrawerOpen]);

	return (
		<dialog
			style={{
				maxWidth: "100vw",
				position: "fixed",
				marginBottom: 0,
			}}
			ref={drawerRef}
			onKeyDown={handleKeyDown}
			onClick={handleCloseDrawerOnBackdropClick}
			className="fixed bottom-0 left-0 right-0 z-40 px-4 pb-8 rounded-t-3xl w-full overflow-y-auto bg-white"
		>
			{children}
		</dialog>
	);
};

export default Drawer;
