import {
  HANDLE_SET_POSTS_LIST,
  HANDLE_SET_POST_ID,
  HANDLE_SET_RELOAD_POSTS
} from '../types/socialFeed';

export const setPostsList = (postsList) => ({
  type: HANDLE_SET_POSTS_LIST,
  payload: { postsList }
});

export const setPostId = (postId) => ({
  type: HANDLE_SET_POST_ID,
  payload: { postId }
});

export const setReloadPosts = (reloadPosts) => ({
  type: HANDLE_SET_RELOAD_POSTS,
  payload: { reloadPosts }
});
