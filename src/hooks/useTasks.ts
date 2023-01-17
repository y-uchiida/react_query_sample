import { useQuery, useQueryClient, useMutation } from "react-query";
import { TASK_FILE_PATH } from "../constants";
import { Task } from "../types/Task";

const QUERY_KEY_NAME = 'tasks';

const addTask = async (task: Task) => {
	const tasks = await getTasks();
	tasks.push(task);
	const data = JSON.stringify(tasks);
	localStorage.setItem(QUERY_KEY_NAME, data);
	return task;
}

const deleteTask = async (taskId: string) => {

}

const updateTask = async (task: Task) => {

}


const getTasks = async () => {
	const data = localStorage.getItem(QUERY_KEY_NAME) ?? '';
	if (data === "") return [];
	try {
		const tasks = JSON.parse(data) as Task[];
		return tasks;
	} catch (error) {
		throw new Error('タスクデータの取得に失敗しました');
	}
}

export const useTasks = () => {
	return useQuery(QUERY_KEY_NAME, () => getTasks());
}

export const useAddTask = () => {
	const queryClient = useQueryClient();

	// addTask() を実行して、その結果で内容を更新する
	// addTask() の引数は、呼び出し側で addTask.mutate() するときに渡す
	return useMutation(addTask, {
		onSuccess: () => {
			// クエリキャッシュ(tasks の前回実行時のキャッシュ)を無効にする
			queryClient.invalidateQueries(QUERY_KEY_NAME);
		},
		onError: () => { },
	});
}

