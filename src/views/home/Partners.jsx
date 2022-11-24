import React from 'react'

import ForbesImg from '../../img/forbes.svg'
import TimesImg from '../../img/times.svg'
import TelegraphImg from '../../img/thelegraph.svg'
import GuardianImg from '../../img/guardian.svg'
import UsaTodayImg from '../../img/usaToday.svg'

import { PartnersContainer } from './styled/containers'

export const Partners = () => {
  return (
    <PartnersContainer>
      <img src={ForbesImg} />
      <img src={TimesImg} />
      <img src={TelegraphImg} />
      <img src={GuardianImg} />
      <img src={UsaTodayImg} />
    </PartnersContainer>
  )
}
