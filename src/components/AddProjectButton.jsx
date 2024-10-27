export default function AddProjectButton({ menu, ...props }) {
	return (
		<button
			className="w-fit px-4 py-2 shadow-md capitalize text-xl text-stone-50 font-fira-sans font-medium rounded-md bg-rose-700 hover:bg-rose-800 hover:shadow-lg"
			style={menu ? { marginLeft: "32px" } : undefined}
			{...props}
		>
			+ add project
		</button>
	);
}
