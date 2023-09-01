import React, { useContext, useState } from "react";
import { Menu } from "@mui/material";
import LogoHeader from "../../../public/LogoHeader.png";
import { useMediaQuery } from "@mui/material";
import { IconButton } from "@mui/material";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  DivHeader,
  MobileNav,
  ButtonHeader,
  Nav,
  UserHeaderContainer,
} from "./style";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../providers/UserProvider/UserContext";
import UserModalHeader from "./UserModalHeader";


const Header = () => {
  const { userIdCars } = useContext(UserContext);
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);
  const [userModalHeader, setUserModalHeader] = useState(false);
  const path = window.location.pathname
  const navigate = useNavigate();

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  const isMobile = useMediaQuery("(max-width: 700px)");

  return (
    <>
      <DivHeader>
        <Link to="/home">
          <img src={LogoHeader} alt="Logo" />
        </Link>
        {isMobile ? (
          <MobileNav>
            <IconButton onClick={handleMenuOpen}>
              <GiHamburgerMenu />
            </IconButton>
            <Menu
              anchorEl={menuAnchor}
              open={Boolean(menuAnchor)}
              onClose={handleMenuClose}
            >
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
                    {path !== '/login' && 
                      <ButtonHeader onClick={handleLoginClick}>
                        Fazer Login
                      </ButtonHeader>
                    }

                    <ButtonHeader onClick={handleRegisterClick}>
                      Cadastrar
                    </ButtonHeader>
                  </>
                )}
              </Nav>
            </Menu>
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
                 {path !== '/login' &&
                      <ButtonHeader onClick={handleLoginClick}>
                        Fazer Login
                      </ButtonHeader>
                    }
                <ButtonHeader onClick={handleRegisterClick}>
                  Cadastrar
                </ButtonHeader>
              </>
            )}
          </Nav>
        )}
      </DivHeader>
    </>
  );
};

export { Header };
