import moment from 'moment/moment'
import { getPostsRequest } from '../../../api/socialFeed'

export const getPosts = async (feedUrl, amountOfPosts, postId) => {
  try {
    const res = await getPostsRequest(feedUrl, amountOfPosts, postId)
    return {
      postsList: createPostsList(res.data),
      postId: getLatestPostId(res.data)
    }
  } catch (error) {
    console.err(error)
    throw error
  }
}

const createPostsList = (data) => {
  return data.map((i) => {
    return {
      authorName: i.user.name,
      messageBody: i.text,
      postDate: moment(i.created_at).format('DD/MM/YYYY HH:mm'),
      id: i.id_str
    }
  })
}

export const getLatestPostId = (data) => data[0].id_str
