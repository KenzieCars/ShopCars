import { styled } from "styled-components";

export const ModalHeaderContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: .7rem;

  position: absolute;
  top: 87px;
  right: 28px;

  padding: 1rem;

  border-radius: 6px;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  transform: translateY(100%);
  opacity: 1;

  transition: transform 0.3s ease, opacity 0.3s ease;

  backdrop-filter: blur(19px); /* Ajuste o valor conforme desejado */
  background: rgba(255, 255, 255, 0.8);
`

export const ModalItem = styled.li`
  color: var(--gray);

  cursor: pointer;
  font-size: .8rem;
  
  &:hover {
    color: var(--black);
  }
`