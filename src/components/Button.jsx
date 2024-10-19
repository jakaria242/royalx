import React from 'react'

const Button = ({className, text}) => {
  return (
    <button className={className}>
    {text}
  </button>
  )
}

export default Button