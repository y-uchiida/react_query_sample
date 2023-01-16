import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query"

const userQueryClient = new QueryClient();

type Props = {
	children: ReactNode
}

export const UserQueryClientProvider = ({ children }: Props) => {
	return (
		<QueryClientProvider client={userQueryClient}>
			{children}
		</QueryClientProvider>
	)
}
