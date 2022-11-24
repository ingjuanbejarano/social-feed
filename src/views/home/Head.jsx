import React from 'react'

import { ReactComponent as Logo } from '../../img/logo1.svg'
import { ReactComponent as HeaderImg } from '../../img/img1.svg'
import {
  HeaderCallButton,
  HeaderText1,
  HeaderText2,
  HeaderText3,
  HeaderText4,
  TitleBtn
} from './styled/components'
import {
  HeadContainer,
  HeadImageContainer,
  HeadInfoContainer,
  HeadTitleContainer,
  InfoContentContainer,
  TitleBtnContainer,
  TitleImgContainer
} from './styled/containers'

export const Head = () => {
  return (
    <HeadContainer>
      <HeadTitleContainer>
        <TitleImgContainer>
          <Logo />
        </TitleImgContainer>
        <TitleBtnContainer>
          <TitleBtn>START QUIZ</TitleBtn>
        </TitleBtnContainer>
      </HeadTitleContainer>
      <HeadInfoContainer>
        <InfoContentContainer>
          <HeaderText1>ATTENTION ONLINE ADVERTISERS</HeaderText1>
          <HeaderText2>What’s Your Online Advertising Readiness Rating?</HeaderText2>
          <HeaderText3>
            When you take this quiz, you’ll get a free report that outlines YOUR Readiness Rating.
          </HeaderText3>
          <HeaderCallButton>START QUIZ</HeaderCallButton>
          <HeaderText4>Learn more about Readiness Raitings</HeaderText4>
        </InfoContentContainer>
      </HeadInfoContainer>
      <HeadImageContainer>
        <HeaderImg preserveAspectRatio="none" style={{ width: '100%', height: '100%' }} />
      </HeadImageContainer>
    </HeadContainer>
  )
}
