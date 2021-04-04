import React, { useContext } from "react";
import { Column } from "../../Common/components/grid";
import { NavbarContainer } from "./components/navbarContainer";
import { NavigationLink } from "./components/navigationLink";

import UserMenu from "../Header/components.ts/UserMenu";
import { AuthContext } from "../../../providers/authProvider";
import { UserContext } from "../../../providers/userProvider";
import useForm from "../../../hooks/useForm";
import LoginForm from "../Header/components.ts/LoginForm";

export interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  const { handleInputChange, data } = useForm({ password: "", username: "" });
  const { handleLogin } = useContext(AuthContext);
  const { userDetails } = useContext(UserContext);

  const onSubmit = () => {
    handleLogin(data.username, data.password);
  };

  return (
    <Column>
      <NavbarContainer>
        <NavigationLink to="/">Home</NavigationLink>
        <NavigationLink to="/reviews">Anmeldelser</NavigationLink>
        <NavigationLink to="/products">Produkter</NavigationLink>
        <NavigationLink to="/blog">Blog</NavigationLink>
        <NavigationLink to="/om">Om</NavigationLink>
        {userDetails?.firstname ? (
          <UserMenu
            username={`${userDetails?.firstname} ${userDetails?.surname}`}
          />
        ) : (
          <LoginForm handleChange={handleInputChange} handleSubmit={onSubmit} />
        )}
      </NavbarContainer>
    </Column>
  );
};

export default NavBar;
