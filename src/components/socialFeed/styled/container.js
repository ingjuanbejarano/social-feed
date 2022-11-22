import styled from 'styled-components';

import { deviceSizes } from '../../../utils/const';

export const FeedContainer = styled.div`
  background-color: #6424ff;
  height: 80%;
  width: 1080px;
  margin: 5% auto;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: auto;

  @media ${deviceSizes.laptop} {
    max-width: 90%;
  }
`;
