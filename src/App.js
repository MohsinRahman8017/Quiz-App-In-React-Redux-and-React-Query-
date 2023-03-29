import React from 'react'
import Quiz from './components/Layout/Quiz'
import { QueryClient,QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import {store} from "./store"
import { Provider } from 'react-redux'

import "./App.css"

const App = () => {

  const queryClient = new QueryClient()

  return (
    <div className='outer-wrapper'>
      <Provider store={store}>
        <QueryClientProvider client={queryClient} >
          <Quiz/>
          <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        </QueryClientProvider>
      </Provider>
    </div>
  )
}

export default App
