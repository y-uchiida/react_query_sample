import { useDeleteTask, useTasks } from "../hooks/useTasks";
import { Task } from "../types/Task";

type TaskItemProps = {
	task: Task
};

const TaskItem = ({ task }: TaskItemProps) => {
	const deleteTask = useDeleteTask();
	const handleTaskDelete = () => {
		deleteTask.mutate(task.id);
	}

	return (<li key={task.id}>
		{task.content.title}
		<button type="button" onClick={handleTaskDelete}>delete</button>
	</li>)
}

export const TaskList = () => {
	const { data: tasks, isLoading } = useTasks();

	if (isLoading) return <>loading...</>
	if (tasks === undefined || tasks.length < 1) {
		return <>タスクがありません</>
	}

	return (
		<ul>
			{tasks.map(task => {
				return <TaskItem key={task.id} task={task} />
			})}
		</ul>
	)
}

