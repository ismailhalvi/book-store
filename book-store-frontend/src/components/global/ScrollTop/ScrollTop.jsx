import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa6'
import './ScrollStyle.css'

function ScrollTop() {

  const [show, setShow] = useState(false)

  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShow(true)
      } else {
        setShow(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }

  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <>
      {show && (
        <button className="scroll-top" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}
    </>
  )
}

export default ScrollTop