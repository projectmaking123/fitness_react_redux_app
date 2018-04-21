import { FETCH_POST, NEW_POST } from './types';

export const createPost = (post) => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(post)
    })
    .then(res => res.json())
    .then(data => dispatch({
      type: NEW_POST,
      payload: data
    })
  );
}
