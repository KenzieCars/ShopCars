import styled from "styled-components";

export const MainContainerUserProfile = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 1rem;

  @media (min-width: 768px) {
    padding: 1.7rem 8rem;
  }
`

export const Divanucios = styled.div`
  > h2 {
    color: var(--gray);
    font-size: 1rem;
  }

  @media (min-width: 768px) {
    padding: 2rem 0;
    > h2 {
      font-size: 1.4rem;
    }
  }
`;

export const ListCardUserPage = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  overflow-x: auto;

  padding-top: .7rem;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    width: 100%;
    overflow-x: visible;
  }
`;
