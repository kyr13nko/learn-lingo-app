import { useAuth } from "../../../hooks/useAuth";

import { Nav, NavWrapper, StyledLink } from "./Navigation.styled";

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavWrapper>
      <Nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/teachers">Teachers</StyledLink>
        {isLoggedIn && <StyledLink to="/favorites">Favorites</StyledLink>}
      </Nav>
    </NavWrapper>
  );
};

export default Navigation;
