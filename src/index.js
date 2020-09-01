import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  browserHistory,
  Switch,
} from "react-router-dom";

import configureStore from "./store";
// import store from "./store";
import APP from "./components/Navigetor";
import News from "./containers/news";
import Todos from "./containers/todo";
import ActiveTodoList from "./routes/ActiveTodoList";
import AllTodoList from "./routes/AllTodoList";
import CompleteTodoList from "./routes/CompleteTodoList";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/">
        <APP></APP>
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
  document.getElementById("root")
);
