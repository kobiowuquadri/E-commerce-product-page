import React from 'react'

export default function Cart () {
  return (
    <>
      <div className='cart'>
        <p>
          <b>Cart</b>
        </p>
        <hr></hr>
        <div className='empty_cart'>
          <p>Your cart is empty.</p>
        </div>
      </div>
    </>
  )
}
