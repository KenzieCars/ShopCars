import styled from "styled-components";

export const ModelCarsWrapper = styled.div`
  max-height: 300px;
  overflow-y: auto;
  position: relative; /* Adicione isso para estabelecer um novo contexto de posicionamento */

  .select-header {
    font-weight: bold;
    font-family: "Lexend", sans-serif;
    margin: 10px 0;
    font-size: 20px;
    position: sticky; /* Fixar o elemento no topo */
    top: 0; /* Fixar no topo do contêiner */
    background-color: white; /* Cor de fundo para esconder atrás das opções */
    z-index: 1; /* Garantir que apareça acima das opções */
  }

  .options {
    display: flex;
    flex-direction: column;
    font-family: "Lexend", sans-serif;
    overflow-y: auto;
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
`;
