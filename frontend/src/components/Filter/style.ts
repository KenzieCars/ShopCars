import styled from "styled-components";

export const FilterStyle = styled.div`
  width: 300px;
  padding: 10px;
  button {
    width: 250px;
    border-radius: 4px;
    color: #f6f6f6;
    background-color: #5126ea;
    border: none;
    padding: 10px;
    font-family: "Lexend", sans-serif;
  }
`;

export const ButtonFilter = styled.button`
  @media (min-width: 768px) {
    display: none;
  }
`;
