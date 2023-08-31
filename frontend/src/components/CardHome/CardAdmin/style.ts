import { styled } from "styled-components";

export const CardContainer = styled.li`
  display: flex;
  flex-direction: column;

  width: 244px;

  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  background: var(--white);

  border-radius: 12px;

  flex-shrink: 0;

  position: relative;

  @media (min-width: 768px) {
    width: 262px;
    height: fit-content;
    max-height: fit-content;
  }
`;

export const FigureContainer = styled.figure`
  > img {
    width: 100%;
    height: 152px;

    object-fit: cover;

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

  > h3.truncated-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  }

  > p {
    font-size: 0.7rem;
    color: var(--gray);
    height: 90px;
    line-height: 150%;
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

    display: flex;
    align-items: center;
    justify-content: center;

    width: 26px;
    height: 26px;

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

export const FlagGoodDeal = styled.div`
  display: flex;
  align-items: center;

  position: absolute;
  top: -10px;
  right: -10px;

  border-radius: 50%;

  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;

  padding: .4rem;

  background: var(--alert-success);

  color: var(--white);
  font-size: 1.2rem;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  > button {
    background: var(--white);
    
    padding: .4rem;

    border: 1px solid var(--light-gray);
    border-radius: 6px;

    transition: .2s ease;

    font-weight: 600;
    color: var(--gray);

    &:hover {
      background: var(--black);
      color: var(--white);
      border: 1px solid var(--black);
    }
  }
`

export const DescriptionWithOverFlowAdm = styled.section`
  > p {
    font-size: .6rem;
    color: var(--gray);
    height: 47px;
    line-height: 150%;

    overflow-y: auto;

  &:before {
    content: '';
    position: absolute;
    bottom: 118px;
    left: 0;
    width: 100%;
    height: 38px; /* Ajuste a altura do degradê conforme necessário */
    background: linear-gradient(transparent, var(--white)); /* Defina as cores do degradê aqui */
  }
}

  @media (min-width: 768px) {
    gap: 0.7rem;

    > h3 {
      font-size: 1rem;
    }

    > p {
      font-size: .74rem;

      &:before {
        bottom: 132px;
      }
    }
  }
`

export const FlagNotAvailable = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;

  background: var(--black);

  border-radius: 15px;

  padding: .3rem .8rem;

  opacity: .8;

  font-size: .7rem;
  color: var(--white);
`

export const FlagAvailable = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;

  background: var(--primary-color);

  border-radius: 15px;

  padding: .3rem .8rem;

  opacity: .8;

  font-size: .7rem;
  color: var(--white);
`