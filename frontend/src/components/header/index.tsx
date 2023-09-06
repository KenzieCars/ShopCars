import { useContext, useState } from "react";
import { useMediaQuery } from "@mui/material";
import {
  DivHeader,
  MobileNav,
  ButtonHeader,
  Nav,
  UserHeaderContainer,
  HeaderContainer,
  Logo,
  CustomHamburgerMenu,
} from "./style";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../providers/UserProvider/UserContext";
import UserModalHeader from "./UserModalHeader";

const Header = () => {
  const { userIdCars } = useContext(UserContext);
  const [userModalHeader, setUserModalHeader] = useState(false);
  const path = window.location.pathname;
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  const isMobile = useMediaQuery("(max-width: 700px)");

  return (
    <>
      <HeaderContainer>
        <DivHeader>
          <Link to="/home">
            <Logo>
              <h2>Motors</h2>
              <span>Shop</span>
            </Logo>
          </Link>
          {isMobile ? (
            <MobileNav>
              <CustomHamburgerMenu
                onClick={() => {
                  setUserModalHeader(!userModalHeader);
                }}
              />
              {userModalHeader && (
                <Nav>
                  {userIdCars ? (
                    <UserHeaderContainer>
                      <span>{userIdCars.name[0]}</span>
                      <span>{userIdCars.name.split(" ")[0]}</span>
                      {userModalHeader && <UserModalHeader />}
                    </UserHeaderContainer>
                  ) : (
                    <>
                      {path !== "/login" && (
                        <ButtonHeader onClick={handleLoginClick}>
                          Fazer Login
                        </ButtonHeader>
                      )}

                      <ButtonHeader onClick={handleRegisterClick}>
                        Cadastrar
                      </ButtonHeader>
                    </>
                  )}
                </Nav>
              )}
            </MobileNav>
          ) : (
            <Nav>
              {userIdCars ? (
                <UserHeaderContainer
                  onClick={() => setUserModalHeader(!userModalHeader)}
                >
                  <span>{userIdCars.name[0]}</span>
                  <span>{userIdCars.name.split(" ")[0]}</span>
                  {userModalHeader && <UserModalHeader />}
                </UserHeaderContainer>
              ) : (
                <>
                  {path !== "/login" && (
                    <ButtonHeader onClick={handleLoginClick}>
                      Fazer Login
                    </ButtonHeader>
                  )}
                  <ButtonHeader onClick={handleRegisterClick}>
                    Cadastrar
                  </ButtonHeader>
                </>
              )}
            </Nav>
          )}
        </DivHeader>
      </HeaderContainer>
    </>
  );
};

export { Header };
