import { NavLink } from "react-router-dom";

import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 1.75rem;
  }
`;

export const StyledLink = styled(NavLink)`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;

  transition: var(--transition);

  &:hover {
    color: var(--color-primary);
  }

  &.active {
    color: var(--color-primary);
  }
`;
