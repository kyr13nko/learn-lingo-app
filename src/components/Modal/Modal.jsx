import { useEffect } from "react";
import { createPortal } from "react-dom";

import sprite from "../../assets/images/sprite.svg";
import { CloseIcon, ModalStyled, Overlay, Text, Title } from "./Modal.styled";

const modalRoot = document.getElementById("modal-root");

const Modal = ({ title, text, onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "visible";
    };
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalStyled>
        <CloseIcon onClick={onClose}>
          <svg>
            <use href={`${sprite}#close`} />
          </svg>
        </CloseIcon>
        <Title>{title}</Title>
        <Text>{text}</Text>
        {children}
      </ModalStyled>
    </Overlay>,
    modalRoot
  );
};

export default Modal;
