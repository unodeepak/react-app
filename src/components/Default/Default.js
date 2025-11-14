import { Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Default = () => {
  const navigate = useNavigate();

  return (
    /* JSX => Javascript + XML(HMTL) */
    <>
      <h1>Default Component</h1>
      <Button onClick={() => navigate("/home")} variant="contained" color="warning">Go Back into Home Page</Button>
      {/* <button onClick={() => navigate("/home")}>
        Go Back into Home Page
      </button> */}
    </>
  );
};

export default Default;
