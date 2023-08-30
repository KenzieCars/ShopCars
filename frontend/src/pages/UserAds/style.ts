import { styled } from "styled-components"

export const SectionProfileInfoComponent = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 1rem;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

  border-radius: 8px;

  > p {
    color: var(--gray);
    font-size: .7rem;
    line-height: 150%;
  }

  @media (min-width: 768px) {
    margin-top: 5rem;
    padding: 2rem;

    > p {
      font-size: .8rem;
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
      color: var(--black);
      font-size: .9rem;
      font-weight: 600;
    }

    > span:nth-child(2) {
      background: #EDEAFD;
      color: var(--primary-color);
      font-size: .7rem;
      padding: .4rem;
      border-radius: 6px;
    }
  }
`

export const SiglaUser = styled.span`
  display: flex;
  align-items: center;

  border-radius: 50%;
  flex-shrink: 0;

  /* padding: .6rem 1.3rem; */

  width: 50px;
  height: 50px;

  background: var(--primary-color);

  color: var(--white);
  font-weight: 600;
`

export const CardListUserAds = styled.ul`
  display: flex;
  gap: 1rem;
  overflow-x: auto;

  padding-top: .7rem;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    width: 100%;
    padding: 3rem 0;
    overflow-x: visible;
  }
`