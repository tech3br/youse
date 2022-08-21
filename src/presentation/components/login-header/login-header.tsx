import Styles from './login-header-styles.scss'
import { Logo } from '@/presentation/components'

import React, { memo } from 'react'

const LoginHeader: React.FC = () => {
  return (
    <header className={Styles.headerWrap}>
      <Logo />
      <h1>Youse - Encontre um imóvel fácil</h1>
    </header>
  )
}

export default memo(LoginHeader)
