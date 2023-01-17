import { useState } from "react";
import { v4 as uuid } from "uuid";
import { useAddTask } from "../hooks/useTasks";
import { Task } from "../types/Task";

const generateNewTask = (title: string) => {
	const task: Task = {
		id: uuid(),
		content: {
			title: title,
			isDone: false,
			createdAt: new Date(),
			updatedAt: new Date(),
		},
		userId: 'user-id-example',
	};
	return task;
}

export const TaskInput = () => {
	const addTask = useAddTask();
	const [title, setTitle] = useState('');

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (title.length === 0) return;

		const newTask = generateNewTask(title);
		addTask.mutate(newTask);
		setTitle('');
	}

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="title">
				<input
					type="text"
					name="title"
					id="title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
			</label>
			<button type="submit">
				Add task
			</button>
		</form>
	)
}
