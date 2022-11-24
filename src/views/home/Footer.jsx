import React from 'react'

import { ReactComponent as Logo } from '../../img/logo1.svg'
import { FooterImg, FooterText1, FooterText2, FooterText3 } from './styled/components'
import { FooterContainer } from './styled/containers'

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterImg>
        <Logo preserveAspectRatio="none" style={{ width: '100%', height: '100&' }} />
      </FooterImg>
      <FooterText1>©2019 Tidal Traffic. All rights reserved.</FooterText1>
      <FooterText2>©2019 Tidal Traffic. All rights reserved.</FooterText2>
      <FooterText3>About Us | Terms of Service | Privacy Policy</FooterText3>
    </FooterContainer>
  )
}
