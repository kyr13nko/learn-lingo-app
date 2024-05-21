import AppBar from "./AppBar/AppBar";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";

import { HeaderContainer, StyledHeader } from "./index.styled";

const Header = () => {
  return (
    <StyledHeader>
      <HeaderContainer>
        <Logo />
        <Navigation />
        <AppBar />
        <BurgerMenu />
      </HeaderContainer>
    </StyledHeader>
  );
};

export default Header;
