import { useRef } from "react";

export default function NewProject({ selectedProject, handleCancelAddProject, handleSaveProject }) {
	const name = useRef();
	const description = useRef();
	const dueDate = useRef();

	return (
		<>
			<h2 className="capitalize text-stone-900 text-3xl font-signika font-medium">new project</h2>
			<form className="flex flex-col gap-4 pl-4 mt-8">
				<div className="flex flex-col gap-2">
					<label
						htmlFor="name"
						className="text-stone-900 text-lg font-fira-sans capitalize"
					>
						name
					</label>
					<input
						type="text"
						id="name"
						className="w-64 p-1 font-signika rounded border"
						defaultValue={selectedProject?.name ?? ""}
						ref={name}
					/>
				</div>
				<div className="flex flex-col gap-2">
					<label
						htmlFor="description"
						className="text-stone-900 text-lg font-fira-sans capitalize"
					>
						description
					</label>
					<textarea
						id="description"
						className="w-64 h-16 p-1 font-signika rounded border resize-none"
						defaultValue={selectedProject?.description ?? ""}
						ref={description}
					></textarea>
				</div>
				<div className="flex flex-col gap-2">
					<label
						htmlFor="due-date"
						className="text-stone-900 text-lg font-fira-sans capitalize"
					>
						due date
					</label>
					<input
						type="date"
						id="due-date"
						className="w-64 p-1 font-signika rounded border"
						defaultValue={selectedProject?.dueDate ?? ""}
						ref={dueDate}
					/>
				</div>
			</form>
			<div className="flex gap-2 pl-4 mt-8">
				<button
					className="px-4 py-1 capitalize font-fira-sans font-medium text-lg text-rose-700 hover:text-rose-800"
					onClick={handleCancelAddProject}
				>
					cancel
				</button>
				<button
					className="px-4 py-1 capitalize font-fira-sans font-medium text-lg rounded-md text-stone-50 bg-rose-700 shadow-md hover:bg-rose-800 hover:shadow-lg"
					onClick={() =>
						selectedProject
							? handleSaveProject({
									id: selectedProject.id,
									name: name.current.value,
									description: description.current.value,
									dueDate: dueDate.current.value,
							  })
							: handleSaveProject({ name: name.current.value, description: description.current.value, dueDate: dueDate.current.value })
					}
				>
					save
				</button>
			</div>
		</>
	);
}
