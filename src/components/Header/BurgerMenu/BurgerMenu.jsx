import { useEffect } from "react";

import AppBar from "../AppBar/AppBar";
import Navigation from "../Navigation/Navigation";

import sprite from "../../../assets/images/sprite.svg";
import { BurgerContainer, Overlay, CloseIcon } from "./BurgerMenu.styled";

const BurgerMenu = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isOpen]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <>
      <Overlay $isOpen={isOpen} onClick={handleBackdropClick} />
      <BurgerContainer $isOpen={isOpen}>
        <CloseIcon type="button" onClick={onClose}>
          <svg>
            <use href={`${sprite}#close`} />
          </svg>
        </CloseIcon>
        <Navigation onClose={onClose} />
        <AppBar value="burger" />
      </BurgerContainer>
    </>
  );
};

export default BurgerMenu;
