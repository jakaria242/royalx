import React from 'react'

const Button = ({className, text, style}) => {
  return (
    <button style={style} className={className}>
    {text}
  </button>
  )
}

export default Button