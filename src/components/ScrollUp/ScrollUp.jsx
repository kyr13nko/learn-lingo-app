import { useEffect, useState } from "react";

import { FaAngleDoubleUp } from "react-icons/fa";
import { StyledScrollUp } from "./ScrollUp.styled";

const ScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 800);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      if (isVisible) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <StyledScrollUp onClick={scrollToTop}>
          <FaAngleDoubleUp />
        </StyledScrollUp>
      )}
    </>
  );
};

export default ScrollUp;
