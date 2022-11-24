import React from 'react'

import AdImg from '../../img/ad1.svg'
import { AdImage, ArticleText1, ArticleText2, ArticleTitle } from './styled/components'
import { ArticleImgContainer, ArticlesContainer, ArticleTextContainer } from './styled/containers'

export const Articles = () => {
  return (
    <ArticlesContainer>
      <ArticleTextContainer>
        <ArticleText1>WHY IT IS IMPORTANT</ArticleText1>
        <ArticleTitle>Knowing Your Online Ads Readiness Raiting...</ArticleTitle>
        <ArticleText2>
          {
            '...will help you understand just how bullish you should be with your ad spend and where your blind spots are.'
          }
        </ArticleText2>
        <ArticleText2>
          {
            'When it comes to online advertising the more informed and ready you are, the more effective your advertising will be (and the greater your chances of a healthy Return on your Ad Spend (ROAS)).'
          }
        </ArticleText2>
        <ArticleText2>
          {
            'Find Out your Online Advertising Readiness Rating so you can make more money and avoid risks with your online advertising.'
          }
        </ArticleText2>
      </ArticleTextContainer>
      <ArticleImgContainer>
        <AdImage src={AdImg} />
      </ArticleImgContainer>
    </ArticlesContainer>
  )
}
