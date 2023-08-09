import styled from "styled-components";

export const FilterStyle = styled.div`
  width: 280px;
  padding: 10px;
  button {
    width: 230px;
    border-radius: 4px;
    color: #f6f6f6;
    background-color: #5126ea;
    border: none;
    padding: 10px;
    font-family: "Lexend", sans-serif;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
