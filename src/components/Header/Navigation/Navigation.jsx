import { Nav, StyledLink } from "./Navigation.styled";

const Navigation = () => {
  return (
    <Nav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/teachers">Teachers</StyledLink>
      <StyledLink to="/favorites">Favorites</StyledLink>
    </Nav>
  );
};

export default Navigation;
