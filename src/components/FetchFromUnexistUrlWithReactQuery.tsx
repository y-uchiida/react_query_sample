import { useQuery } from 'react-query';
import { User } from '../types/User';

const fetchNotFound = async () => {
	const res = await fetch('https://notfound.example.com/users');

	// react query の制約として、データ取得の失敗時に必ずエラーを投げる必要がある
	if (!res.ok) {
		throw new Error('Network response was not ok');
	}

	const users = await res.json() as User[];
	return users;
}

// react-query のerrorはunknown なので、 
// エラー内容を保持するmessage プロパティを持つ型を雑に定義
type FetchError = {
	message: string
}

export const FetchFromUnexistUrlWithReactQuery = () => {
	const {
		isLoading: isLoading,
		isError, // データ取得関数のエラー状態を返す
		error  // エラーの内容を取得
	} = useQuery('notfound', fetchNotFound, {
		retry: 1, // エラー発生後のリトライ回数を設定 (デフォルト 3)
		// retry: false, // リトライしない場合はfalse

		// データ取得関数を再試行するまでの待機時間, 単位ms (デフォルト1000)
		// 再実行時の試行するたびに待機時間を倍にしていく(1000 -> 2000 -> 4000 -> ...)
		retryDelay: 1000,

		// ウィンドウフォーカスが一度はずれ、再び戻ってきたときにデータの再取得を行う
		refetchOnWindowFocus: true,
	});

	return (
		<div>
			<div>Fetch unExist Url with React Query</div>
			{/* 読み込み中は loading を表示 */}
			{isLoading && <>loading...</>}
			{isError && <>{(error as FetchError).message}</>}
		</div>
	)
}
