import styled from "styled-components";

export const TrialWrapper = styled.div`
  overflow: auto;

  &::-webkit-scrollbar {
    width: 0.1rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--color-secondary);
    border-radius: 0.625rem;
  }
`;

export const TeacherWrapper = styled.div`
  display: flex;
  gap: 0.875rem;
`;

export const ImageWrapper = styled.div`
  flex-shrink: 0;

  width: 2.75rem;
  height: 2.75rem;

  & img {
    border-radius: 50%;
  }
`;

export const Content = styled.div`
  & p {
    font-size: 12px;
    line-height: 133%;

    color: var(--color-grey);
  }
`;

export const Options = styled.div`
  margin: 2.5rem 0 2.5rem;

  & h3 {
    font-size: 1.5rem;
    line-height: 1.33;

    margin-bottom: 1.25rem;
  }
`;

export const RadioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StyledRadioButton = styled.input.attrs({ type: "radio" })`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  outline: none;
  display: none;

  + label {
    display: inline-block;
    position: relative;

    font-weight: 400;
    line-height: 1, 37;

    padding-left: 1.75rem;
    cursor: pointer;
  }

  + label:before {
    content: "";
    display: inline-block;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 1.25rem;
    height: 1.25rem;
    border: 0.1563rem solid var(--color-black-20);
    border-radius: 50%;
  }

  &:checked + label:before {
    border-color: var(--color-primary);
  }

  + label:after {
    content: "";
    display: inline-block;
    position: absolute;
    left: 0.3125rem;
    top: 50%;
    transform: translateY(-50%);
    width: 0.625rem;
    height: 0.625rem;
    border-radius: 50%;
    background-color: var(--color-primary);
    display: none;
  }

  &:checked + label:after {
    display: block;
  }
`;
