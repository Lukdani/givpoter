import React, { useContext } from "react";
import useForm from "../../../hooks/useForm";
import { AuthContext } from "../../../providers/authProvider";

import { Column, Row } from "../../Common/components/grid";
import SearchBox from "../../Common/SearchBox";

import { Logo } from "./components.ts/logo";

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <Row style={{ backgroundColor: "#fff" }}>
      <Column></Column>
      <Column alignment="center">
        <Logo>NoseBook</Logo>
      </Column>
      <Column padding={true} alignment="right" valign={true} halign="right">
        <SearchBox />
      </Column>
    </Row>
  );
};

export default Header;
