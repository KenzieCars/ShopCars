import { styled } from "styled-components";

export const MainContainerProfile = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 1rem;

  @media (min-width: 768px) {
    padding: 1.7rem 8rem;
  }
`

export const CardListProfile = styled.ul`
  display: flex;
  gap: 1rem;
  overflow-x: auto;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    width: 100%;
    padding: 3rem 0;
    overflow-x: visible;
  }
`