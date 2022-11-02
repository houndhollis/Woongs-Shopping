import { useRoutes } from 'react-router-dom';
import { getClient } from './queryClient';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import { routes } from './routes'

const App = () => {
  const elem = useRoutes(routes)
  const queryClient = getClient()

  return  (
  <QueryClientProvider client={queryClient}>
    {elem}
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
  )
}

export default App