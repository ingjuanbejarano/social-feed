import React from 'react'
import { render, screen, within } from '@testing-library/react'

import * as db from '../../mock-db/postsList.json'
import { FeedContainer } from '../components/socialFeed/styled/container'
import { Post } from '../components/socialFeed/Post'

test('Render list of posts', async () => {
  render(
    <FeedContainer>
      {db.postsList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </FeedContainer>
  )
  const list = await screen.findAllByTitle('post-container')
  const postDates = await screen.findAllByTitle('post-date')

  expect(list.length).toBe(db.postsList.length)

  const postText = await within(list[0]).findByTitle('post-message')
  const postAuthor = await within(list[0]).findByTitle('post-author')

  expect(postText).toHaveTextContent(db.postsList[0].messageBody.replace(/(\r\n|\n|\r)/gm, ''))
  expect(postAuthor).toHaveTextContent(db.postsList[0].authorName)
  expect(postDates[0]).toHaveTextContent(`Posted: ${db.postsList[0].postDate}`)
})
