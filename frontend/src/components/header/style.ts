import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const DivHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .7rem;
  
  background: var(--white);
  
  @media (min-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    
    width: 100%;
    padding: 1rem 3.75rem;

    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

export const ButtonHeader = styled.button`
  background: none;
  border-radius: 6px;
  
  cursor: pointer;
  
  padding: 10px 20px;

  font-size: .7rem;
  font-weight: 600;
  color: var(--primary-color);

  transition: .2s ease;

  @media (min-width: 768px) {
    border: 1px solid var(--primary-color);
    font-size: .9rem;

    &:hover {
      border: 1px solid var(--white);
      background: var(--black);
      color: var(--white);
    }
  }
`;

export const MobileNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-end;
`;