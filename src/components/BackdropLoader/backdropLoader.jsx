import React from "react";
import { Backdrop, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

export default function BackdropLoader() {
  const loader = useSelector((state) => state.loader);
  return (
    <Backdrop style={{ color: "#fff", zIndex: "3" }} open={loader}>
      <CircularProgress color="secondary" />
    </Backdrop>
  );
}
