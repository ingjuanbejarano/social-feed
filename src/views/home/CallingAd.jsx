import React from 'react'
import { CallBtn, CallText } from './styled/components'
import { CallButtonContainer, CallingAdContainer, CallTextContainer } from './styled/containers'

export const CallingAd = () => {
  return (
    <CallingAdContainer>
      <CallTextContainer>
        <CallText>Find Out YOUR Online Advertising Readiness Rating!</CallText>
      </CallTextContainer>
      <CallButtonContainer>
        <CallBtn>START QUIZ</CallBtn>
      </CallButtonContainer>
    </CallingAdContainer>
  )
}
