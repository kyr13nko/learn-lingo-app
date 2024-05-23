import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 24px;

  border: 2px dashed var(--color-primary);
  border-radius: 1.875rem;

  padding: 40px 32px;
`;

export const Item = styled.li`
  display: flex;
  gap: 16px;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.29;
  letter-spacing: -0.02em;

  width: 74px;

  color: var(--color-black-70);
`;

export const Span = styled.span`
  font-weight: 500;
  font-size: 1.75rem;
  line-height: 1.14;
  letter-spacing: -0.02em;
  white-space: nowrap;

  color: var(--color-black);
`;
