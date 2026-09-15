import React, { useEffect, useRef, useState } from "react";
import "./ScrollReveal.css";

function ScrollReveal({ children }) {
  const [visible, setVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisible(true);
        observer.unobserve(elementRef.current);
      }
    });

    observer.observe(elementRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={visible ? "scroll-reveal visible" : "scroll-reveal"}
    >
      {children}
    </div>
  );
}

export default ScrollReveal;