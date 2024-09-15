export default function NewProject() {
	return (
		<div
			className="px-4 pt-20 pb-4"
			style={{ width: "calc(100% - 384px)" }}
		>
			<h2 className="capitalize text-stone-900 text-3xl font-signika font-medium">new project</h2>
			<form className="flex flex-col pl-4 mt-8">
				<div className="flex flex-col gap-2">
					<label
						htmlFor="name"
						className="text-stone-900 text-lg font-fira-sans capitalize"
					>
						name
					</label>
					<input
						type="text"
						id="name"
					/>
				</div>
				<div>
					<label
						htmlFor="description"
						className="text-stone-900 text-lg font-fira-sans capitalize"
					>
						description
					</label>
					<textarea id="description"></textarea>
				</div>
				<div>
					<label
						htmlFor="due-date"
						className="text-stone-900 text-lg font-fira-sans capitalize"
					>
						due date
					</label>
					<input
						type="date"
						id="due-date"
					/>
				</div>
			</form>
			<div className="flex gap-2 pl-4 mt-8">
				<button>cancel</button>
				<button>save</button>
			</div>
		</div>
	);
}
