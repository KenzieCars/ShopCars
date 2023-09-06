import styled from "styled-components";

export const FilterStyle = styled.div`
  width: 280px;
  padding: 10px;
  button {
    width: 230px;
    border-radius: 4px;
    color: var(--white);
    background-color: var(--primary-color);
    border: none;
    padding: 10px;
    font-family: "Lexend", sans-serif;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
