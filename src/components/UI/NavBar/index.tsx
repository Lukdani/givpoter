import React from "react";
import { Column } from "../../Common/components/grid";
import { NavbarContainer } from "./components/navbarContainer";
import { NavigationLink } from "./components/navigationLink";

import { Button } from "../../Common/components/button";

import { NavLink } from "react-router-dom";

export interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  return (
    <Column>
      <NavbarContainer>
        <NavigationLink to="/">Home</NavigationLink>
        <NavigationLink to="/reviews">Anmeldelser</NavigationLink>
        <NavigationLink to="/products">Produkter</NavigationLink>
        <NavigationLink to="/blog">Blog</NavigationLink>
        <NavigationLink to="/om">Om</NavigationLink>
        <NavLink to="/createreview">
          <Button>Anmeld produkt</Button>
        </NavLink>
      </NavbarContainer>
    </Column>
  );
};

export default NavBar;
