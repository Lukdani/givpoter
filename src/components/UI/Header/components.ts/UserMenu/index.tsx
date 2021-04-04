import { Menu, MenuItem } from "@material-ui/core";
import React from "react";

import { Button } from "../../../../Common/components/button";
import { Icon } from "../../../../Common/components/icon";

export interface UserMenuProps {
  username: string;
}

const UserMenu: React.FC<UserMenuProps> = ({ username }) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handleClick = (event: React.MouseEvent) => {
    setAnchorEl(event.currentTarget as HTMLElement);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        backgroundColor="transparent"
      >
        <Icon addMargin="right" color="white" icon="user-circle" />
        {username}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Mine anmeldelser</MenuItem>
        <MenuItem onClick={handleClose}>Min profil</MenuItem>
        <MenuItem onClick={handleClose}>Log ud</MenuItem>
      </Menu>
    </>
  );
};

export default UserMenu;
