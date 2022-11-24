import styled from 'styled-components'

import { deviceSizes } from '../../../utils/const'

export const FeedContainer = styled.div`
  background-color: #6424ff;
  height: 100%;
  width: 1080px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: auto;

  @media ${deviceSizes.frame} {
    max-width: 90%;
  }
`
