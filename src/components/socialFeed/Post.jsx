import React from 'react';

import { PostContainer, PostedDate, PostText, PostAuthor } from './styled/post';

export const Post = ({ post }) => {
  const { authorName, messageBody, postDate } = post;
  return (
    <>
      <PostContainer title="post-container">
        <PostText title="post-message">{messageBody}</PostText>
        <PostAuthor title="post-author">- {authorName}</PostAuthor>
      </PostContainer>
      <PostedDate title="post-date">Posted: {postDate}</PostedDate>
    </>
  );
};
