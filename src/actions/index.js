let initId = 0;

const apiKey = "8da36deb0ba44be090119bb7feea5b30";

export const addTodo = (text) => ({
  type: "ADD_TODO",
  id: initId++,
  text,
});

export const toggleTodo = (id) => ({
  type: "TOGGLE_TODO",
  id,
});

export const filterTodo = (filter) => ({
  type: "FILTER_TODO",
  filter,
});

export const requestPosts = () => ({
  type: "REQUEST_POSTS",
});

export const receivedPosts = (json) => ({
  type: "RECEIVE_POSTS",
  channels: json.articles,
});

export const fetchNews = (channelName) => (dispatch) => {
  dispatch(requestPosts());

  return fetch(
    "https://newsapi.org/v1/articles?source=" +
      channelName +
      "&apiKey=" +
      apiKey
  )
    .then(
      (response) => response.json(),
      (error) => console.log("An error occurred.", error)
    )
    .then((json) => {
      dispatch(receivedPosts(json));
    });
};
