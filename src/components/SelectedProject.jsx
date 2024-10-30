import Tasks from "./Tasks";

export default function SelectedProject({
	project: { id, name, description, dueDate, tasks },
	handleEditProject,
	handleDeleteProject,
	handleAddingTask,
	handleDeleteTask,
	handleToggleCheckbox,
}) {
	return (
		<section className="w-1/3 flex flex-col">
			<header className="flex justify-between items-center mb-2">
				<h1 className="text-4xl font-medium capitalize text-stone-900">{name}</h1>
				<div className="flex items-center gap-2">
					<button
						className="p-1 text-lg font-medium transition border border-transparent hover:border-stone-400 rounded"
						title="Edit"
						onClick={handleEditProject}
					>
						✏️
					</button>
					<button
						className="p-1 transition border border-transparent hover:border-stone-400 rounded"
						title="Delete"
						onClick={() => handleDeleteProject(id)}
					>
						🗑️
					</button>
				</div>
			</header>
			<main className="flex flex-col gap-4 mb-4 border-b border-stone-300 pb-2">
				<span className="text-stone-500 text-sm">
					{new Date(dueDate).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
				</span>
				<p>{description}</p>
			</main>
			<footer>
				<Tasks
					projectId={id}
					tasks={tasks}
					handleAddingTask={handleAddingTask}
					handleDeleteTask={handleDeleteTask}
					handleToggleCheckbox={handleToggleCheckbox}
				/>
			</footer>
		</section>
	);
}
