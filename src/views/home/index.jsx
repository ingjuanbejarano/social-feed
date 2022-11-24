import React from 'react'
import { SocialFeed } from '../../components/socialFeed'
import { MainContainer, SocialFeedContainer } from './styled/containers'

import { Head } from './Head'
import { Partners } from './Partners'
import { CallingAd } from './CallingAd'
import { Footer } from './Footer'
import { Articles } from './Articles'

const feedUrl = process.env.REACT_APP_FEED_URL
const amountOfPosts = process.env.REACT_APP_AMOUNT_POSTS
const refreshIntervalMilisecs = process.env.REACT_APP_REFRESH_INTERVAL_MILISECS

export const Home = () => {
  return (
    <div className="App">
      <MainContainer>
        <Head />
        <Partners />
        <SocialFeedContainer>
          <SocialFeed
            feedUrl={feedUrl}
            amountOfPosts={amountOfPosts}
            refreshIntervalMilisecs={refreshIntervalMilisecs}
          />
        </SocialFeedContainer>
        <Articles />
        <CallingAd />
        <Footer />
      </MainContainer>
    </div>
  )
}
