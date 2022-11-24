import styled from 'styled-components'
import { deviceSizes } from '../../../utils/const'

export const TitleBtn = styled.button`
  height: 100%;
  width: 100%;
  background-color: #ffffff;
  border: none;
  font-family: 'SF Compact Display', sans-serif;
  font-weight: 800;
  font-size: 20px;
  line-height: 23.87px;
  text-align: center;
`

export const AdImage = styled.img`
  height: 100%;
  width: 100%;
`

export const HeaderText1 = styled.h2`
  font-family: 'Raleway', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 16.44px;
  color: #ffffff;

  @media ${deviceSizes.frame} {
    display: none;
  }
`

export const HeaderText2 = styled.h1`
  font-family: 'Raleway', sans-serif;
  font-weight: 900;
  font-size: 50px;
  line-height: 61.75px;
  color: #ffffff;

  @media ${deviceSizes.frame} {
    font-weight: 800;
    font-size: 28px;
    line-height: 37.8px;
    text-align: center;
  }
`

export const HeaderText3 = styled.p`
  font-family: 'Raleway', sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 34px;
  color: #ffffff;

  @media ${deviceSizes.frame} {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
  }
`

export const HeaderCallButton = styled.button`
  background-color: #06f48a;
  width: 347px;
  height: 86px;
  border: none;
  font-family: 'SF Compact Display', sans-serif;
  font-weight: 800;
  font-size: 38px;
  line-height: 45.35px;
  text-align: center;
  color: #ffffff;

  @media ${deviceSizes.frame} {
    width: 293px;
    height: 74px;
    margin-left: 15px;
    margin-right: 15px;
    font-size: 28px;
    line-height: 33.41px;
  }
`
export const HeaderText4 = styled.p`
  font-family: 'Raleway', sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 34px;
  color: #ffffff;

  @media ${deviceSizes.frame} {
    font-weight: 600;
    font-size: 14px;
    line-height: 23.8px;
    text-align: center;
  }
`

export const ArticleText1 = styled.h3`
  font-family: 'Raleway', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 16.44px;
  color: #333333;

  @media ${deviceSizes.frame} {
    font-size: 14px;
    line-height: 16.44px;
    text-align: center;
  }
`
export const ArticleTitle = styled.h2`
  font-family: 'Raleway', sans-serif;
  font-weight: 800;
  font-size: 48px;
  line-height: 64.8px;
  color: #333333;

  @media ${deviceSizes.frame} {
    font-size: 26px;
    line-height: 35.1px;
    text-align: center;
  }
`
export const ArticleText2 = styled.p`
  font-family: 'Raleway', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 30.6px;
  text-align: justify;
  color: #333333;

  @media ${deviceSizes.frame} {
    font-size: 14px;
    line-height: 23.8px;
  }
`

export const CallText = styled.h3`
  position: absolute;
  font-family: 'Raleway', sans-serif;
  font-weight: 700;
  font-size: 35px;
  line-height: 52.5px;
  text-align: center;
  color: #ffffff;
  margin: 0 auto;
  top: 44px;
  left: 204px;

  @media ${deviceSizes.frame} {
    top: 28px;
    left: 3px;
    font-size: 20px;
    line-height: 30px;
  }
`

export const CallBtn = styled.button`
  background-color: #06f48a;
  width: 100%;
  height: 100%;
  border: none;
  font-family: 'SF Compact Display', sans-serif;
  font-weight: 800;
  font-size: 38px;
  line-height: 45.35px;
  text-align: center;
  color: #ffffff;
`

export const FooterImg = styled.div`
  display: none;

  @media ${deviceSizes.frame} {
    display: block;
    width: 69px;
    height: 37px;
    margin-top: 20px;
    margin-left: 30px;
  }
`

export const FooterText1 = styled.span`
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 14.09px;
  color: #333333;
  margin-top: 43px;

  @media ${deviceSizes.frame} {
    color: #ffffff;
    font-size: 18px;
    line-height: 21.48px;
    width: 45%;
    margin-top: 20px;
  }
`
export const FooterText2 = styled.span`
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 14.09px;
  color: #333333;
  margin-top: 43px;

  @media ${deviceSizes.frame} {
    display: none;
  }
`
export const FooterText3 = styled.span`
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 14.09px;
  color: #333333;
  margin-top: 43px;

  @media ${deviceSizes.frame} {
    display: none;
  }
`
