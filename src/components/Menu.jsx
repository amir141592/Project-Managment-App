import AddProjectButton from "./AddProjectButton";

export default function Menu({ projects, selectedProject, handleAddProject, handleSelectProject }) {
	return (
		<aside className="w-96 h-screen flex flex-col gap-8 pt-8 pb-4 bg-rose-500">
			<h1 className="mx-4 w-full text-left capitalize text-stone-50 text-5xl font-signika font-medium">your projects</h1>
			<AddProjectButton
				menu={true}
				onClick={handleAddProject}
			/>
			<menu className="w-full">
				{projects.map(({ id, name }) => (
					<li
						key={id}
						className={
							selectedProject && id === selectedProject.id
								? "w-full pl-8 pr-4 py-2 text-stone-50 font-signika font-medium text-xl cursor-pointer bg-rose-400 shadow"
								: "w-full pl-8 pr-4 py-2 text-stone-50 font-signika font-medium text-xl cursor-pointer hover:bg-rose-400 hover:shadow"
						}
						onClick={() => handleSelectProject(id)}
					>
						{name}
					</li>
				))}
			</menu>
		</aside>
	);
}
