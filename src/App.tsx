import { CacheWithReactQuery } from './components/CacheWithReactQuery'
import { FetchFromUnexistUrlWithReactQuery } from './components/FetchFromUnexistUrlWithReactQuery'
import { FetchUsersWithoutReactQuery } from './components/FetchUsersWithoutReactQuery'
import { FetchUsersWithReactQuery } from './components/FetchUsersWithReactQuery'
import { UserQueryClientProvider } from './hooks/UserQuery'

function App() {

  return (
    <div className="App">
      <FetchUsersWithoutReactQuery />
      {/* react-query を使うためにプロバイダのコンポーネントでラップする */}
      <UserQueryClientProvider>
        <FetchUsersWithReactQuery />
        <FetchFromUnexistUrlWithReactQuery />
        <CacheWithReactQuery />
      </UserQueryClientProvider>
    </div>
  )
}

export default App
