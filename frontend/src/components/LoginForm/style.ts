import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const MainContainerLogin = styled.main`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  @media (min-width: 768px) {
    margin-top: 7rem;
    align-items: center;

    height: 100vh;

    padding-bottom: 4rem;
  }
`

export const FormLoginContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  border-radius: 8px;

  padding: 1.4rem;

  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  background: var(--white);

  @media (min-width: 768px) {
    width: 412px;
  }
`

export const TitleLogin = styled.div`
  > h3 {
    color: var(--gray);
  }
`

export const FieldsetLogin = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: .4rem;
  position: relative;

  border: none;

  > label {
    color: var(--gray);
    font-size: .8rem;
  }

  > input {
    padding: .7rem 1rem;
    
    border-radius: 8px;
    border: 2px solid var(--white);
    outline: none;

    color: var(--gray);
    
    transition: .2s ease;
    
    &:focus {
      border: 2px solid var(--primary-color);
    }

    &::placeholder {
      color: var(--light-gray);
    }
  }

  > svg {
        color: var(--gray);
        top: 36px;
        right: 20px;
        position: absolute;
    }
`

export const ForgotMyPassword = styled.div`
  display: flex;
  align-items: flex-end;

  > span {
    font-size: .7rem;
    font-weight: 600;
    color: var(--gray);

    align-self: flex-end;

    cursor: pointer;

    transition: .2s ease;

    &:hover {
      color: var(--primary-color);
    }

    @media (min-width: 768px) {
      font-size: .8rem;
    }
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  > button {
    background: var(--primary-color);

    padding: .8rem;

    width: 100%;

    color: var(--white);
    font-size: .9rem;
    font-weight: 600;

    transition: .2s ease;

    &:hover {
      background: var(--orange);
      color: var(--white);
    }

    &:disabled {
      background: var(--light-gray); // Change background color when disabled
      cursor: auto;
    }
  }
`

export const ButtonToRegister = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-color);
  font-size: .7rem;
  font-weight: 600;

  border-radius: 6px;
  border: 1.5px solid var(--primary-color);

  width: 100%;
  padding: .8rem;

  cursor: pointer;

  transition: .2s ease;

  &:hover {
    color: var(--orange);
    border: 1.5px solid var(--orange);
  }

  @media (min-width: 768px) {
    font-size: .8rem;
  }
`

export const Error = styled.p`
    color: var(--alert-negative);
    font-size: .5rem;
    letter-spacing: .04rem;
    transition: .4s ease;
`