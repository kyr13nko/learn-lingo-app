import { useAuth } from "../../../hooks/useAuth";

import { Nav, StyledLink } from "./Navigation.styled";

const Navigation = ({ onClose }) => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      <StyledLink to="/" onClick={onClose}>
        Home
      </StyledLink>
      <StyledLink to="/teachers" onClick={onClose}>
        Teachers
      </StyledLink>
      {isLoggedIn && (
        <StyledLink to="/favorites" onClick={onClose}>
          Favorites
        </StyledLink>
      )}
    </Nav>
  );
};

export default Navigation;
