import { useRef } from "react";

export default function NewTask({ handleAddingTask }) {
	// ? we could use useState and let react empty the input by using state update function
	const taskName = useRef();

	function handleSavingTask() {
		handleAddingTask(taskName.current.value);
		taskName.current.value = "";
	}

	return (
		<div>
			<input
				type="text"
				name="taskName"
				id="task-name"
				className="w-64 p-1 mr-2 font-signika rounded border"
				placeholder="Task Name"
				ref={taskName}
			/>
			<button
				className="px-4 py-1 capitalize font-fira-sans font-medium rounded-md text-stone-50 bg-rose-700 shadow-md hover:bg-rose-800 hover:shadow-lg"
				onClick={handleSavingTask}
			>
				Add Task
			</button>
		</div>
	);
}
