export default function Menu({ projects, handleAddProject }) {
	return (
		<aside className="w-96 h-screen flex flex-col gap-8 px-4 pt-8 pb-4 bg-rose-500">
			<h1 className="capitalize text-stone-50 text-5xl font-signika font-medium">your projects</h1>
			<button
				className="w-fit px-4 py-2 ml-4 shadow-md capitalize text-xl text-stone-50 font-fira-sans font-medium rounded-md bg-rose-700 hover:bg-rose-800 hover:shadow-lg"
				onClick={handleAddProject}
			>
				+ add project
			</button>
			<menu>
				{projects.map(({ name }, index) => (
					<li key={index}>{name}</li>
				))}
			</menu>
		</aside>
	);
}
