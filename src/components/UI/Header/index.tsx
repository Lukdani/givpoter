import React, { useContext } from "react";
import useForm from "../../../hooks/useForm";
import { AuthContext } from "../../../providers/authProvider";
import { UserContext } from "../../../providers/userProvider";
import { Column, Row } from "../../Common/components/grid";
import SearchBox from "../../Common/SearchBox";
import LoginForm from "./components.ts/LoginForm";
import { Logo } from "./components.ts/logo";
import UserMenu from "./components.ts/UserMenu";

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const { handleInputChange, data } = useForm({ password: "", username: "" });
  const { handleLogin } = useContext(AuthContext);
  const { userDetails } = useContext(UserContext);

  const onSubmit = () => {
    handleLogin(data.username, data.password);
  };

  return (
    <Row style={{ backgroundColor: "#fff" }}>
      <Column></Column>
      <Column alignment="center">
        <Logo>NoseBook</Logo>
      </Column>
      <Column padding={true} alignment="right" valign={true} halign="right">
        {userDetails?.firstname ? (
          <UserMenu
            username={`${userDetails?.firstname} ${userDetails?.surname}`}
          />
        ) : (
          <LoginForm handleChange={handleInputChange} handleSubmit={onSubmit} />
        )}

        {/* <SearchBox /> */}
      </Column>
    </Row>
  );
};

export default Header;
