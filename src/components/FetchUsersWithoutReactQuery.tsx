import { useEffect, useState } from 'react'
import { User } from '../types/User';

/**
 * 
 * @returns User[]
 */
const fetchUsers = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');

	// react query の制約として、データ取得の失敗時に必ずエラーを投げる必要がある
	if (!res.ok) {
		throw new Error('Network response was not ok');
	}

	const users = await res.json() as User[];
	return users;
};

export const FetchUsersWithoutReactQuery = () => {
	const [users, setUsers] = useState<User[]>([]);

	useEffect(() => {
		fetchUsers().then((data) => {
			const users = data as User[];
			setUsers(users);
		});
	}, []);

	return (
		<div>
			<h2>Fetch users without React query</h2>
			<ul>
				{users.map(user => {
					return <li key={user.id}>{user.name}</li>
				})}
			</ul>
		</div>
	)
}
