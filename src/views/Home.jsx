import React from 'react';
import { SocialFeed } from '../components/socialFeed/';

const feedUrl = process.env.REACT_APP_FEED_URL;
const amountOfPosts = process.env.REACT_APP_AMOUNT_POSTS;
const refreshIntervalMilisecs = process.env.REACT_APP_REFRESH_INTERVAL_MILISECS;

export const Home = () => {
  return (
    <div className="App">
      <SocialFeed
        feedUrl={feedUrl}
        amountOfPosts={amountOfPosts}
        refreshIntervalMilisecs={refreshIntervalMilisecs}
      />
    </div>
  );
};
