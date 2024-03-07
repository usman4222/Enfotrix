import React from 'react'
const Button = ({bgColor,btnText}) => {
  return (
    <button className={`${bgColor} rounded-3xl px-4 py-2`}>
            {btnText}
    </button>
  )
}

export default Button