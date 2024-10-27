import AddProjectButton from "./AddProjectButton";

import noProjectImg from "../assets/no-projects.png";

export default function NoProject({ handleAddProject }) {
	return (
		<div className="w-full h-full flex flex-col items-center justify-center gap-4">
			<div className="w-64 h-64">
				<img
					src={noProjectImg}
					alt="no project image"
					className="w-full h-auto"
				/>
			</div>
			<h2 className="text-stone-900 text-3xl font-signika font-medium">No Project!</h2>
			<p className="text-stone-900 text-lg font-fira-sans">Add a new project</p>
			<AddProjectButton onClick={handleAddProject} />
		</div>
	);
}
