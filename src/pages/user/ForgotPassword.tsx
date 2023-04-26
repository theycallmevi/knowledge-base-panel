import React from "react";
import SwipeToConfirmButton from "./SwipeToConfirmButton";

function forgotPassword() {
  const onConfirm = () => {
    console.log("Button confirmed!");
  };

  return (
    <div>
      <SwipeToConfirmButton onConfirm={onConfirm} />
    </div>
  );
}

export default forgotPassword;
