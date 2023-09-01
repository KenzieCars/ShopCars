import { styled } from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.5);
  z-index: 9;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalDetails = styled.div`
  padding: 1rem;

  background: var(--white);

  width: 95%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  gap: .8rem;

  border-radius: 6px;

  @media (min-width: 768px) {
    width: 650px;

    padding: 1rem 2rem;
  }
`

export const TitleAndCloseBtn = styled.div`
  display: flex;
  justify-content: space-between;

  border-bottom: 1px solid var(--light-gray); 

  padding-bottom: .8rem;

  > span {
    color: var(--light-gray);

    cursor: pointer;

    &:hover {
      color: var(--black);
    }
  }
`

export const PictureAndInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: .8rem;

  > figure > img {
    width: 350px;
    object-fit: contain;

    border-radius: 6px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > h5 {
    font-size: 1rem;

    color: var(--black);
  }

  > p {
    color: var(--gray);
    font-size: .7rem;
  }
  @media (min-width: 768px) {
    width: 50%;
  }
`

export const KmAndYear = styled.div`
  display: flex;
  justify-content: space-between;

  > span {
    font-size: .8rem;
    color: var(--gray);
  }
`

export const NameAndPrice = styled.div`
  display: flex;

  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    gap: .4rem;

    :nth-child(1) {
      width: 20px;
      height: 20px;

      background: var(--primary-color);

      border-radius: 50%;

      display: flex;
      justify-content: center;
      align-items: center;

      font-size: .7rem;
      color: var(--white);
    }

    :nth-child(2) {
      color: var(--gray);
      font-size: .8rem;
    }
  }

  > span {
    color: var(--gray);
    font-size: .8rem;
    font-weight: 600;
  }
`