import styled from 'styled-components'

import { deviceSizes } from '../../../utils/const'

export const MainContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`

export const HeadContainer = styled.header`
  position: relative;
  height: 770px;
  width: 100%;
  display: flex;
  flex-direction: row;

  @media ${deviceSizes.frame} {
    max-width: 375px;
    margin: 0 auto;
    margin-bottom: -80px;
  }
`

export const HeadTitleContainer = styled.div`
  position: absolute;
  height: 150px;
  width: 100%;
  z-index: 9;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media ${deviceSizes.frame} {
    position: static;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: #6424ff;
  }
`

export const TitleImgContainer = styled.div`
  height: 51px;
  width: 94px;
  margin-left: 100px;
  margin-top: 30px;

  @media ${deviceSizes.frame} {
    margin: 0;
  }
`

export const TitleBtnContainer = styled.div`
  height: 44px;
  width: 169px;
  margin-right: 100px;
  margin-top: 30px;

  @media ${deviceSizes.frame} {
    margin: 0;
  }
`

export const HeadInfoContainer = styled.div`
  width: 640px;
  height: 770px;
  background-color: #6424ff;
  border: 1px none;

  @media ${deviceSizes.frame} {
    position: absolute;
    z-index: 9;
    top: 150px;
    width: 323px;
    height: 431px;
    margin: 51px 26px;
  }
`

export const InfoContentContainer = styled.div`
  margin: 144px 74px 144px 100px;
  width: 466px;
  height: 490px;

  @media ${deviceSizes.frame} {
    margin: 0;
    width: 100%;
    height: 100%;
  }
`

export const HeadImageContainer = styled.div`
  width: 640px;
  height: 770px;

  @media ${deviceSizes.frame} {
    position: absolute;
    top: 150px;
    width: 375px;
    height: 515px;
  }
`

export const PartnersContainer = styled.div`
  height: 75px;
  margin: 40px 56px 40px 56px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  @media ${deviceSizes.frame} {
    display: none;
  }
`

export const SocialFeedContainer = styled.div`
  background-color: #6424ff;
  width: 1080px;
  margin: 0 auto;
  min-height: 753px;
  max-height: 753px;
  overflow-y: auto;
  overflow-x: hidden;

  @media ${deviceSizes.frame} {
    width: 375px;
    min-height: 1130px;
    max-height: 1130px;
  }
`

export const ArticlesContainer = styled.article`
  width: 1080px;
  height: 552px;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: row;

  @media ${deviceSizes.frame} {
    flex-direction: column;
    width: 375px;
    height: 800px;
    margin-bottom: 0;
  }
`

export const ArticleTextContainer = styled.div`
  width: 654px;
  height: 100%;

  @media ${deviceSizes.frame} {
    width: 90%;
    margin: 0 auto;
  }
`

export const ArticleImgContainer = styled.div`
  width: 426px;
  height: 100%;

  @media ${deviceSizes.frame} {
    width: 100%;
  }
`

export const CallingAdContainer = styled.div`
  width: 100%;
  height: 160px;
  margin-bottom: 83px;
  position: relative;

  @media ${deviceSizes.frame} {
    max-width: 375px;
    height: 222px;
    margin: 0 auto;
    margin-top: 135px;
    margin-bottom: 20px;
  }
`

export const CallTextContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #6424ff;
`

export const CallButtonContainer = styled.div`
  position: absolute;
  z-index: 9;
  top: 117px;
  left: 466px;
  width: 347px;
  height: 86px;

  @media ${deviceSizes.frame} {
    max-width: 375px;
    margin: 0 auto;
    top: 108px;
    left: 14px;
  }
`

export const FooterContainer = styled.footer`
  width: 100%;
  height: 100px;
  background-color: #faf9fc;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  @media ${deviceSizes.frame} {
    max-width: 375px;
    height: 76px;
    margin: 0 auto;
    background-color: #6424ff;
    justify-content: space-between;
  }
`
