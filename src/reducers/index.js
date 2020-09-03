import { combineReducers } from "redux";

function todos(state = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          isComplete: false,
        },
      ];
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, isComplete: !todo.isComplete } : todo
      );
    default:
      return state;
  }
}

const channels = (state = {}, action) => {
  switch (action.type) {
    // case SELECT_CHANNEL:
    //    return { ...state, channel: action.channel };
    case "REQUEST_POSTS":
       return { ...state, loading: true };
    case "RECEIVE_POSTS":
       return { ...state, channels: action.channels, loading: false };
    default:
       return state;
  }
};

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'SET_COUNTER':
      return action.payload
    case 'INCREMENT_COUNTER':
      return state + 1
    case 'DECREMENT_COUNTER':
      return state - 1
    default:
      return state
  }
}

// export default reducer;

export default combineReducers({ todos, channels, counter });
// export default combineReducers({ todos, visibleFilter });
