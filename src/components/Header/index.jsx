import { useState } from "react";

import AppBar from "./AppBar/AppBar";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";

import sprite from "../../assets/images/sprite.svg";
import { BurgerIcon, ContentWrapper, HeaderContainer, StyledHeader } from "./index.styled";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <StyledHeader>
      <HeaderContainer>
        <Logo />
        <ContentWrapper>
          <Navigation />
        </ContentWrapper>
        <ContentWrapper>
          <AppBar />
        </ContentWrapper>
        <BurgerIcon type="button" onClick={handleMenuOpen}>
          <svg>
            <use href={`${sprite}#burger`} />
          </svg>
        </BurgerIcon>
      </HeaderContainer>
      <BurgerMenu isOpen={isMenuOpen} onClose={handleMenuOpen} />
    </StyledHeader>
  );
};

export default Header;
