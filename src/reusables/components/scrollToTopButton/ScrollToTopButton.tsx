import React, { useState } from 'react';
import { ScrollToTopProps } from '../types';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const ScrollToTopButton: React.FC<ScrollToTopProps> = (props) => {
  const { offset, render } = props;

  const [showScroll, setShowScroll] = useState<boolean>(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > offset) {
      setShowScroll(true); // Display the Scroll-To-Top Button
    } else if (showScroll && window.pageYOffset <= offset) {
      setShowScroll(false); // Make the button disappear
    }
  };

  window.addEventListener('scroll', checkScrollTop);

  return showScroll ? <>{render(scrollToTop)}</> : null;
};

export default ScrollToTopButton;
