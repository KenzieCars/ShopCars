import styled from "styled-components";

export const CustomSelect = styled.div`
  color: var(--white);
  
  .select-header {
    color: var(--black);
    font-weight: bold;
    font-family: "Lexend", sans-serif;
    margin: 10px 0 10px 0;
    font-size: 20px;
  }
  
  .options {
    display: flex;
    flex-direction: column;
    font-family: "Lexend", sans-serif;
  }
  
  .option {
    color: #868e96;
    cursor: pointer;
    margin-left: 10px;
    transition: color 0.3s ease;

    &.selected {
      color: #0077b5;
    }
  }

  .selected-option {
    margin-top: 10px;
    font-style: italic;
    color: #0077b5;
  }
`;
