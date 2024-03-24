import { useAuth } from "../../../hooks/useAuth";

import { Nav, StyledLink } from "./Navigation.styled";

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/teachers">Teachers</StyledLink>
      {isLoggedIn && <StyledLink to="/favorites">Favorites</StyledLink>}
    </Nav>
  );
};

export default Navigation;
