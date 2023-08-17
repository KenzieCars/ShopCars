import { styled } from "styled-components";

export const ProductMainContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 1rem;

  @media (min-width: 768px) {
    padding: 1.7rem 8rem;
  }
`