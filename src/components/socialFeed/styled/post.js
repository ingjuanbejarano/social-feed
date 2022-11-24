import styled from 'styled-components'

import { deviceSizes } from '../../../utils/const'

export const PostContainer = styled.div`
  background-color: #ffffff;
  box-sizing: border-box;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 30px;
  margin-bottom: 10px;
  border-radius: 8px;
  border: 1px solid #e6e6e6;
  padding: 30px 25px 30px 25px;

  @media ${deviceSizes.mobileL} {
    font-size: 16px;
    line-height: 24px;
  }

  @media ${deviceSizes.tablet} {
    padding: 10px 10px 10px 25px;
  }
`

export const PostedDate = styled.span`
  font-family: 'Raleway', sans-serif;
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
  margin-left: 30px;
  margin-bottom: 30px;

  @media ${deviceSizes.mobileL} {
    font-size: 16px;
    line-height: 24px;
  }
`

export const PostText = styled.p`
  font-family: 'Raleway', sans-serif;
  color: #000000;
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 0;

  @media ${deviceSizes.mobileL} {
    font-size: 13px;
    line-height: 19.5px;
  }
`

export const PostAuthor = styled.span`
  font-family: 'Raleway', sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
  color: #6424ff;
`
