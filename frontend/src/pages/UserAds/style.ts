import { styled } from "styled-components"

export const SectionProfileInfoComponent = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 1rem;
  padding-top: 5rem;

  border-radius: 8px;

  > h2 {
    color: var(--light-gray);
    font-size: .8rem;
  }

  @media (min-width: 768px) {
    margin-top: 6rem;
    padding-top: 5rem;
    padding: 1.7rem 8rem;

    gap: 2.3rem;

    > p {
      font-size: .8rem;
    }

    > h2 {
      font-size: 1.2rem;
    }
  }
`

export const UserDiv = styled.div`
  display: flex;
  gap: .4rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: .4rem;

    > span:nth-child(1) {
      color: var(--light-gray);
      font-size: .9rem;
      font-weight: 600;
    }
    
    > span:nth-child(2) {
      background: var(--primary-color);
      color: var(--white);
      font-size: .7rem;
      padding: .4rem;
      border-radius: 6px;
    }
  }
`

export const SiglaUser = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  flex-shrink: 0;

  width: 50px;
  height: 50px;

  background: var(--yellow);

  color: var(--black);
  font-weight: 600;
`

export const CardListUserAds = styled.ul`
  display: flex;
  gap: 1rem;
  overflow-x: auto;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    width: 100%;
    overflow-x: visible;
  }
`

export const Shadow = styled.div`
  display: flex;
  flex-direction: column;
  gap: .7rem;

  /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */

  padding: 2rem;

  background: var(--gray);

  border-radius: 10px;

   > p {
    color: var(--light-gray);
    font-size: .7rem;
    line-height: 150%;
  }
`