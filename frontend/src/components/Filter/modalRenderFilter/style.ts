import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  width: 300px;
  max-width: 400px;
  position: relative;

  max-height: calc(100% - 40px);
  overflow-y: auto;
  justify-content: center;
  align-items: center;
  button {
    width: 240px;
    border-radius: 4px;
    color: #f6f6f6;
    background-color: #5126ea;
    border: none;
    padding: 10px;
    font-family: "Lexend", sans-serif;
  }
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
