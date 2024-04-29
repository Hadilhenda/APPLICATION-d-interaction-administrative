import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './index.css'
import Login from './components/login'

import App from './App'
import { Provider } from 'react-redux'
import store from './store'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'
// import { TransactionsProvider } from './context/TransactionContext'
import { CitoyensProvider } from './context/CitoyenContext'
const Layout = () => {
  const { user: currentUser } = useSelector((state) => state.auth)
  console.log(currentUser)

  return <div>{currentUser ? <App /> : <Login />}</div>
}

ReactDOM.render(
  <CitoyensProvider>
    <BrowserRouter>
      <Provider store={store}>
        <Layout />
      </Provider>
    </BrowserRouter>
  </CitoyensProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
