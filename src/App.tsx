import { CacheWithReactQuery } from './components/CacheWithReactQuery'
import { FetchFromUnexistUrlWithReactQuery } from './components/FetchFromUnexistUrlWithReactQuery'
import { FetchUsersWithoutReactQuery } from './components/FetchUsersWithoutReactQuery'
import { FetchUsersWithReactQuery } from './components/FetchUsersWithReactQuery'
import { UserQueryClientProvider } from './hooks/UserQuery'
import { ReactQueryDevtools } from 'react-query/devtools';

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
    </div>
  )
}

export default App
