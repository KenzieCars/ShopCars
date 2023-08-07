import React, { useState } from "react";
import { Menu } from "@mui/material";
import {
  ButtonHeader,
  DivHeader,
  DivImg,
  DivIntImg,
  Nav,
  MobileNav,
  H1Styled,
  PStyled,
} from "./style";
import LogoHeader from "../../../public/LogoHeader.png";
import { useMediaQuery } from "@mui/material";
import { IconButton } from "@mui/material";
import { GiHamburgerMenu } from "react-icons/gi";

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
        <img src={LogoHeader} alt="Logo" />
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
              <ButtonHeader>Fazer Login</ButtonHeader>
              <ButtonHeader>Cadastrar</ButtonHeader>
            </Menu>
          </MobileNav>
        ) : (
          <Nav>
            <ButtonHeader>Fazer Login</ButtonHeader>
            <ButtonHeader>Cadastrar</ButtonHeader>
          </Nav>
        )}
      </DivHeader>

      <DivImg>
        <DivIntImg>
          <H1Styled>Motors Shop</H1Styled>
          <PStyled>A melhor plataforma de anúncios de carros do país</PStyled>
        </DivIntImg>
      </DivImg>
    </>
  );
};

export { Header };
