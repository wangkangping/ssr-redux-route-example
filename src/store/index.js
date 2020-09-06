import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
// For debugging in google devtool of Redux
import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "../reducers";
import loggerMiddleware from "../middleware/logger";
import monitorReducerEnhancer from "../enhancers/monitorReducer";

export default function configureStore(preloadedState) {
  const middlewares = [loggerMiddleware, thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer, monitorReducerEnhancer];
  const composedEnhancers = composeWithDevTools(middlewareEnhancer);

  const store = createStore(reducers, preloadedState, composedEnhancers);

  // const middlewareEnhancer = applyMiddleware(loggerMiddleware, thunkMiddleware);
  // const composedEnhancers = compose(middlewareEnhancer, monitorReducerEnhancer);

// const composeEnhancers = composeWithDevTools({ 
//   // actionCreators, 
//   trace: true, 
//   traceLimit: 25 
// });

  // let store = createStore(reducers, composeEnhancers);

  return store;
}

// export default store;

// import { createStore } from 'redux';
// import reducers from '../reducers';
// // For debugging in google devtool of Redux
// import { composeWithDevTools } from 'redux-devtools-extension';

// let store = createStore(reducers, composeWithDevTools());

// export default store;
