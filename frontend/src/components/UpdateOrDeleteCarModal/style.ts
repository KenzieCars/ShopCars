import styled from "styled-components";

export const CarStatusField = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 0.5rem;

  > input {
    display: none;
  }

  > label {
    background: var(--primary-color);
    padding: 0.8rem;
    width: 100%;
    color: var(--white);
    font-size: 0.9rem;
    font-weight: 600;
    transition: 0.2s ease;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
      background: var(--gray);
      color: var(--white);
    }
  }
`

export const UpdateButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: .3rem;

    > button {
        background: var(--primary-color);
        padding: .8rem;
        width: 49%;
        color: var(--white);
        font-size: .9rem;
        font-weight: 600;
        transition: .2s ease;

        &:hover {
            background: var(--black);
            color: var(--white);
        }
    }

    > .cancel {
        background-color: var(--light-gray);
        height: 100%;

        &:hover{
            background-color: var(--gray);
        }
    }
`

export const GoodPriceAnotation = styled.p`
    color: var(--light-gray);
    font-size: .5rem;
    letter-spacing: .04rem;
    transition: .4s ease;
    position: absolute;
    bottom: -15px;
    left: 1.5rem;

    @media (width < 485px){
      bottom: -28px;
    }
`