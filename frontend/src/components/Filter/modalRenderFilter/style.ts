import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 50px; /* Adicione a margem do topo desejada */
  left: 0;
  width: 100%;
  height: 87%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center; /* Centralizado no eixo x */
  align-items: flex-start;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  width: 250px;
  position: relative;

  /* Adicione um scroll vertical ao conteúdo */
  max-height: calc(100% - 40px); /* Ajuste conforme necessário */
  overflow-y: auto;
`;

export const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
`;

export const Title = styled.h4`
  margin-bottom: 10px;
  margin: -10px 0 0 0;
`;
