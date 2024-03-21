import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";
import UserMenu from "./UserMenu/UserMenu";

import { HeaderContainer, StyledHeader } from "./index.styled";

const Header = () => {
  return (
    <StyledHeader>
      <HeaderContainer>
        <Logo />
        <Navigation />
        <UserMenu />
      </HeaderContainer>
    </StyledHeader>
  );
};

export default Header;
