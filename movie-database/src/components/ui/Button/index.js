import styled from "styled-components";

const Button = styled.button`
  background-color: #fff;
  border: 1px solid #e50914;
  border-radius: 3px;
  color: #e50914;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 1em;
  padding: 0.25em 1em;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #e50914;
    color: #fff;
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    background-color: #ccc;
    border-color: #ccc;
    color: #fff;
    cursor: not-allowed;
  }

  /* Variant */
  background-color: ${({ variant }) => colors[variant] || colors["primary"]};

  /* Full */
  ${(props) =>
    props.full &&
    css`
      display: block;
      width: 100%;
    `}
`;

export default Button;
