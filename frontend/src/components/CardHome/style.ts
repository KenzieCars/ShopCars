import { styled } from "styled-components";

export const CardContainer = styled.li`
  display: flex;
  flex-direction: column;

  width: 250px;

  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  background: var(--white);

  border-radius: 12px;

  flex-shrink: 0;

  @media (min-width: 768px) {
    width: 282px;
  }
`;

export const FigureContainer = styled.figure`
  > img {
    width: 100%;
    border-radius: 12px 12px 0 0;
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  padding: 1rem;

  > h3 {
    font-size: 0.8rem;
    color: var(--black);
  }

  > p {
    font-size: 0.7rem;
    color: var(--gray);
  }

  @media (min-width: 768px) {
    gap: 0.7rem;

    > h3 {
      font-size: 1rem;
    }

    > p {
      font-size: 0.8rem;
    }
  }
`;

export const ContactUserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  :nth-child(1) {
    border-radius: 50%;

    background-color: var(--blue);

    padding: 0.4rem 0.7rem;

    font-size: 0.7rem;

    color: var(--white);
  }

  :nth-child(2) {
    font-size: 0.7rem;
    color: var(--gray);
  }

  @media (min-width: 768px) {
    :nth-child(1),
    :nth-child(2) {
      font-size: 0.83rem;
    }
  }
`;

export const ContainerInfoCar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    gap: 0.4rem;

    > span {
      background: var(--primary-color);

      border-radius: 6px;

      opacity: 0.7;

      padding: 0.4rem;
      font-size: 0.7rem;
      color: var(--white);
      display: flex;
      align-items: center;

      @media (min-width: 768px) {
        font-size: 0.8rem;
      }
    }
  }

  > span {
    font-size: 0.9rem;
    font-weight: 700;

    color: var(--gray);
  }
`;