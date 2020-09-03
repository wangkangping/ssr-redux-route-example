import '@babel/polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  browserHistory,
  Switch,
} from "react-router-dom";

// import configureStore from '../common/store/configureStore'
import configureStore from "../src/store";
// import App from '../common/containers/App'
import App from "../src/components/Navigetor";
import News from "../src/containers/news";
import Todos from "../src/containers/todo";

const preloadedState = window.__PRELOADED_STATE__
const store = configureStore(preloadedState)
const rootElement = document.getElementById('root')

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/">
        <App></App>
        <Switch>
          <Route path="/todos">
            <Todos></Todos>
          </Route>
          <Route path="/news">
            <News></News>
          </Route>
        </Switch>
      </Route>
    </Router>
  </Provider>,
  rootElement
)
