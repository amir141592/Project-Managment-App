import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ children }, ref) {
	const modal = useRef();

	useImperativeHandle(ref, () => ({
		open() {
			modal.current.showModal();
		},
	}));

	return createPortal(
		<dialog
			ref={modal}
			className="p-4 rounded-md bg-stone-100"
		>
			{children}
			<form
				method="dialog"
				className="mt-4"
			>
				<button className="px-4 py-1 capitalize font-fira-sans font-medium text-lg rounded-md text-stone-50 bg-rose-700 shadow-md hover:bg-rose-800 hover:shadow-lg">
					OK
				</button>
			</form>
		</dialog>,
		document.getElementById("root-modal")
	);
});

export default Modal;
