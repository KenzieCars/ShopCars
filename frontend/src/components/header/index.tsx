import React, { useState } from "react";
import { Menu } from "@mui/material";
import LogoHeader from "../../../public/LogoHeader.png";
import { useMediaQuery } from "@mui/material";
import { IconButton } from "@mui/material";
import { GiHamburgerMenu } from "react-icons/gi";
import { DivHeader, MobileNav, ButtonHeader, Nav } from "./style";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  const isMobile = useMediaQuery("(max-width: 700px)");

  return (
    <>
      <DivHeader>
        <Link to='/'>
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
              <ButtonHeader to='/login'>Fazer Login</ButtonHeader>
              <ButtonHeader to='/register'>Cadastrar</ButtonHeader>
            </Menu>
          </MobileNav>
        ) : (
          <Nav>
            <ButtonHeader to='/login'>Fazer Login</ButtonHeader>
            <ButtonHeader to='/register'>Cadastrar</ButtonHeader>
          </Nav>
        )}
      </DivHeader>
    </>
  );
};

export { Header };
