import AppBar from "./AppBar/AppBar";
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
      </HeaderContainer>
    </StyledHeader>
  );
};

export default Header;
