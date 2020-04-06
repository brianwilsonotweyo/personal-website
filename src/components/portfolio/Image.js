import React, { useState, useEffect, useRef } from "react"
import styles from "./portfolio.module.scss"

const Image = ({ thumb, name }) => {
  const imageRef = useRef(null);
  const placeholder = "/img/placeholder.jpg";
  const [isLoading, setIsLoading] = useState(true);
  const [inView, setInView] = useState(false);

  const isInView = () => {
	  if(imageRef.current) {
		  const rect = imageRef.current.getBoundingClientRect();
		  //return rect.top >= 0 && rect.bottom <= window.innerHeight;
		  return rect.bottom <= window.innerHeight;
	  }
	  return false;
  }

  const scrollHander = () => {
	  setInView(() => {
		  return isInView()
	  })
  }

  useEffect(() => {
	window.addEventListener("scroll", scrollHander)
	setIsLoading(false);
	setInView(isInView())
    return () => {
      window.removeEventListener("scroll", scrollHander)
    }
  }, [isLoading])

  return (
    isLoading ? null : <img
      src={ inView ? thumb : placeholder}
      alt={name}
      className={styles.p__itemThumb}
	  ref={imageRef}
	  width="400" height="246"
    />
  )
}

export default Image
