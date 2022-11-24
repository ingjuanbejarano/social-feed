import axios from 'axios'

export const getPostsRequest = (feedUrl, limit, postId) => {
  const limitQuery = limit ? `limit=${limit}` : ''
  const postIdQuery = postId ? `&start_id=${postId}` : ''
  return axios.get(`${feedUrl}?${limitQuery}${postIdQuery}`)
}
