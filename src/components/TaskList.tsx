import { useTasks } from "../hooks/useTasks";

export const TaskList = () => {
	const { data: tasks, isLoading } = useTasks();

	if (isLoading) return <>loading...</>
	if (tasks === undefined || tasks.length < 1) {
		return <>タスクがありません</>
	}

	return (
		<ul>
			{tasks?.length > 0 && tasks.map(task => {
				return <li key={task.id}>{task.content.title}</li>
			})}
		</ul>
	)
}

