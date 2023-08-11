import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const MainContainerHome = styled.main`
  display: flex;
  /* flex-direction: column; */
  gap: 1rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

export const BannerContainer = styled.section`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3); // Cor escura com opacidade
    z-index: 5;
  }

  @media (min-width: 768px) {
    height: 34rem;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;

  padding: 2.8rem;

  position: absolute;

  z-index: 6;

  > h1,
  p {
    color: var(--white);
  }

  > h1 {
    font-size: 1.7rem;
  }

  > p {
    font-size: 1.1rem;
  }

  @media (min-width: 768px) {
    top: 30%;
    right: 30%;

    padding: 3rem;

    > h1 {
      font-size: 4.6rem;
    }

    > p {
      font-size: 1.2rem;
    }
  }
`;

export const ListCardContainer = styled.ul`
  display: flex;
  gap: 1rem;

  overflow-x: auto;

  padding: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;

    margin-top: 1.4rem;

    gap: 1.4rem;

    justify-content: flex-end;
  }
`;

export const NextButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  align-items: center;
  justify-content: center;

  padding: 1rem;

  > span {
    color: var(--gray);
    font-size: 0.8rem;
    font-weight: 600;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 2rem;

    padding: 3.7rem;

    > span {
      font-size: 1rem;
    }
  }
`;

export const ButtonNext = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  font-size: 0.8rem;
  font-weight: 600;

  :nth-child(1) {
    font-size: 1.2rem;
  }

  @media (min-width: 768px) {
    font-size: 1rem;

    :nth-child(1) {
      font-size: 1.4rem;
    }
  }
`;
