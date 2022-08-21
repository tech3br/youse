import Styles from './input-styles.scss'

import React, { useRef } from 'react'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  state: any
  setState: any
  name?: string
  placeholder?: string
}

const Input: React.FC<Props> = ({ state, setState, name, ...props }: Props) => {
  const inputRef = useRef<HTMLInputElement>()
  const error: string = state[`${name}Error`]
  return (
    <div data-testid={`${name}-wrap`} className={Styles.inputWrap} data-status={error ? 'invalid' : 'valid'}>
      <input
        {...props}
        ref={inputRef}
        title={error}
        placeholder=" "
        data-testid={name}
        readOnly
        onFocus={e => { e.target.readOnly = false }}
        onChange={e => { setState({ ...state, [e.target.name]: e.target.value }) }}
      />
      <label data-testid={`${name}-label`} onClick={() => { inputRef.current.focus() }} title={error}>
        {props.placeholder}
      </label>
    </div>
  )
}

export default Input
