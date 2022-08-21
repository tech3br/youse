import Styles from './spinner-styles.scss'

import React from 'react'

type Props = React.HTMLAttributes<HTMLElement> & {
  isNegative?: boolean
  className?: string
}

const Spinner: React.FC<Props> = ({ isNegative, className, ...props }: Props) => {
  const negativeClass = isNegative ? Styles.negative : ''
  return (
    <div {...props} data-testid="spinner" className={[Styles.spinner, negativeClass, className].join(' ')}>
      <div /><div /><div /><div />
    </div>
  )
}

export default Spinner
