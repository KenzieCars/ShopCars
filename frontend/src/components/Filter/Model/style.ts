import styled from "styled-components";

export const ModelCarsWrapper = styled.div`
  max-height: 300px;
  overflow-y: auto;
  position: relative; /* Adicione isso para estabelecer um novo contexto de posicionamento */

  .select-header {
    font-weight: bold;
    font-family: "Lexend", sans-serif;
    color: var(--white);
    margin: 10px 0;
    font-size: 20px;
    position: sticky; /* Fixar o elemento no topo */
    top: 0;/* Fixar no topo do contêiner */
    background-color: var(--black); /* Cor de fundo para esconder atrás das opções */
    z-index: 1; /* Garantir que apareça acima das opções */
  }

  .scrollbar-custom {
     ::-webkit-scrollbar {
      width: 3px; /* Largura da barra de rolagem vertical */
      height: 3px; /* Altura da barra de rolagem horizontal */
    }

    /* Para navegadores baseados em Chromium (Google Chrome, Microsoft Edge, etc.) */
    ::-webkit-scrollbar-thumb {
      background-color: var(--light-gray); /* Cor do "polegar" da barra de rolagem (a parte que o usuário arrasta) */
      border-radius: 6px; /* Raio de borda para o "polegar" */
    }

    /* Para navegadores baseados em Chromium (Google Chrome, Microsoft Edge, etc.) */
    ::-webkit-scrollbar-thumb:hover {
      background-color: var(--light-gray); /* Cor do "polegar" da barra de rolagem ao passar o mouse */
    }

    /* Para navegadores baseados em Firefox */
    /* Apenas para personalização básica */
    scrollbar-color: var(--light-gray) transparent;
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
