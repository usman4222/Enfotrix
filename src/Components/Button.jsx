import React from 'react'
const Button = ({bgColor,btnText}) => {
  return (
    <button className={`${bgColor} rounded-3xl px-5 py-1 font-semibold uppercase text-2xl`}>
            {btnText}
    </button>
  )
}

export default Button