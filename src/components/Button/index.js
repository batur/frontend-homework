import React from 'react'

function Button({ children, type, ...props }) {
  return (
    <button type="button" className={`btn ${type}`} {...props}>
      {children}
    </button>
  )
}

export default Button
