import {
  HANDLE_SET_POSTS_LIST,
  HANDLE_SET_POST_ID,
  HANDLE_SET_RELOAD_POSTS
} from '../types/socialFeed';

const initialState = {
  postsList: [],
  postId: null,
  reloadPosts: false
};

export const socialFeedReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_SET_POSTS_LIST:
      return Object.assign({}, state, {
        postsList: action.payload.postsList
      });

    case HANDLE_SET_POST_ID:
      return Object.assign({}, state, {
        postId: action.payload.postId
      });

    case HANDLE_SET_RELOAD_POSTS:
      return Object.assign({}, state, {
        reloadPosts: action.payload.reloadPosts
      });

    default:
      return state;
  }
};
