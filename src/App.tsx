import { CacheWithReactQuery } from './components/CacheWithReactQuery'
import { FetchFromUnexistUrlWithReactQuery } from './components/FetchFromUnexistUrlWithReactQuery'
import { FetchUsersWithoutReactQuery } from './components/FetchUsersWithoutReactQuery'
import { FetchUsersWithReactQuery } from './components/FetchUsersWithReactQuery'
import { UserQueryClientProvider } from './hooks/UserQuery'
import { ReactQueryDevtools } from 'react-query/devtools';
import { TaskQueryClientProvider } from './hooks/TaskQuery'
import { CrudTaskWithReactQuery } from './components/CrudTaskWithReactReactQuery'

function App() {
  return (
    <div className="App">
      <FetchUsersWithoutReactQuery />
      {/* react-query を使うためにプロバイダのコンポーネントでラップする */}
      <UserQueryClientProvider>
        <FetchUsersWithReactQuery />
        <FetchFromUnexistUrlWithReactQuery />
        <CacheWithReactQuery />
        <ReactQueryDevtools initialIsOpen={false} />
      </UserQueryClientProvider>
      <TaskQueryClientProvider>
        <CrudTaskWithReactQuery />
      </TaskQueryClientProvider>
    </div>
  )
}

export default App
