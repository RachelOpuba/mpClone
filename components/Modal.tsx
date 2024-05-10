import { useState, ReactNode } from "react";

type ModalProps = {
	isVisible: boolean;
	onClose: () => void;
	children: ReactNode;
};

const Modal = ({ isVisible, onClose, children }: ModalProps) => {

	if (!isVisible) return null;

	const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
		const target = e.currentTarget as HTMLDivElement;

	};

	
	return (
		<>
			<div
				onClick={handleClose}
				className="fixed top-0 left-0 w-full h-full z-[99999]  bg-black bg-opacity-20   flex flex-col items-center  py-4 "
			>
				<div className="w-auto">{children}</div>
			</div>
			{/* <div
				onClick={handleClose}
				id="wrapper"
				className="fixed inset-0 z-[100] overflow-auto bg-black bg-opacity-10 backdrop-blur-[1px]   flex flex-col items-center justify-center py-10 "
			>
				<div className="w-full overflow-auto">{children}</div>
			</div> */}
		</>
	);
};

export default Modal;
