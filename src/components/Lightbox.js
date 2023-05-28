import React from "react";
import close_menu from "../images/icon-close.svg"
import { useState } from 'react'
import { data } from "../data";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

function Lightbox ({showLightbox, setShowLightBox}) {
    const products = data
    const [value, setValue] = useState(0)
    const [slideIndex, setSlideIndex] = useState(0)
  
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
  
    return (
      <>
        <div className='lightbox'>
        <div className='images_sec lightbox_image'>
          <img id='close_menu' onClick={() => setShowLightBox(false)} src={close_menu}></img>
            <div className='main_image full'>
              <img src={products[slideIndex].mainImage} alt=''></img>
              <ul className='next'>
                <li>
                  <button onClick={previousSlide} style={{display:'block', left:'-20px'}} id='left' className='btns'>
                    <FaChevronLeft />
                  </button>
                </li>
  
                <li>
                  <button onClick={nextSlide} style={{display:'block', right:'-20px'}} id='right' className='btns'>
                    <FaChevronRight />
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
  
        </div>
      </>
    )
  }

export default Lightbox;