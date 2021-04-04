import React, { ChangeEvent, useCallback } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import { Button } from "../../../../Common/components/button";

export interface LoginFormProps {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
  handleChange,
  handleSubmit,
}) => {
  const [open, setOpen] = React.useState(false);

  const submitForm = useCallback(() => {
    handleClose();
    handleSubmit();
  }, [handleSubmit]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>Log ind</Button>
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Log ind med din konto</DialogTitle>
        <DialogContent>
          <form style={{ display: "inline-block" }} onSubmit={handleSubmit}>
            <input
              name="username"
              onChange={handleChange}
              placeholder="username"
              type="text"
            ></input>
            <br />
            <br />
            <input
              name="password"
              onChange={handleChange}
              placeholder="password"
              type="password"
            ></input>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={submitForm} color="primary">
            Log ind
          </Button>
          <Button backgroundColor="#bdbdbd" onClick={handleClose} color="primary">
            Afbryd
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default LoginForm;
