import { useState } from "react";
import Menu from "./components/Menu";
import NewProject from "./components/NewProject";

function App() {
	const [projects, setProjects] = useState([]);

	function handleAddProject() {}

	return (
		<>
			<Menu
				projects={projects}
				handleAddProject={handleAddProject}
			/>
			<NewProject />
		</>
	);
}

export default App;
