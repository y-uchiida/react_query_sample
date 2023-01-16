import { useQuery } from 'react-query';
import { User } from '../types/User';

const fetchUsers = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	const users = await res.json() as User[];
	return users;
};

export const FetchUsersWithReactQuery = () => {
	// 第一引数に任意のキー、第二引数にデータを取得するための関数を渡す
	// data で取得結果を返し、isLoading でデータ取得関数の処理状態を返す
	const { data: users, isLoading } = useQuery('users', fetchUsers);

	// isLoading がTrue の場合は読み込み中なので、loading...の文字列だけ表示	
	if (isLoading) return <>loading...</>

	return (
		<div>
			<div>Fetch users with React Query</div>
			<ul>
				{users && users.map(user =>
					<li key={user.id}>{user.name}</li>
				)}
			</ul>
		</div>
	)
}
