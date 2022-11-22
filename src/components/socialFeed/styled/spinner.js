import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  0% {
      transform: rotate(0deg);
  }
  100% {
      transform: rotate(360deg);
  }
`;
export const Spinner = styled.span`
  width: 48px;
  height: 48px;
  margin: auto;
  border: 5px solid #fff;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: ${animation} 1s linear infinite;
`;
