import styled from "styled-components";
import { Button } from "../../../styles/GlobalStyles";

export const Item = styled.li`
  display: flex;
  gap: 3rem;

  background-color: var(--color-white);
  border-radius: 1.5rem;

  padding: 1.5rem;
`;

export const ImageWrapper = styled.div`
  flex-shrink: 0;

  position: relative;

  width: 7.5rem;
  height: 7.5rem;

  border: 3px solid var(--color-avatar);
  border-radius: 6.25rem;
`;

export const Online = styled.div`
  position: absolute;
  top: 1rem;
  right: 1.125rem;

  width: 0.75rem;
  height: 0.75rem;

  background-color: var(--color-green);

  border: 2px solid var(--color-white);
  border-radius: 50%;
`;

export const Image = styled.img`
  border: 8px solid transparent;
  border-radius: 50%;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  position: relative;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;

  position: absolute;
  right: 0;
`;

export const InfoList = styled.ul`
  display: flex;
  gap: 2rem;

  line-height: 1.5;

  & li {
    display: flex;
    align-items: center;
    gap: 8px;

    position: relative;
  }
  & li:not(:first-child)::before {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: -1rem;
    transform: translateY(-50%);
    width: 1px;
    height: 16px;
    background-color: var(--color-black-20);
  }

  & li span {
    color: var(--color-green);
  }

  & li svg {
    width: 16px;
    height: 16px;
  }
`;

export const InfoButton = styled.button`
  border: none;
  background-color: transparent;

  & svg {
    width: 1.625rem;
    height: 1.625rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  line-height: 1.5;
`;

export const Text = styled.span`
  color: var(--color-grey);
`;

export const TeacherName = styled.h2`
  font-size: 24px;
  line-height: 1;

  margin-bottom: 1.5rem;
`;

export const Upper = styled.span`
  text-decoration: underline;
  text-decoration-skip-ink: none;
`;

export const ReadMoreButton = styled.button`
  align-self: flex-start;

  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  text-decoration: underline;
  text-decoration-skip-ink: none;

  border: none;

  color: var(--color-black);

  transition: var(--transition);

  &:hover {
    color: var(--color-primary);
  }
`;

export const LevelsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  margin-top: 1rem;

  & li:first-child {
    border: 1px solid transparent;
    background-color: var(--color-primary);
  }

  & li {
    border: 1px solid var(--color-black-20);
    border-radius: 2.1875rem;
    padding: 0.5rem 0.75rem;
  }
`;

export const ReadMoreContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Exp = styled.p`
  font-weight: 400;
  line-height: 1.5;
`;

export const ReviewerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Reviewer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const Avatar = styled.div`
  font-size: 20px;
  line-height: 1;
  width: 44px;
  height: 44px;
  color: var(--color-primary);
  background-color: var(--color-secondary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ReviewerInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;

  & div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  & div svg {
    width: 1rem;
    height: 1rem;
  }

  & div p {
    font-size: 0.875rem;
    line-height: 1.29;
  }
`;

export const TrialButton = styled(Button)`
  align-self: flex-start;

  padding: 1rem 3rem;
  margin-top: 1rem;
`;