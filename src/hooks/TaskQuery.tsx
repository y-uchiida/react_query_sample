import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query"

const taskQueryClient = new QueryClient();

type Props = {
	children: ReactNode
}

export const TaskQueryClientProvider = ({ children }: Props) => {
	return (
		<QueryClientProvider client={taskQueryClient}>
			{children}
		</QueryClientProvider>
	)
}
