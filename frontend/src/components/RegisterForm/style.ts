import { styled } from "styled-components";

export const MainContainerRegister = styled.main`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  @media (min-width: 768px) {
    margin-top: 7rem;
    align-items: center;
    padding-bottom: 4rem;
  }
`;

export const FormRegisterContainer = styled.form`
  width: 95%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 8px;
  padding: 1.4rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  background: var(--white);
  max-width: 412px;
  margin: 0 auto;
`;

export const TitleRegister = styled.div`
  > h3 {
    color: var(--gray);
  }
`;

export const TitleOptions = styled.div`
  > h4 {
    color: var(--gray);
    font-size: 0.9rem;
  }
`;

export const DualFields = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 0.5rem;

  > fieldset {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    border: none;

    > label {
      color: var(--gray);
      font-size: 0.8rem;
    }

    > input {
      padding: 0.7rem 1rem;
      width: 100%;
      max-width: 175px;
      width: fit-content;
      border-radius: 8px;
      border: 2px solid var(--white);
      outline: none;
      color: var(--gray);
      transition: 0.2s ease;

      &:focus {
        border: 2px solid var(--primary-color);
      }

      &::placeholder {
        color: var(--light-gray);
      }
    }
    /* > p {
            width: 40%;
        } */
  }
`;

export const FieldsetRegister = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  border: none;
  position: relative;

  > label {
    color: var(--gray);
    font-size: 0.8rem;
  }

  > textarea {
    padding: 0.7rem 1rem;
    border-radius: 8px;
    border: 2px solid var(--white);
    outline: none;
    color: var(--gray);
    transition: 0.2s ease;

    &:focus {
      border: 2px solid var(--primary-color);
    }

    &::placeholder {
      color: var(--light-gray);
    }
  }

  > input {
    padding: 0.7rem 1rem;
    border-radius: 8px;
    border: 2px solid var(--white);
    outline: none;
    color: var(--gray);
    transition: 0.2s ease;

    &:focus {
      border: 2px solid var(--primary-color);
    }

    &::placeholder {
      color: var(--light-gray);
    }
  }

  > svg {
    color: var(--gray);
    top: 35px;
    right: 20px;
    position: absolute;
    cursor: pointer;
  }
`;

export const RegisterButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  > button {
    background: var(--primary-color);
    padding: 0.8rem;
    width: 100%;
    color: var(--white);
    font-size: 0.9rem;
    font-weight: 600;
    transition: 0.2s ease;

    &:hover {
      background: var(--black);
      color: var(--white);
    }
  }
`;

export const AccountTypeField = styled.div`
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
`;
