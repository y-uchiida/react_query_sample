export type Task = {
	id: string,
	content: {
		title: string,
		createdAt: Date,
		updatedAt: Date,
		isDone: boolean,
	},
	userId: string,
}
