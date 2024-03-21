import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";

import { StyledHeader } from "./index.styled";

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Navigation />
    </StyledHeader>
  );
};

export default Header;
