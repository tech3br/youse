import Styles from './footer-styles.scss'

import React, { memo } from 'react'

const Footer: React.FC = () => {
  return (
    <footer className={Styles.footer}>
      <a href='#'>Termos de Uso</a>
    </footer>
  )
}

export default memo(Footer)
