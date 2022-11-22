import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Post } from './Post';

import { FeedContainer } from './styled/container';
import { defaultFeedParameters } from '../../utils/const';
import { getPosts } from './utils/dataFetch';
import { setPostId, setPostsList, setReloadPosts } from '../../store/actions/socialFeed';
import { Spinner } from './styled/spinner';

const { defaultFeedUrl, defaultAmountOfPosts, defaultRefreshIntervalMilisecs } =
  defaultFeedParameters;

const SocialFeed = ({
  feedUrl = defaultFeedUrl,
  amountOfPosts = defaultAmountOfPosts,
  refreshIntervalMilisecs = defaultRefreshIntervalMilisecs
}) => {
  const [loading, setLoading] = useState(false);
  const postsList = useSelector((state) => state.socialFeed.postsList);
  const postId = useSelector((state) => state.socialFeed.postId);
  const reloadPosts = useSelector((state) => state.socialFeed.reloadPosts);
  const dispatch = useDispatch();

  const fetchAndSetData = useCallback(
    async (postId) => {
      try {
        const res = await getPosts(feedUrl, amountOfPosts, postId);
        dispatch(setPostsList(res.postsList));
        dispatch(setPostId(res.postId));
        dispatch(setReloadPosts(false));
        setLoading(false);
        setTimeout(() => {
          dispatch(setReloadPosts(true));
        }, refreshIntervalMilisecs);
      } catch (error) {
        console.error(error);
      }
    },
    [amountOfPosts, dispatch, feedUrl, refreshIntervalMilisecs]
  );

  useEffect(() => {
    setLoading(true);
    fetchAndSetData();
  }, [fetchAndSetData]);

  useEffect(() => {
    if (postId && reloadPosts) {
      setLoading(true);
      fetchAndSetData(postId);
    }
  }, [postId, reloadPosts, fetchAndSetData]);

  return (
    <FeedContainer>
      {loading ? <Spinner /> : postsList.map((post) => <Post key={post.id} post={post} />)}
    </FeedContainer>
  );
};

export { SocialFeed };
