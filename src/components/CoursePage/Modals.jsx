// import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState, useEffect, useRef } from "react";

const Modals = ({ isOpen, onClose, children }) => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(isOpen);
	const modalRef = useRef();

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
		const rect = modalRef.current.getBoundingClientRect();
		const isInDialog =
			rect.top <= event.clientY &&
			event.clientY <= rect.top + rect.height &&
			rect.left <= event.clientX &&
			event.clientX <= rect.left + rect.width;
		if (!isInDialog) {
			setIsDrawerOpen(false);
			onClose();
			modalRef.current.close();
		}
	};

	useEffect(() => {
		setIsDrawerOpen(isOpen);
	}, [isOpen]);

	useEffect(() => {
		if (modalRef.current) {
			if (isDrawerOpen) {
				modalRef.current.showModal();
				console.log("Terbuka");
			} else {
				modalRef.current.close();
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
			ref={modalRef}
			onKeyDown={handleKeyDown}
			onClick={handleCloseDrawerOnBackdropClick}
			className="modal z-40 px-4 pb-8 rounded-3xl overflow-y-auto bg-white max-w-[500px]"
		>
			{children}
		</dialog>
	);
};

export default Modals;
