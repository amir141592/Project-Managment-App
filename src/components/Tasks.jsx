import NewTask from "./NewTask";

export default function Tasks({ projectId, tasks, handleAddingTask, handleDeleteTask, handleToggleCheckbox }) {
	return (
		<section>
			<h2 className="text-2xl font-medium text-stone-900 mb-4">Tasks</h2>
			<NewTask handleAddingTask={handleAddingTask} />
			{tasks.length ? (
				<ul>
					{tasks.map(({ id, name, done }) => (
						<li
							key={id}
							className="flex justify-between items-center"
						>
							<div className="flex items-center gap-2">
								<input
									type="checkbox"
									id={id}
									checked={done}
									onChange={() => handleToggleCheckbox(projectId, id)}
								/>
								<span>{name}</span>
							</div>
							<button
								className="p-1 transition border border-transparent hover:border-stone-400 rounded"
								title="Delete Task"
								onClick={() => handleDeleteTask(projectId, id)}
							>
								🗑️
							</button>
						</li>
					))}
				</ul>
			) : (
				<p className="mt-4 text-stone-900">There is no task. Creat a new task.</p>
			)}
		</section>
	);
}
