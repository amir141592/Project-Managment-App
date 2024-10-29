import NewTask from "./NewTask";

export default function Tasks({ tasks, handleAddingTask }) {
	return (
		<section>
			<h2 className="text-2xl font-medium text-stone-900 mb-4">Tasks</h2>
			<NewTask handleAddingTask={handleAddingTask} />
			{tasks.length ? (
				<ul>
					{tasks.map((task) => (
						<li key={task}>
							{/* <input
								type="checkbox"
								id={task}
							/> */}
							<span>{task}</span>
						</li>
					))}
				</ul>
			) : (
				<p className="mt-4 text-stone-900">There is no task. Creat a new task.</p>
			)}
		</section>
	);
}
