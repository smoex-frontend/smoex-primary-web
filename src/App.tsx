import * as React from 'react'
import { Route } from 'react-router-dom'
import { configureStore, useActionCallback } from 'redux-async-kit'
import { Container } from 'react-dom-basic-kit'
import { PageRouter, Footer } from 'smoex-common-web'
import { commonSlice, accountAsyncAction } from 'smoex-common-business'
import { Provider } from 'react-redux'
import { createLazyComponent } from 'redux-async-kit'
import { commonReducer } from 'smoex-common-business'

const store = configureStore({
  injector: commonSlice.injector,
  reducers: commonReducer,
})

window['store'] = store

const HomePage = createLazyComponent({
  injector: commonSlice.injector,
  loader: () => import('./containers/HomePage' /* webpackChunkName: "home" */),
})

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Container>
        <PageRouter>
          <Route exact path="/" component={HomePage} />
        </PageRouter>
      </Container>
    </Provider>
  )
}

export default App
