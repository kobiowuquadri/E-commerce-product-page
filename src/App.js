import React from 'react'
import './index.css'
import { useState } from 'react'
import { data } from './data'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import minus from './images/icon-minus.svg'
import plus from './images/icon-plus.svg'
import Header from './components/Header'
import Lightbox from './components/Lightbox'



function App () {
  const products = data
  const [value, setValue] = useState(0)
  const [count, setCount] = useState(0)
  const [slideIndex, setSlideIndex] = useState(0)
  const [showLightbox, setShowLightBox] = useState(false)

  const nextSlide = () => {
    setSlideIndex(prevIndex => (prevIndex + 1) % data.length)
  }

  const previousSlide = () => {
    setSlideIndex(prevIndex => (prevIndex - 1 + data.length) % data.length)
  }

  const handleThumbnailClick = index => {
    setSlideIndex(index)
    setValue(index)
  }

  const increament = () => {
    setCount(count + 1)
  }
  const decreament = () => {
    setCount(count - 1)
  }

  return (
    <>
      <Header />
      
      {showLightbox && (<Lightbox showLightbox={showLightbox} setShowLightBox={setShowLightBox}  />)}
      <main>
        <div className='images_sec'>
          <div className='main_image'>
            <img  src={products[slideIndex].mainImage} onClick={() => setShowLightBox(true)}  alt=''></img>
            <ul className='next'>
              <li>
                <button onClick={previousSlide} id='left' className='btns'>
                  <FaChevronLeft />
                </button>
              </li>

              <li>
                <button onClick={nextSlide} id='right' className='btns'>
                  <FaChevronRight />{' '}
                </button>
              </li>
            </ul>
          </div>

          <div className='thumbnail_images'>
            {products.map((product, index) => (
              <ul key={product.id}>
                <li
                  onClick={() => handleThumbnailClick(index)}
                  className={index === value && 'border_image'}
                >
                  <img src={product.thumbnail} alt='' />
                </li>
              </ul>
            ))}
          </div>
        </div>

        <div className='sneaker_company'>
          <div className='sneaker_main'>
            <h2>Sneaker Company</h2>
            <h1>Fall Limited Edition Sneakers</h1>
            <p>
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </p>
          </div>
          <div className='price'>
            <ul>
              <li>$125.00</li>
              <li>50%</li>
            </ul>

            <p>$250.00</p>
          </div>
          <div className='counter'>
            <ul>
              <li onClick={decreament}>
                <img src={minus} />
              </li>
              <li>{count}</li>
              <li onClick={increament}>
                <img src={plus} />
              </li>
            </ul>
            <button id='btn'>
              {<AiOutlineShoppingCart id='cart' />}Add to cart
            </button>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
