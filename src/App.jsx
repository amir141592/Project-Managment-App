import { useRef, useState } from "react";
import Menu from "./components/Menu";
import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";
import Modal from "./components/Modal";
import SelectedProject from "./components/SelectedProject";

function App() {
	const [projects, setProjects] = useState([]);
	const [appState, setAppState] = useState("NO_PROJECT");
	const [selectedProject, setSelectedProject] = useState(undefined);

	const errorModal = useRef();

	let mainContent;

	function handleAddProject() {
		setAppState("ADD_PROJECT");
		setSelectedProject(undefined);
	}

	function handleCancelAddProject() {
		setAppState("NO_PROJECT");
		setSelectedProject(undefined);
	}

	function handleSaveProject({ id, name, description, dueDate, tasks }) {
		if (name.trim() === "" || description.trim() === "" || dueDate.trim() === "") {
			errorModal.current.open();
			return;
		}

		if (!id)
			setProjects((curProjects) => [
				...curProjects,
				{
					id: Math.round(Math.random() * 100000),
					name,
					description,
					dueDate,
					tasks: [],
				},
			]);
		else
			setProjects((curProjects) => {
				const newProjects = [...curProjects];
				const newProject = {
					id,
					name,
					description,
					dueDate,
					tasks,
				};
				newProjects.splice(
					newProjects.findIndex((project) => project.id === id),
					1,
					newProject
				);
				return newProjects;
			});
	}

	function handleSelectProject(id) {
		setSelectedProject(projects.find(({ id: _id }) => _id === id));
		setAppState("SHOW_PROJECT");
	}

	function handleDeleteProject(id) {
		setProjects((curProjects) => [...curProjects.filter((project) => project.id !== id)]);
		setSelectedProject(undefined);
		setAppState("NO_PROJECT");
	}

	function handleEditProject() {
		setAppState("ADD_PROJECT");
	}

	function handleAddingTask(taskName) {
		const newSelectedProject = { ...selectedProject };
		newSelectedProject.tasks.push({ id: Math.round(Math.random() * 1000000), name: taskName, done: false });

		setProjects((curProjects) => {
			const newProjects = [...curProjects];
			newProjects.splice(
				newProjects.findIndex((project) => project.id === selectedProject.id),
				1,
				newSelectedProject
			);
			return newProjects;
		});

		setSelectedProject(newSelectedProject);
	}

	function handleDeleteTask(projectId, taskId) {
		const newSelectedProject = { ...selectedProject };
		newSelectedProject.tasks.splice(
			newSelectedProject.tasks.findIndex((task) => task.id === taskId),
			1
		);

		setProjects((curProjects) => {
			const newProjects = [...curProjects];
			newProjects.splice(
				newProjects.findIndex((project) => project.id === projectId),
				1,
				newSelectedProject
			);
			return newProjects;
		});

		setSelectedProject(newSelectedProject);
	}

	function handleToggleCheckbox(projectId, taskId) {
		const newSelectedProject = { ...selectedProject };
		const changedTask = newSelectedProject.tasks.find((task) => task.id === taskId);
		changedTask.done = !changedTask.done;

		setProjects((curProjects) => {
			const newProjects = [...curProjects];
			newProjects.splice(
				newProjects.findIndex((project) => project.id === projectId),
				1,
				newSelectedProject
			);
			return newProjects;
		});

		setSelectedProject(newSelectedProject);
	}

	switch (appState) {
		case "ADD_PROJECT":
			mainContent = (
				<NewProject
					selectedProject={selectedProject}
					handleCancelAddProject={handleCancelAddProject}
					handleSaveProject={handleSaveProject}
				/>
			);
			break;

		case "NO_PROJECT":
			mainContent = <NoProject handleAddProject={handleAddProject} />;
			break;

		case "SHOW_PROJECT":
			mainContent = (
				<SelectedProject
					project={selectedProject}
					handleEditProject={handleEditProject}
					handleDeleteProject={handleDeleteProject}
					handleAddingTask={handleAddingTask}
					handleDeleteTask={handleDeleteTask}
					handleToggleCheckbox={handleToggleCheckbox}
				/>
			);
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
