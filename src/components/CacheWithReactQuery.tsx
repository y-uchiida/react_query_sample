import { useState } from "react"
import { useQuery } from "react-query";
import { User } from "../types/User";

const fetchUsers = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	const users = await res.json() as User[];
	return users;
};

const UserList = () => {
	const {
		data: users,
		isLoading,
		status,
	} = useQuery(
		'cache_users',
		fetchUsers,
		{
			// キャッシュの保持期間 単位はms (デフォルト 1000 * 60 * 5 = 5min)
			cacheTime: 1000,
		}
	);
	// status がloading の場合はデータの取得をしている
	// success の場合は読み込み成功またはキャッシュを利用
	console.log(status);

	if (isLoading) return <>loading...</>

	return (
		<div>
			<div>Fetch and cache users with React Query</div>
			<ul>
				{users && users.map(user =>
					<li key={user.id}>{user.name}</li>
				)}
			</ul>
		</div>
	);
}

export const CacheWithReactQuery = () => {
	const [show, setShow] = useState(true);

	return (
		<div>
			<button onClick={() => setShow(current => !current)}>toggle user list</button>
			<div>
				{show && <UserList />}
			</div>
		</div>
	)
}
