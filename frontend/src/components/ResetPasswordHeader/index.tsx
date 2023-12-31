import React, { useState } from "react";
import { Menu } from "@mui/material";
import LogoHeader from "../../../public/LogoHeader.png";
import { useMediaQuery } from "@mui/material";
import { IconButton } from "@mui/material";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { ButtonHeader, DivHeader, MobileNav, Nav } from "./style";

const ResetPasswordHeader = () => {
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);

  const navigate = useNavigate();

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  const isMobile = useMediaQuery("(max-width: 700px)");

  return (
    <>
      <DivHeader id="register_header">
        <img src={LogoHeader} alt="Logo" onClick={() => navigate("/")} />
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
              <ButtonHeader onClick={() => navigate("/")}>
                Ir para Home
              </ButtonHeader>
              <ButtonHeader onClick={() => navigate("/login")}>
                Fazer Login
              </ButtonHeader>
            </Menu>
          </MobileNav>
        ) : (
          <Nav>
            <ButtonHeader onClick={() => navigate("/")}>
              Ir para Home
            </ButtonHeader>
            <ButtonHeader onClick={() => navigate("/login")}>
              Fazer Login
            </ButtonHeader>
          </Nav>
        )}
      </DivHeader>
    </>
  );
};

export default ResetPasswordHeader;
