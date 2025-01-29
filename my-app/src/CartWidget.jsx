import React from 'react'
import CartIcon from './Components/CartWidget/CartIcon.png'


export const CartWidget = () => {
  return (
    <div className="relative flex items-center">
    <img src={CartIcon} alt="Carrito" className="w-6 h-6" />
    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
      3
    </span>
  </div>

  )
}
