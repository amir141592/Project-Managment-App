import { useRef, useState } from "react";
import Menu from "./components/Menu";
import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";
import Modal from "./components/Modal";

function App() {
	const [projects, setProjects] = useState([]);
	const [appState, setAppState] = useState("NO_PROJECT");
	const [selectedProject, setSelectedProject] = useState(undefined);

	const errorModal = useRef();

	let mainContent;
	let showErrorModal = false;

	function handleAddProject() {
		setAppState("ADD_PROJECT");
	}

	function handleCancelAddProject() {
		setAppState("NO_PROJECT");
	}

	function handleSaveProject({ name, description, dueDate }) {
		if (name.trim() === "" || description.trim() === "" || dueDate.trim() === "") {
			errorModal.current.open();
			return;
		}

		setProjects((curProjects) => [
			...curProjects,
			{
				id: Math.round(Math.random() * 100000),
				name,
				description,
				dueDate,
			},
		]);
	}

	function handleSelectProject(id) {
		setSelectedProject(projects.find(({ id: _id }) => _id === id));
	}

	if (projects.length && !selectedProject) setSelectedProject(projects[0]);

	switch (appState) {
		case "ADD_PROJECT":
			mainContent = (
				<NewProject
					handleCancelAddProject={handleCancelAddProject}
					handleSaveProject={handleSaveProject}
				/>
			);
			break;

		case "NO_PROJECT":
			mainContent = <NoProject handleAddProject={handleAddProject} />;
			break;

		case "SHOW_PROJECT":
			break;

		default:
			mainContent = <NoProject handleAddProject={handleAddProject} />;
			break;
	}

	return (
		<>
			<Modal ref={errorModal}>
				<h2 className="mb-4 text-stone-900 text-3xl font-signika font-medium">Invalid Inputs</h2>
				<p className="text-stone-900 text-lg font-fira-sans">Make sure all inputs have a value</p>
			</Modal>
			<Menu
				projects={projects}
				selectedProject={selectedProject}
				handleAddProject={handleAddProject}
				handleSelectProject={handleSelectProject}
			/>
			<div
				className="h-screen px-4 pt-20 pb-4"
				style={{ width: "calc(100% - 384px)" }}
			>
				{mainContent}
			</div>
		</>
	);
}

export default App;
