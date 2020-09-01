import React, { Component } from "react";
import { Link, useRouteMatch } from "react-router-dom";

import {
  BrowserRouter as Router,
  Route,
  // browserHistory,
  Switch,
} from "react-router-dom";

import ActiveTodoList from "../../routes/ActiveTodoList";
import AllTodoList from "../../routes/AllTodoList";
import CompleteTodoList from "../../routes/CompleteTodoList";

const Filter = () => {
  let { path, url } = useRouteMatch();

  return (
    <div>
      <Link to={`${url}`}>All</Link>
      <Link to={`${url}/active`}>Active</Link>
      <Link to={`${url}/complete`}>Complete</Link>

      <Switch>
        <Route exact path={`${path}`} component={AllTodoList} />
        <Route path={`${path}/active`} component={ActiveTodoList} />
        <Route path={`${path}/complete`} component={CompleteTodoList} />
      </Switch>
    </div>
  );
};
// class Filter extends Component {

//   render() {

//     let { url } = useRouteMatch();

//     return (
//       <div>
//         <Link to={`${url}`}>
//             All
//         </Link>
//         <Link to={`${url}/active`}>
//             Active
//         </Link>
//         <Link to={`${url}/complete`}>
//             Complete
//         </Link>
//       </div>
//     );
//   }
// }

export default Filter;
