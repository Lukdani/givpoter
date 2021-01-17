import React, { useState } from "react";
import { Column } from "../../Common/components/grid";
import { NavbarContainer } from "./components/navbarContainer";
import { NavigationLink } from "./components/navigationLink";

import { Button } from "../../Common/components/button";
import { Icon } from "../../Common/components/icon";
import Axios from "axios";
import { NavLink } from "react-router-dom";
import useForm from "../../../hooks/useForm";

export interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  const [firstName, setFirstName] = useState<string | undefined>("");
  const { handleInputChange, data } = useForm({ password: "", username: "" });

  const onSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    console.log(data);
    event.preventDefault();
    Axios.post<{ access_token: string }>(
      `https://nosetest.herokuapp.com/auth`,
      {
        username: data.username,
        password: data.password,
      }
    )
      .then((response) => {
        // handle success
        localStorage.setItem("token", response.data.access_token);
        setFirstName("success");
        /*
        Axios.get<{
          firstName: string;
          lastName: string;
          lastLogin: string;
        }>(`/api/UserDetails?userId=${response.data}`).then((response) => {
          setFirstName(response.data?.firstName);
        });
        */
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  };
  return (
    <Column>
      <NavbarContainer>
        <NavigationLink to="/">Home</NavigationLink>
        <NavigationLink to="/reviews">Anmeldelser</NavigationLink>
        <NavigationLink to="/blog">Blog</NavigationLink>
        <NavigationLink to="/om">Om</NavigationLink>
        <NavLink to="/createreview">
          <Button>Anmeld produkt</Button>
        </NavLink>
        {firstName && (
          <span style={{ fontWeight: "bold", fontSize: "20px" }}>
            {firstName}
          </span>
        )}

        {localStorage.getItem("user") ? (
          <Button backgroundColor="transparent">
            <Icon icon="user-circle" />
          </Button>
        ) : (
          <form style={{ display: "inline-block" }} onSubmit={onSubmit}>
            <input
              name="username"
              onChange={handleInputChange}
              placeholder="username"
              type="text"
            ></input>
            <input
              name="password"
              onChange={handleInputChange}
              placeholder="password"
              type="password"
            ></input>
            <input type="submit" value="Login" />
          </form>
        )}
      </NavbarContainer>
    </Column>
  );
};

export default NavBar;
