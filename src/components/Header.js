import React, { useState } from 'react'
import hamburger from '../images/icon-menu.svg'
import logo from '../images/logo.svg'
import avatar from '../images/image-avatar.png'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import close_menu_black from '../images/icon-close_white.svg'
import '../index.css'
import Cart from './Cart'

function Header () {
  let [toggle, updateToggle] = useState(false)
  let [showCart, removeCart] = useState(false)
  return (
    <>
      <div id='navcard' className={toggle && 'show'}>
        <img
          id='close'
          onClick={() => updateToggle(false)}
          src={close_menu_black}
        ></img>
        <ul>
          <li>
            <a href='#'>Collections</a>
          </li>
          <li>
            <a href='#'>Men</a>
          </li>
          <li>
            <a href='#'>Women</a>
          </li>
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
        </ul>
      </div>
      <header>
        <nav>
          <img
            id='hamburger'
            onClick={() => updateToggle(true)}
            src={hamburger}
          ></img>
          <img src={logo} alt='logo'></img>
          <ul>
            <li>
              <a href='#'>Collections</a>
            </li>
            <li>
              <a href='#'>Men</a>
            </li>
            <li>
              <a href='#'>Women</a>
            </li>
            <li>
              <a href='#'>About</a>
            </li>
            <li>
              <a href='#'>Contact</a>
            </li>
          </ul>
        </nav>
        <div className='flex'>
          <AiOutlineShoppingCart id='cart_image' onClick={() => removeCart(!showCart)} />
          {showCart && <Cart/>}
          <img src={avatar} id='avatar_img' alt='avatar'></img>
        </div>
      </header>
    </>
  )
}

export default Header
