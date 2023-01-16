import { useEffect, useState } from 'react'
import { User } from '../types/User';

/**
 * 
 * @returns User[]
 */
const fetchUsers = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	return res.json();
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
