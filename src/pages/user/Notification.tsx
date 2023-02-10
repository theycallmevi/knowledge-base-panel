import React, { useState } from "react";
import { Snackbar, Alert } from "@mui/material";

const Notification: React.FC = () => {
  const [open, setOpen] = useState(false);
  setOpen(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </>
  );
};

export default Notification;
